import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ChatsController } from './controllers/chats.controller';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: 'envs/.api.env' })],
  controllers: [ChatsController, UsersController],
})
export class AppModule {}
