import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedCategories1767092409999 implements MigrationInterface {
  name = 'SeedCategories1767092409999';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "category" ("name") VALUES 
        ('Community events'), 
        ('Crime & Safety'), 
        ('Culture'), 
        ('Discounts & Benefits'), 
        ('Emergencies'), 
        ('For Seniors'), 
        ('Health'), 
        ('Kids & Family')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "category" WHERE "name" IN (
        'Community events', 
        'Crime & Safety', 
        'Culture', 
        'Discounts & Benefits', 
        'Emergencies', 
        'For Seniors', 
        'Health', 
        'Kids & Family'
      )`,
    );
  }
}
