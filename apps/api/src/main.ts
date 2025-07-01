import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogLevel, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // Setup logger
  const logger = new Logger('Bootstrap');
  const isProduction = process.env.NODE_ENV === 'production';
  const logLevels: LogLevel[] = isProduction
    ? ['error', 'warn', 'log']
    : ['error', 'warn', 'log', 'debug', 'verbose'];
  logger.log(process.env.NODE_ENV);

  const app = await NestFactory.create(AppModule, {
    logger: logLevels,
  });

  // Define CORS
  const originList = isProduction
    ? ['https://www.airgradient.com', 'https://map.airgradient.com']
    : [
        'https://www.airgradient.com',
        'https://map-int.airgradient.com',
        'http://localhost:7777',
        'http://localhost:3000',
      ];
  app.enableCors({
    origin: originList,
  });

  // Setup swagger
  const config = new DocumentBuilder()
    .setTitle('AirGradient Map API')
    .setDescription(
      'This is the API for the AirGradient Map. It provides access to air quality data from various sources.',
    )
    .setVersion('1.0')
    .addTag('Locations', 'Operations related to sensor locations')
    .addTag('Measurements', 'Operations related to air quality measurements')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('map/api/v1/docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
  logger.log('Application Started');
}
bootstrap();
