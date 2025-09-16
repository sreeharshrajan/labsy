// Custom auth hooks

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import type { AuthUser, ExtendedSession } from '@/types';

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const user: AuthUser | null = session?.user ? {
    id: session.user.id,
    email: session.user.email || '',
    name: session.user.name,
    image: session.user.image,
    isSuperAdmin: session.user.isSuperAdmin,
    tenantId: session.user.tenantId,
    tenant: session.user.tenant,
    roles: session.user.roles,
  } : null;
  const isLoading = status === 'loading';
  const isAuthenticated = !!user;

  const login = useCallback(async (
    email: string,
    password: string,
    rememberMe = false,
    redirectTo?: string
  ) => {
    const result = await signIn('credentials', {
      email,
      password,
      rememberMe,
      redirect: false,
    });

    if (result?.ok) {
      router.push(redirectTo || '/dashboard');
      return { success: true };
    }

    return {
      success: false,
      error: result?.error || 'Login failed',
    };
  }, [router]);

  const loginWithGoogle = useCallback(async (redirectTo?: string) => {
    const result = await signIn('google', {
      redirect: false,
    });

    if (result?.ok) {
      router.push(redirectTo || '/dashboard');
      return { success: true };
    }

    return {
      success: false,
      error: result?.error || 'Google login failed',
    };
  }, [router]);

  const logout = useCallback(async () => {
    await signOut({ redirect: false });
    router.push('/login');
  }, [router]);

  return {
    user,
    session: session as ExtendedSession | null,
    isLoading,
    isAuthenticated,
    login,
    loginWithGoogle,
    logout,
  };
}

export function useRequireAuth(redirectTo = '/login') {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isLoading && !isAuthenticated) {
    router.push(redirectTo);
  }

  return {
    user,
    isLoading,
    isAuthenticated,
  };
}

export function useRequireRole(_requiredRoles: string[], redirectTo = '/dashboard') {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  const hasRequiredRole = user?.isSuperAdmin || false;

  if (!isLoading && isAuthenticated && !hasRequiredRole) {
    router.push(redirectTo);
  }

  return {
    user,
    isLoading,
    isAuthenticated,
    hasRequiredRole,
  };
}
