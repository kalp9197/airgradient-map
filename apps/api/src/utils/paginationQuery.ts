import { IsNumber, Min, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class PaginationQuery {
  @ApiProperty({
    description: 'The page number to retrieve.',
    required: false,
    minimum: 1,
    default: 1,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  page: number = 1;

  @ApiProperty({
    description: 'The number of items to retrieve per page.',
    required: false,
    minimum: 1,
    default: 100,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  pagesize: number = 100;
}

export default PaginationQuery;
