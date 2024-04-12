import {
  integer,
  numeric,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  phone: text('phone').unique().notNull(),
  walletAddress: text('wallet_address').unique(),
  walletPrivateKey: text('wallet_private_key'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at'),
  verifiedAt: timestamp('verified_at'),
});

export const contacts = pgTable(
  'contacts',
  {
    user1Id: integer('user1_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    user2Id: integer('user2_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.user1Id, t.user2Id] }),
  }),
);

export const contactRequests = pgTable(
  'contact_requests',
  {
    senderId: integer('sender_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    receiverId: integer('receiver_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.senderId, t.receiverId] }),
  }),
);

export const blockedUsers = pgTable(
  'blocked_contacts',
  {
    blockerId: integer('blocker_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    blockedId: integer('blocked_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.blockerId, t.blockedId] }),
  }),
);

export const transactions = pgTable('transactions', {
  id: serial('id').primaryKey(),
  address: text('address').notNull(),
  senderId: integer('sender_id').references(() => users.id, { onDelete: 'cascade' }),
  senderWalletAddress: text('sender_wallet_address'),
  receiverId: integer('receiver_id').references(() => users.id, { onDelete: 'cascade' }),
  receiverWalletAddress: text('receiver_wallet_address'),
  currency: text('currency').notNull(),
  amount: numeric('amount', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
