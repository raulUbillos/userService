import { MigrationInterface, QueryRunner } from "typeorm";

export class fixedArrayTypeForPermissions1670806483448 implements MigrationInterface {
    name = 'fixedArrayTypeForPermissions1670806483448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "permisions"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "permisions" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "permisions"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "permisions" json NOT NULL`);
    }

}
