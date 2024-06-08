import { Migration } from '@mikro-orm/migrations';

export class Migration20240526081245 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "dob" timestamptz not null, add column "phone" varchar(255) not null, add column "address" jsonb null;');
  }

}
