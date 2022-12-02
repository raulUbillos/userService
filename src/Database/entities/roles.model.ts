import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Roles {
  @PrimaryColumn({
    type: 'uuid',
  })
  id: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'json',
  })
  permisions: any;
}
