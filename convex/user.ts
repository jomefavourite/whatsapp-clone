import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const getUsers = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('users').collect();
  },
});

// This is a mutation that creates a new user
export const create = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    imageUrl: v.string(),
    id: v.string(),
    status: v.string(),
  },
  handler: async ({ db }, args) => {
    await db.insert('users', args);
  },
});

// This is a query that returns a single user by ID
export const getUserId = query({
  args: { id: v.string() },
  handler: async (ctx, { id }) => {
    return await ctx.db
      .query('users')
      .filter((q) => q.eq(q.field('id'), id))
      .unique();
  },
});
