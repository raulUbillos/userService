import { MigrationInterface, QueryRunner } from 'typeorm';

export class addDefaultValuesForColumn1670802625352
  implements MigrationInterface
{
  name = 'addDefaultValuesForColumn1670802625352';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "roles_user" DROP CONSTRAINT "FK_f624613332eb30523fd92a1afd0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles_user" DROP CONSTRAINT "FK_eba369853935e74618ab535165e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles" ADD CONSTRAINT "UQ_648e3f5447f725579d7d4ffdfb7" UNIQUE ("name")`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles_user" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`,
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
    await queryRunner.query(
      `ALTER TABLE "roles_user" ALTER COLUMN "id" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles" DROP CONSTRAINT "UQ_648e3f5447f725579d7d4ffdfb7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles" ALTER COLUMN "id" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles_user" ADD CONSTRAINT "FK_eba369853935e74618ab535165e" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "id" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "roles_user" ADD CONSTRAINT "FK_f624613332eb30523fd92a1afd0" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
