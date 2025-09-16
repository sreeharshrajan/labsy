import { db } from "@/server/db";

/**
 * Row Level Security (RLS) Context Manager
 * 
 * This module provides utilities to set RLS context for database operations.
 * It manages session variables that the RLS policies use to determine access.
 */

export interface RLSAuthContext {
  userId: string;
  tenantId: string;
  isSuperAdmin: boolean;
}

/**
 * Sets the RLS context for the current database connection
 * This should be called before any database operations that need RLS
 */
export async function setRLSContext(context: RLSAuthContext): Promise<void> {
  await db.$executeRaw`
    SELECT set_config('app.current_user_id', ${context.userId}, true);
  `;
  
  await db.$executeRaw`
    SELECT set_config('app.current_tenant_id', ${context.tenantId}, true);
  `;
  
  await db.$executeRaw`
    SELECT set_config('app.is_super_admin', ${context.isSuperAdmin.toString()}, true);
  `;
}

/**
 * Clears the RLS context
 * This should be called after database operations are complete
 */
export async function clearRLSContext(): Promise<void> {
  await db.$executeRaw`
    SELECT set_config('app.current_user_id', '', true);
  `;
  
  await db.$executeRaw`
    SELECT set_config('app.current_tenant_id', '', true);
  `;
  
  await db.$executeRaw`
    SELECT set_config('app.is_super_admin', 'false', true);
  `;
}

/**
 * Executes a database operation with RLS context
 * This is a convenience function that automatically sets and clears context
 */
export async function withRLSContext<T>(
  context: RLSAuthContext,
  operation: () => Promise<T>
): Promise<T> {
  try {
    await setRLSContext(context);
    return await operation();
  } finally {
    await clearRLSContext();
  }
}

/**
 * Creates a Prisma client with RLS context pre-configured
 * This is useful for long-running operations where you want to maintain context
 */
export function createRLSPrismaClient(context: RLSAuthContext) {
  return {
    ...db,
    async $connect() {
      await db.$connect();
      await setRLSContext(context);
    },
    async $disconnect() {
      await clearRLSContext();
      await db.$disconnect();
    }
  };
}

/**
 * Gets the current RLS context from the database
 * Useful for debugging and verification
 */
export async function getCurrentRLSContext(): Promise<{
  userId: string | null;
  tenantId: string | null;
  isSuperAdmin: boolean;
}> {
  const result = await db.$queryRaw<Array<{
    current_user_id: string | null;
    current_tenant_id: string | null;
    is_super_admin: boolean;
  }>>`
    SELECT 
      current_setting('app.current_user_id', true) as current_user_id,
      current_setting('app.current_tenant_id', true) as current_tenant_id,
      COALESCE(current_setting('app.is_super_admin', true)::boolean, false) as is_super_admin;
  `;
  
  const context = result[0];
  return {
    userId: context?.current_user_id || null,
    tenantId: context?.current_tenant_id || null,
    isSuperAdmin: context?.is_super_admin || false,
  };
}

/**
 * Validates that RLS context is properly set
 * Throws an error if context is missing or invalid
 */
export async function validateRLSContext(): Promise<void> {
  const context = await getCurrentRLSContext();
  
  if (!context.userId) {
    throw new Error("RLS context missing: userId not set");
  }
  
  if (!context.tenantId && !context.isSuperAdmin) {
    throw new Error("RLS context missing: tenantId not set and user is not super admin");
  }
}

/**
 * Helper function to extract RLS context from NextAuth session
 * This assumes your session includes the necessary user and tenant information
 */
export function extractRLSContextFromSession(session: any): RLSAuthContext | null {
  if (!session?.user?.id) {
    return null;
  }
  
  const tenantId = session.user.tenantId;
  const isSuperAdmin = session.user.isSuperAdmin || false;
  
  // Super admins don't need a tenant ID, but regular users do
  if (!tenantId && !isSuperAdmin) {
    return null;
  }
  
  return {
    userId: session.user.id,
    tenantId: tenantId || '', // Empty string for super admins
    isSuperAdmin,
  };
}
