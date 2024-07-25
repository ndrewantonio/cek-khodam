import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MasterKhodam } from '../master-khodam.entity';

export class MasterKhodamDTO {
  @ApiProperty()
  khodamid: number;

  @ApiProperty()
  khodamname: string;

  @ApiPropertyOptional()
  createdby?: string;

  @ApiProperty()
  isdelete: number;

  constructor(masterKhodamEntity: MasterKhodam) {
    this.khodamid = masterKhodamEntity.khodamid;
    this.khodamname = masterKhodamEntity.khodamname;
    this.createdby = masterKhodamEntity.createdby;
    this.isdelete = masterKhodamEntity.isdelete;
  }
}
