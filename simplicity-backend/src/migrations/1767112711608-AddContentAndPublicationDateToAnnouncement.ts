import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddContentAndPublicationDateToAnnouncement1767112711608 implements MigrationInterface {
  name = 'AddContentAndPublicationDateToAnnouncement1767112711608';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "announcement" ADD "content" character varying NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE "announcement" ADD "publicationDate" TIMESTAMP NOT NULL DEFAULT NOW()`,
    );

    // Drop DEFAULTs - ensure DEFAULTs only apply on existing records
    await queryRunner.query(
      `ALTER TABLE "announcement" ALTER COLUMN "content" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "announcement" ALTER COLUMN "publicationDate" DROP DEFAULT`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "announcement" DROP COLUMN "publicationDate"`,
    );
    await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "content"`);
  }
}
