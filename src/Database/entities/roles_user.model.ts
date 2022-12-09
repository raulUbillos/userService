import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Roles } from './roles.model';
import { User } from './user.model';

@Entity()
export class RolesUser {
  @PrimaryColumn({
    type: 'uuid',
  })
  id: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Roles)
  role: Roles;
}
