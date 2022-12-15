import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUniqueToUserIdAndRoleId1670807386679 implements MigrationInterface {
    name = 'addedUniqueToUserIdAndRoleId1670807386679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles_user" ADD CONSTRAINT "UQ_6446f7a8da083aca26ea1e93e07" UNIQUE ("userId", "roleId")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles_user" DROP CONSTRAINT "UQ_6446f7a8da083aca26ea1e93e07"`);
    }

}
