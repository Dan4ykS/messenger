import { Controller, Get } from '@nestjs/common';

@Controller('chats')
export class ChatsController {
  @Get()
  getAll() {
    return 'Ты получил все чаты!';
  }
}
