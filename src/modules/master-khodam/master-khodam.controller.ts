import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Master Khodam')
@Controller('master-khodam')
export class MasterKhodamController {
  @Get('/')
  async findAll() {}
}
