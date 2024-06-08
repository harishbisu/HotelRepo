import { Migration } from '@mikro-orm/migrations';

export class Migration20240605135255 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" rename column "address" to "location";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" rename column "location" to "address";');
  }

}
