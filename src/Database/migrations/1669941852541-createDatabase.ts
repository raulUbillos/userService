import { MigrationInterface, QueryRunner } from 'typeorm';

export class createDatabase1669941852541 implements MigrationInterface {
  name = 'createDatabase1669941852541';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL, "personalData" json NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "calendarId" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "roles" ("id" uuid NOT NULL, "name" character varying NOT NULL, "permisions" json NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "roles"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
