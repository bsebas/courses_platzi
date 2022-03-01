import {MigrationInterface, QueryRunner} from "typeorm";

export class indexProduct1646172235093 implements MigrationInterface {
    name = 'indexProduct1646172235093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX \`IDX_0decfc62b4e4834e2024a9d9c4\` ON \`product\` (\`price\`, \`stock\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_0decfc62b4e4834e2024a9d9c4\` ON \`product\``);
    }

}
