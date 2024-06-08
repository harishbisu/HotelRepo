import { Migration } from '@mikro-orm/migrations';

export class Migration20240605133354 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "role" text check ("role" in (\'user\', \'admin\', \'superAdmin\')) not null default \'user\';');
  }

}
