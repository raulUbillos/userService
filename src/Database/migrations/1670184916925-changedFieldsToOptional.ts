import { MigrationInterface, QueryRunner } from "typeorm";

export class changedFieldsToOptional1670184916925 implements MigrationInterface {
    name = 'changedFieldsToOptional1670184916925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "personalData" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "calendarId" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "calendarId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "personalData" SET NOT NULL`);
    }

}
