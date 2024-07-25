import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ms_khodam')
export class MasterKhodam {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'khodamid' })
  khodamid: number;

  @Column({ type: 'varchar', name: 'khodamname' })
  khodamname: string;

  @Column({ type: 'varchar', name: 'createdby' })
  createdby: string;

  @Column({ type: 'int', name: 'isdelete' })
  isdelete: number;
}
