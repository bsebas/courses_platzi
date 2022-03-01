import {MigrationInterface, QueryRunner} from "typeorm";

export class indexProducts1646174756402 implements MigrationInterface {
    name = 'indexProducts1646174756402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order_product\` DROP FOREIGN KEY \`FK_073c85ed133e05241040bd70f02\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_6c687a8fa35b0ae35ce766b56ce\``);
        await queryRunner.query(`DROP INDEX \`REL_6c687a8fa35b0ae35ce766b56c\` ON \`user\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`customerId\` \`customer_id\` int NULL`);
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(55) NOT NULL, \`description\` text NOT NULL, \`price\` int NOT NULL, \`stock\` int NOT NULL, \`image\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`brand_id\` int NULL, INDEX \`IDX_4fbc36ad745962e5c11001e1a8\` (\`price\`, \`stock\`), UNIQUE INDEX \`IDX_4c9fb58de893725258746385e1\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products_categories\` (\`product_id\` int NOT NULL, \`categories_id\` int NOT NULL, INDEX \`IDX_f2c76a4306a82c696d620f81f0\` (\`product_id\`), INDEX \`IDX_d9c2def87b9f1ba8f9e3019b65\` (\`categories_id\`), PRIMARY KEY (\`product_id\`, \`categories_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_d72eb2a5bbff4f2533a5d4caff\` (\`customer_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_d72eb2a5bbff4f2533a5d4caff\` ON \`user\` (\`customer_id\`)`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_1530a6f15d3c79d1b70be98f2be\` FOREIGN KEY (\`brand_id\`) REFERENCES \`brand\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_product\` ADD CONSTRAINT \`FK_073c85ed133e05241040bd70f02\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_d72eb2a5bbff4f2533a5d4caff9\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products_categories\` ADD CONSTRAINT \`FK_f2c76a4306a82c696d620f81f08\` FOREIGN KEY (\`product_id\`) REFERENCES \`products\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products_categories\` ADD CONSTRAINT \`FK_d9c2def87b9f1ba8f9e3019b653\` FOREIGN KEY (\`categories_id\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products_categories\` DROP FOREIGN KEY \`FK_d9c2def87b9f1ba8f9e3019b653\``);
        await queryRunner.query(`ALTER TABLE \`products_categories\` DROP FOREIGN KEY \`FK_f2c76a4306a82c696d620f81f08\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_d72eb2a5bbff4f2533a5d4caff9\``);
        await queryRunner.query(`ALTER TABLE \`order_product\` DROP FOREIGN KEY \`FK_073c85ed133e05241040bd70f02\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_1530a6f15d3c79d1b70be98f2be\``);
        await queryRunner.query(`DROP INDEX \`REL_d72eb2a5bbff4f2533a5d4caff\` ON \`user\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_d72eb2a5bbff4f2533a5d4caff\``);
        await queryRunner.query(`DROP INDEX \`IDX_d9c2def87b9f1ba8f9e3019b65\` ON \`products_categories\``);
        await queryRunner.query(`DROP INDEX \`IDX_f2c76a4306a82c696d620f81f0\` ON \`products_categories\``);
        await queryRunner.query(`DROP TABLE \`products_categories\``);
        await queryRunner.query(`DROP INDEX \`IDX_4c9fb58de893725258746385e1\` ON \`products\``);
        await queryRunner.query(`DROP INDEX \`IDX_4fbc36ad745962e5c11001e1a8\` ON \`products\``);
        await queryRunner.query(`DROP TABLE \`products\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`customer_id\` \`customerId\` int NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_6c687a8fa35b0ae35ce766b56c\` ON \`user\` (\`customerId\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_6c687a8fa35b0ae35ce766b56ce\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_product\` ADD CONSTRAINT \`FK_073c85ed133e05241040bd70f02\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
