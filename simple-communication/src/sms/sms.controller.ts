import { Controller, Get } from '@nestjs/common';
import { SmsService } from './sms.service';

@Controller('sms')
export class SmsController  {
  constructor(private readonly smsService: SmsService) {}
  @Get()
findAll(): string {
 return this.smsService.findAll()
}
}
 
