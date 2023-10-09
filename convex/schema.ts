import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    imageUrl: v.string(),
    id: v.string(),
    status: v.string(),
  }),
  groups: defineTable({
    description: v.string(),
    groupImg: v.string(),
    name: v.string(),
    ownerId: v.id('users'),
  }),
});
