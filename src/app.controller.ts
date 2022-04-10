import { Body, Controller, Get } from '@nestjs/common';
import { Size, TshirtDto } from './app.dto';

@Controller()
export class AppController {
  @Get()
  getHello(@Body() body: TshirtDto): TshirtDto {
    return {
      size: Size.BIG,
    };
  }
}
