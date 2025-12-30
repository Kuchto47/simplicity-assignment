import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRelationshipToCategoriesAndAnnouncements1767097134511 implements MigrationInterface {
  name = 'AddRelationshipToCategoriesAndAnnouncements1767097134511';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "announcement_categories_category" ("announcementId" uuid NOT NULL, "categoryId" uuid NOT NULL, CONSTRAINT "PK_897c58eeae4cfe35ca09a8c55de" PRIMARY KEY ("announcementId", "categoryId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ec882d4f558274cf2673b91697" ON "announcement_categories_category" ("announcementId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0d20fe4951977ffedeb3779230" ON "announcement_categories_category" ("categoryId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "announcement_categories_category" ADD CONSTRAINT "FK_ec882d4f558274cf2673b916973" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "announcement_categories_category" ADD CONSTRAINT "FK_0d20fe4951977ffedeb3779230e" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "announcement_categories_category" DROP CONSTRAINT "FK_0d20fe4951977ffedeb3779230e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "announcement_categories_category" DROP CONSTRAINT "FK_ec882d4f558274cf2673b916973"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_0d20fe4951977ffedeb3779230"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ec882d4f558274cf2673b91697"`,
    );
    await queryRunner.query(`DROP TABLE "announcement_categories_category"`);
  }
}
