import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import { API_PREFIX } from './constants/environment';

(async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(API_PREFIX);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3331;

  await app.listen(port);

  Logger.log(
    `🚀 Application api is running on: http://localhost:${port}/${API_PREFIX}`
  );
})();
