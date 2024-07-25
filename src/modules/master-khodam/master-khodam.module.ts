import { Module } from '@nestjs/common';
import { MasterKhodamController } from './master-khodam.controller';
import { MasterKhodamService } from './master-khodam.service';

@Module({
  imports: [],
  providers: [MasterKhodamService],
  controllers: [MasterKhodamController],
  exports: [],
})
export class MasterKhodamModule {}
