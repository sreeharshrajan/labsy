import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "@/server/auth";
import { setRLSContext, clearRLSContext, extractRLSContextFromSession } from "@/server/rls";

/**
 * RLS Middleware for API routes
 * 
 * This middleware automatically sets Row Level Security context for API routes
 * based on the authenticated user's session.
 */

export async function withRLSMiddleware(
  handler: (req: NextRequest, context?: any) => Promise<NextResponse>
) {
  return async (req: NextRequest, context?: any) => {
    try {
      // Get the session
      const session = await auth();

      if (session) {
        // Extract RLS context from session
        const rlsContext = extractRLSContextFromSession(session);

        if (rlsContext) {
          // Set RLS context for this request
          await setRLSContext(rlsContext);
        }
      }

      // Execute the handler
      return await handler(req, context);

    } catch (error) {
      console.error("RLS Middleware error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    } finally {
      // Always clear the context after the request
      try {
        await clearRLSContext();
      } catch (error) {
        console.error("Error clearing RLS context:", error);
      }
    }
  };
}

/**
 * Alternative middleware that requires authentication
 * Use this for protected API routes
 */
export async function withAuthenticatedRLSMiddleware(
  handler: (req: NextRequest, context?: any) => Promise<NextResponse>
) {
  return async (req: NextRequest, context?: any) => {
    try {
      // Get the session
      const session = await auth();

      if (!session) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        );
      }

      // Extract RLS context from session
      const rlsContext = extractRLSContextFromSession(session);

      if (!rlsContext) {
        return NextResponse.json(
          { error: "Invalid session context" },
          { status: 401 }
        );
      }

      // Set RLS context for this request
      await setRLSContext(rlsContext);

      // Execute the handler
      return await handler(req, context);

    } catch (error) {
      console.error("Authenticated RLS Middleware error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    } finally {
      // Always clear the context after the request
      try {
        await clearRLSContext();
      } catch (error) {
        console.error("Error clearing RLS context:", error);
      }
    }
  };
}

/**
 * Middleware specifically for tRPC procedures
 * This can be used as a tRPC middleware
 */
export const rlsTRPCMiddleware = async (opts: any) => {
  const { ctx, next } = opts;

  try {
    // Get session from context (assuming it's available)
    const session = ctx.session;

    if (session) {
      const rlsContext = extractRLSContextFromSession(session);

      if (rlsContext) {
        await setRLSContext(rlsContext);
      }
    }

    return await next();

  } catch (error) {
    console.error("RLS tRPC Middleware error:", error);
    throw new Error("RLS context setup failed");
  } finally {
    try {
      await clearRLSContext();
    } catch (error) {
      console.error("Error clearing RLS context:", error);
    }
  }
};
