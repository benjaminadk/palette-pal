// Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  palette: (where?: PaletteWhereInput) => Promise<boolean>;
  tag: (where?: TagWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  palette: (where: PaletteWhereUniqueInput) => PaletteNullablePromise;
  palettes: (args?: {
    where?: PaletteWhereInput;
    orderBy?: PaletteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Palette>;
  palettesConnection: (args?: {
    where?: PaletteWhereInput;
    orderBy?: PaletteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PaletteConnectionPromise;
  tag: (where: TagWhereUniqueInput) => TagNullablePromise;
  tags: (args?: {
    where?: TagWhereInput;
    orderBy?: TagOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Tag>;
  tagsConnection: (args?: {
    where?: TagWhereInput;
    orderBy?: TagOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TagConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPalette: (data: PaletteCreateInput) => PalettePromise;
  updatePalette: (args: {
    data: PaletteUpdateInput;
    where: PaletteWhereUniqueInput;
  }) => PalettePromise;
  updateManyPalettes: (args: {
    data: PaletteUpdateManyMutationInput;
    where?: PaletteWhereInput;
  }) => BatchPayloadPromise;
  upsertPalette: (args: {
    where: PaletteWhereUniqueInput;
    create: PaletteCreateInput;
    update: PaletteUpdateInput;
  }) => PalettePromise;
  deletePalette: (where: PaletteWhereUniqueInput) => PalettePromise;
  deleteManyPalettes: (where?: PaletteWhereInput) => BatchPayloadPromise;
  createTag: (data: TagCreateInput) => TagPromise;
  updateTag: (args: {
    data: TagUpdateInput;
    where: TagWhereUniqueInput;
  }) => TagPromise;
  updateManyTags: (args: {
    data: TagUpdateManyMutationInput;
    where?: TagWhereInput;
  }) => BatchPayloadPromise;
  upsertTag: (args: {
    where: TagWhereUniqueInput;
    create: TagCreateInput;
    update: TagUpdateInput;
  }) => TagPromise;
  deleteTag: (where: TagWhereUniqueInput) => TagPromise;
  deleteManyTags: (where?: TagWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  palette: (
    where?: PaletteSubscriptionWhereInput
  ) => PaletteSubscriptionPayloadSubscription;
  tag: (
    where?: TagSubscriptionWhereInput
  ) => TagSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Role = "ADMIN" | "USER";

export type TagOrderByInput = "id_ASC" | "id_DESC" | "text_ASC" | "text_DESC";

export type PaletteOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "title_ASC"
  | "title_DESC"
  | "likes_ASC"
  | "likes_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "twitterId_ASC"
  | "twitterId_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "image_ASC"
  | "image_DESC"
  | "confirmed_ASC"
  | "confirmed_DESC"
  | "forgotPasswordLock_ASC"
  | "forgotPasswordLock_DESC"
  | "role_ASC"
  | "role_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface PaletteUpdateInput {
  title?: Maybe<String>;
  colors?: Maybe<PaletteUpdatecolorsInput>;
  names?: Maybe<PaletteUpdatenamesInput>;
  tags?: Maybe<TagUpdateManyWithoutPaletteInput>;
  likes?: Maybe<Int>;
  owner?: Maybe<UserUpdateOneInput>;
}

export type PaletteWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface UserUpdateOneInput {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface TagUpdateManyWithoutPaletteInput {
  create?: Maybe<TagCreateWithoutPaletteInput[] | TagCreateWithoutPaletteInput>;
  delete?: Maybe<TagWhereUniqueInput[] | TagWhereUniqueInput>;
  connect?: Maybe<TagWhereUniqueInput[] | TagWhereUniqueInput>;
  set?: Maybe<TagWhereUniqueInput[] | TagWhereUniqueInput>;
  disconnect?: Maybe<TagWhereUniqueInput[] | TagWhereUniqueInput>;
  update?: Maybe<
    | TagUpdateWithWhereUniqueWithoutPaletteInput[]
    | TagUpdateWithWhereUniqueWithoutPaletteInput
  >;
  upsert?: Maybe<
    | TagUpsertWithWhereUniqueWithoutPaletteInput[]
    | TagUpsertWithWhereUniqueWithoutPaletteInput
  >;
  deleteMany?: Maybe<TagScalarWhereInput[] | TagScalarWhereInput>;
  updateMany?: Maybe<
    TagUpdateManyWithWhereNestedInput[] | TagUpdateManyWithWhereNestedInput
  >;
}

export interface PaletteWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  tags_every?: Maybe<TagWhereInput>;
  tags_some?: Maybe<TagWhereInput>;
  tags_none?: Maybe<TagWhereInput>;
  likes?: Maybe<Int>;
  likes_not?: Maybe<Int>;
  likes_in?: Maybe<Int[] | Int>;
  likes_not_in?: Maybe<Int[] | Int>;
  likes_lt?: Maybe<Int>;
  likes_lte?: Maybe<Int>;
  likes_gt?: Maybe<Int>;
  likes_gte?: Maybe<Int>;
  owner?: Maybe<UserWhereInput>;
  AND?: Maybe<PaletteWhereInput[] | PaletteWhereInput>;
  OR?: Maybe<PaletteWhereInput[] | PaletteWhereInput>;
  NOT?: Maybe<PaletteWhereInput[] | PaletteWhereInput>;
}

export interface PaletteCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  colors?: Maybe<PaletteCreatecolorsInput>;
  names?: Maybe<PaletteCreatenamesInput>;
  tags?: Maybe<TagCreateManyWithoutPaletteInput>;
  likes?: Maybe<Int>;
  owner?: Maybe<UserCreateOneInput>;
}

export interface TagSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TagWhereInput>;
  AND?: Maybe<TagSubscriptionWhereInput[] | TagSubscriptionWhereInput>;
  OR?: Maybe<TagSubscriptionWhereInput[] | TagSubscriptionWhereInput>;
  NOT?: Maybe<TagSubscriptionWhereInput[] | TagSubscriptionWhereInput>;
}

export interface PaletteCreatecolorsInput {
  set?: Maybe<String[] | String>;
}

export interface UserUpdateManyMutationInput {
  twitterId?: Maybe<ID_Input>;
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  image?: Maybe<String>;
  confirmed?: Maybe<Boolean>;
  forgotPasswordLock?: Maybe<Boolean>;
  role?: Maybe<Role>;
}

export interface PaletteCreatenamesInput {
  set?: Maybe<String[] | String>;
}

export interface TagUpdateManyMutationInput {
  text?: Maybe<String>;
}

export interface TagCreateManyWithoutPaletteInput {
  create?: Maybe<TagCreateWithoutPaletteInput[] | TagCreateWithoutPaletteInput>;
  connect?: Maybe<TagWhereUniqueInput[] | TagWhereUniqueInput>;
}

export interface PaletteUpdateWithoutTagsDataInput {
  title?: Maybe<String>;
  colors?: Maybe<PaletteUpdatecolorsInput>;
  names?: Maybe<PaletteUpdatenamesInput>;
  likes?: Maybe<Int>;
  owner?: Maybe<UserUpdateOneInput>;
}

export interface TagCreateWithoutPaletteInput {
  id?: Maybe<ID_Input>;
  text: String;
}

export interface PaletteUpdateOneWithoutTagsInput {
  create?: Maybe<PaletteCreateWithoutTagsInput>;
  update?: Maybe<PaletteUpdateWithoutTagsDataInput>;
  upsert?: Maybe<PaletteUpsertWithoutTagsInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<PaletteWhereUniqueInput>;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface PaletteCreateWithoutTagsInput {
  id?: Maybe<ID_Input>;
  title: String;
  colors?: Maybe<PaletteCreatecolorsInput>;
  names?: Maybe<PaletteCreatenamesInput>;
  likes?: Maybe<Int>;
  owner?: Maybe<UserCreateOneInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  twitterId?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  image: String;
  confirmed?: Maybe<Boolean>;
  forgotPasswordLock?: Maybe<Boolean>;
  role?: Maybe<Role>;
}

export interface PaletteCreateOneWithoutTagsInput {
  create?: Maybe<PaletteCreateWithoutTagsInput>;
  connect?: Maybe<PaletteWhereUniqueInput>;
}

export interface UserUpdateDataInput {
  twitterId?: Maybe<ID_Input>;
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  image?: Maybe<String>;
  confirmed?: Maybe<Boolean>;
  forgotPasswordLock?: Maybe<Boolean>;
  role?: Maybe<Role>;
}

export interface PaletteUpdateManyMutationInput {
  title?: Maybe<String>;
  colors?: Maybe<PaletteUpdatecolorsInput>;
  names?: Maybe<PaletteUpdatenamesInput>;
  likes?: Maybe<Int>;
}

export interface PaletteUpdatecolorsInput {
  set?: Maybe<String[] | String>;
}

export interface TagWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  palette?: Maybe<PaletteWhereInput>;
  AND?: Maybe<TagWhereInput[] | TagWhereInput>;
  OR?: Maybe<TagWhereInput[] | TagWhereInput>;
  NOT?: Maybe<TagWhereInput[] | TagWhereInput>;
}

export interface PaletteUpdatenamesInput {
  set?: Maybe<String[] | String>;
}

export interface UserUpdateInput {
  twitterId?: Maybe<ID_Input>;
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  image?: Maybe<String>;
  confirmed?: Maybe<Boolean>;
  forgotPasswordLock?: Maybe<Boolean>;
  role?: Maybe<Role>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  twitterId?: Maybe<ID_Input>;
  twitterId_not?: Maybe<ID_Input>;
  twitterId_in?: Maybe<ID_Input[] | ID_Input>;
  twitterId_not_in?: Maybe<ID_Input[] | ID_Input>;
  twitterId_lt?: Maybe<ID_Input>;
  twitterId_lte?: Maybe<ID_Input>;
  twitterId_gt?: Maybe<ID_Input>;
  twitterId_gte?: Maybe<ID_Input>;
  twitterId_contains?: Maybe<ID_Input>;
  twitterId_not_contains?: Maybe<ID_Input>;
  twitterId_starts_with?: Maybe<ID_Input>;
  twitterId_not_starts_with?: Maybe<ID_Input>;
  twitterId_ends_with?: Maybe<ID_Input>;
  twitterId_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  image?: Maybe<String>;
  image_not?: Maybe<String>;
  image_in?: Maybe<String[] | String>;
  image_not_in?: Maybe<String[] | String>;
  image_lt?: Maybe<String>;
  image_lte?: Maybe<String>;
  image_gt?: Maybe<String>;
  image_gte?: Maybe<String>;
  image_contains?: Maybe<String>;
  image_not_contains?: Maybe<String>;
  image_starts_with?: Maybe<String>;
  image_not_starts_with?: Maybe<String>;
  image_ends_with?: Maybe<String>;
  image_not_ends_with?: Maybe<String>;
  confirmed?: Maybe<Boolean>;
  confirmed_not?: Maybe<Boolean>;
  forgotPasswordLock?: Maybe<Boolean>;
  forgotPasswordLock_not?: Maybe<Boolean>;
  role?: Maybe<Role>;
  role_not?: Maybe<Role>;
  role_in?: Maybe<Role[] | Role>;
  role_not_in?: Maybe<Role[] | Role>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type TagWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface TagUpdateWithWhereUniqueWithoutPaletteInput {
  where: TagWhereUniqueInput;
  data: TagUpdateWithoutPaletteDataInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  twitterId?: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface TagUpdateWithoutPaletteDataInput {
  text?: Maybe<String>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface TagUpdateManyDataInput {
  text?: Maybe<String>;
}

export interface TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput;
  data: TagUpdateManyDataInput;
}

export interface TagScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  AND?: Maybe<TagScalarWhereInput[] | TagScalarWhereInput>;
  OR?: Maybe<TagScalarWhereInput[] | TagScalarWhereInput>;
  NOT?: Maybe<TagScalarWhereInput[] | TagScalarWhereInput>;
}

export interface TagUpsertWithWhereUniqueWithoutPaletteInput {
  where: TagWhereUniqueInput;
  update: TagUpdateWithoutPaletteDataInput;
  create: TagCreateWithoutPaletteInput;
}

export interface PaletteSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PaletteWhereInput>;
  AND?: Maybe<PaletteSubscriptionWhereInput[] | PaletteSubscriptionWhereInput>;
  OR?: Maybe<PaletteSubscriptionWhereInput[] | PaletteSubscriptionWhereInput>;
  NOT?: Maybe<PaletteSubscriptionWhereInput[] | PaletteSubscriptionWhereInput>;
}

export interface TagCreateInput {
  id?: Maybe<ID_Input>;
  text: String;
  palette?: Maybe<PaletteCreateOneWithoutTagsInput>;
}

export interface TagUpdateInput {
  text?: Maybe<String>;
  palette?: Maybe<PaletteUpdateOneWithoutTagsInput>;
}

export interface PaletteUpsertWithoutTagsInput {
  update: PaletteUpdateWithoutTagsDataInput;
  create: PaletteCreateWithoutTagsInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  twitterId?: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  email: String;
  password: String;
  image: String;
  confirmed: Boolean;
  forgotPasswordLock: Boolean;
  role: Role;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  twitterId: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  image: () => Promise<String>;
  confirmed: () => Promise<Boolean>;
  forgotPasswordLock: () => Promise<Boolean>;
  role: () => Promise<Role>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  twitterId: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  confirmed: () => Promise<AsyncIterator<Boolean>>;
  forgotPasswordLock: () => Promise<AsyncIterator<Boolean>>;
  role: () => Promise<AsyncIterator<Role>>;
}

export interface AggregatePalette {
  count: Int;
}

export interface AggregatePalettePromise
  extends Promise<AggregatePalette>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePaletteSubscription
  extends Promise<AsyncIterator<AggregatePalette>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Tag {
  id: ID_Output;
  text: String;
}

export interface TagPromise extends Promise<Tag>, Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  palette: <T = PalettePromise>() => T;
}

export interface TagSubscription
  extends Promise<AsyncIterator<Tag>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  palette: <T = PaletteSubscription>() => T;
}

export interface TagNullablePromise extends Promise<Tag | null>, Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  palette: <T = PalettePromise>() => T;
}

export interface PaletteEdge {
  node: Palette;
  cursor: String;
}

export interface PaletteEdgePromise extends Promise<PaletteEdge>, Fragmentable {
  node: <T = PalettePromise>() => T;
  cursor: () => Promise<String>;
}

export interface PaletteEdgeSubscription
  extends Promise<AsyncIterator<PaletteEdge>>,
    Fragmentable {
  node: <T = PaletteSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PaletteConnection {
  pageInfo: PageInfo;
  edges: PaletteEdge[];
}

export interface PaletteConnectionPromise
  extends Promise<PaletteConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PaletteEdge>>() => T;
  aggregate: <T = AggregatePalettePromise>() => T;
}

export interface PaletteConnectionSubscription
  extends Promise<AsyncIterator<PaletteConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PaletteEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePaletteSubscription>() => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface TagSubscriptionPayload {
  mutation: MutationType;
  node: Tag;
  updatedFields: String[];
  previousValues: TagPreviousValues;
}

export interface TagSubscriptionPayloadPromise
  extends Promise<TagSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TagPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TagPreviousValuesPromise>() => T;
}

export interface TagSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TagSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TagSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TagPreviousValuesSubscription>() => T;
}

export interface AggregateTag {
  count: Int;
}

export interface AggregateTagPromise
  extends Promise<AggregateTag>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTagSubscription
  extends Promise<AsyncIterator<AggregateTag>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface TagConnection {
  pageInfo: PageInfo;
  edges: TagEdge[];
}

export interface TagConnectionPromise
  extends Promise<TagConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TagEdge>>() => T;
  aggregate: <T = AggregateTagPromise>() => T;
}

export interface TagConnectionSubscription
  extends Promise<AsyncIterator<TagConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TagEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTagSubscription>() => T;
}

export interface PalettePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  title: String;
  colors: String[];
  names: String[];
  likes?: Int;
}

export interface PalettePreviousValuesPromise
  extends Promise<PalettePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  colors: () => Promise<String[]>;
  names: () => Promise<String[]>;
  likes: () => Promise<Int>;
}

export interface PalettePreviousValuesSubscription
  extends Promise<AsyncIterator<PalettePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  colors: () => Promise<AsyncIterator<String[]>>;
  names: () => Promise<AsyncIterator<String[]>>;
  likes: () => Promise<AsyncIterator<Int>>;
}

export interface PaletteSubscriptionPayload {
  mutation: MutationType;
  node: Palette;
  updatedFields: String[];
  previousValues: PalettePreviousValues;
}

export interface PaletteSubscriptionPayloadPromise
  extends Promise<PaletteSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PalettePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PalettePreviousValuesPromise>() => T;
}

export interface PaletteSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PaletteSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PaletteSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PalettePreviousValuesSubscription>() => T;
}

export interface Palette {
  id: ID_Output;
  createdAt: DateTimeOutput;
  title: String;
  colors: String[];
  names: String[];
  likes?: Int;
}

export interface PalettePromise extends Promise<Palette>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  colors: () => Promise<String[]>;
  names: () => Promise<String[]>;
  tags: <T = FragmentableArray<Tag>>(args?: {
    where?: TagWhereInput;
    orderBy?: TagOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  likes: () => Promise<Int>;
  owner: <T = UserPromise>() => T;
}

export interface PaletteSubscription
  extends Promise<AsyncIterator<Palette>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  colors: () => Promise<AsyncIterator<String[]>>;
  names: () => Promise<AsyncIterator<String[]>>;
  tags: <T = Promise<AsyncIterator<TagSubscription>>>(args?: {
    where?: TagWhereInput;
    orderBy?: TagOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  likes: () => Promise<AsyncIterator<Int>>;
  owner: <T = UserSubscription>() => T;
}

export interface PaletteNullablePromise
  extends Promise<Palette | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  colors: () => Promise<String[]>;
  names: () => Promise<String[]>;
  tags: <T = FragmentableArray<Tag>>(args?: {
    where?: TagWhereInput;
    orderBy?: TagOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  likes: () => Promise<Int>;
  owner: <T = UserPromise>() => T;
}

export interface User {
  id: ID_Output;
  twitterId?: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  email: String;
  password: String;
  image: String;
  confirmed: Boolean;
  forgotPasswordLock: Boolean;
  role: Role;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  twitterId: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  image: () => Promise<String>;
  confirmed: () => Promise<Boolean>;
  forgotPasswordLock: () => Promise<Boolean>;
  role: () => Promise<Role>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  twitterId: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  confirmed: () => Promise<AsyncIterator<Boolean>>;
  forgotPasswordLock: () => Promise<AsyncIterator<Boolean>>;
  role: () => Promise<AsyncIterator<Role>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  twitterId: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  image: () => Promise<String>;
  confirmed: () => Promise<Boolean>;
  forgotPasswordLock: () => Promise<Boolean>;
  role: () => Promise<Role>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface TagEdge {
  node: Tag;
  cursor: String;
}

export interface TagEdgePromise extends Promise<TagEdge>, Fragmentable {
  node: <T = TagPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TagEdgeSubscription
  extends Promise<AsyncIterator<TagEdge>>,
    Fragmentable {
  node: <T = TagSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface TagPreviousValues {
  id: ID_Output;
  text: String;
}

export interface TagPreviousValuesPromise
  extends Promise<TagPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
}

export interface TagPreviousValuesSubscription
  extends Promise<AsyncIterator<TagPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Palette",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;