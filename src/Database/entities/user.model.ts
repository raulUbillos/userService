import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({
    type: 'uuid',
  })
  id: string;

  @Column({
    type: 'json',
    nullable: true,
  })
  personalData?: any;

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
  email: string;

  @Column({
    type: 'bool',
  })
  isGoogleAuthenticated: boolean;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  calendarId?: string;
}
