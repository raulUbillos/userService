import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @Column({
    type: 'json',
    nullable: true,
  })
  personalData?: any;

  @Column({
    type: 'varchar',
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @Column({
    type: 'varchar',
    unique: true,
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
