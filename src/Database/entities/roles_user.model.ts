import { Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Roles } from './roles.model';
import { User } from './user.model';

@Entity()
@Unique(['user', 'role'])
export class RolesUser {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Roles)
  role: Roles;
}
