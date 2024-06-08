import { Migration } from '@mikro-orm/migrations';

export class Migration20240526085828 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "email" varchar(255) not null, add column "password" text null;');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop constraint "user_email_unique";');
  }

}
