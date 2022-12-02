import { MigrationInterface, QueryRunner } from 'typeorm';

export class addAsociationBetweenRolesAndUsers1669942489620
  implements MigrationInterface
{
  name = 'addAsociationBetweenRolesAndUsers1669942489620';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "roles_user" ("id" uuid NOT NULL, "userId" uuid, "roleId" uuid, CONSTRAINT "PK_a969861629af37cd1c7f4ff3e6b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles_user" ADD CONSTRAINT "FK_f624613332eb30523fd92a1afd0" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles_user" ADD CONSTRAINT "FK_eba369853935e74618ab535165e" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "roles_user" DROP CONSTRAINT "FK_eba369853935e74618ab535165e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles_user" DROP CONSTRAINT "FK_f624613332eb30523fd92a1afd0"`,
    );
    await queryRunner.query(`DROP TABLE "roles_user"`);
  }
}
