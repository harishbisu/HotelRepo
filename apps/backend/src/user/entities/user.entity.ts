import { Entity, Enum, PrimaryKey, Property, Unique } from '@mikro-orm/core';

export enum UserRole {
  user = 'user',
  admin = 'admin',
  superAdmin = 'superAdmin',
}

@Entity({ schema: 'public' })
export class User {
  @PrimaryKey()
  id: string;

  @Property()
  name: string;

  @Property()
  @Unique()
  email: string;

  @Enum({ items: () => UserRole, default: UserRole.user })
  role = UserRole.user;

  @Property()
  dob: Date;

  @Property()
  phone: string;

  @Property({ columnType: 'text', nullable: true })
  password!: string;

  @Property({ columnType: 'jsonb', nullable: true })
  location: LocationInterface;

  constructor({
    id,
    name,
    email,
    dob,
    phone,
    location,
  }: {
    id: string;
    name: string;
    email: string;
    dob: Date;
    phone: string;
    location: LocationInterface;
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.dob = dob;
    this.phone = phone;
    this.location = location;
  }
}

export interface LocationInterface {
  latitude: number;
  longitude: number;
}
