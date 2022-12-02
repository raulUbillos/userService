import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({
    type: 'uuid',
  })
  id: string;

  @Column({
    type: 'json',
  })
  personalData: any;

  @Column({
    type: 'varchar',
  })
  username: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @Column({
    type: 'varchar',
  })
  calendarId: string;
}
