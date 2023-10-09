import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// get users except the current user login
export const getUsers = query({
  args: { id: v.string() },
  handler: async (ctx, { id }) => {
    return ctx.db
      .query('users')
      .filter((q) => q.neq(q.field('id'), id))
      .collect();
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
