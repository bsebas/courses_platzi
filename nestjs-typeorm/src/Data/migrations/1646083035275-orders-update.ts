import {MigrationInterface, QueryRunner} from "typeorm";

export class ordersUpdate1646083035275 implements MigrationInterface {
    name = 'ordersUpdate1646083035275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`date\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`date\` timestamp NOT NULL`);
    }

}
