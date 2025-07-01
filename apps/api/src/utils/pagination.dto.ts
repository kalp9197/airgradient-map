import { Type, applyDecorators } from '@nestjs/common';
import {
  ApiProperty,
  ApiExtraModels,
  ApiOkResponse,
  getSchemaPath,
  ApiOperation,
} from '@nestjs/swagger';

export class Pagination<TData> {
  @ApiProperty({ description: 'Array of data for the current page.' })
  data: TData[];

  @ApiProperty({ description: 'Total number of items in the current page.' })
  total: number;

  @ApiProperty({ description: 'The current page number.', required: false })
  page?: number;

  @ApiProperty({ description: 'The number of items per page.', required: false })
  pagesize?: number;

  constructor(data: TData[], page?: number, pagesize?: number) {
    this.data = data;
    this.total = data.length;
    this.page = page;
    this.pagesize = pagesize;
  }
}

export const ApiPaginatedResponse = <TModel extends Type<any>>(
  model: TModel,
  summary: string,
  description: string,
) => {
  return applyDecorators(
    ApiExtraModels(Pagination, model),
    ApiOperation({ summary: summary, description: description }),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(Pagination) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
};
