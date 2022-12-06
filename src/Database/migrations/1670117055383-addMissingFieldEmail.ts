import { MigrationInterface, QueryRunner } from 'typeorm';

export class addMissingFieldEmail1670117055383 implements MigrationInterface {
  name = 'addMissingFieldEmail1670117055383';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "email" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "isGoogleAuthenticated" boolean NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "isGoogleAuthenticated"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
  }
}
