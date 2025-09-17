import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export interface AuthGuardConfig {
  redirectTo?: string;
  redirectDelay?: number;
  requireAuth?: boolean;
}

export const useAuthGuard = (config: AuthGuardConfig = {}) => {
  const {
    redirectTo = '/login',
    redirectDelay = 200,
    requireAuth = true
  } = config;

  const { data: session, status } = useSession();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // Prevent multiple redirects
    if (isRedirecting) return;

    // Wait for session to be determined
    if (status === 'loading') return;

    // Handle authentication requirements
    if (requireAuth && status === 'unauthenticated') {
      setIsRedirecting(true);
      const timer = setTimeout(() => {
        router.push(redirectTo);
      }, redirectDelay);

      return () => {
        clearTimeout(timer);
        setIsRedirecting(false);
      };
    }

    // Handle redirect away from auth pages when already authenticated
    if (!requireAuth && status === 'authenticated') {
      setIsRedirecting(true);
      const timer = setTimeout(() => {
        router.push(redirectTo);
      }, redirectDelay);

      return () => {
        clearTimeout(timer);
        setIsRedirecting(false);
      };
    }
  }, [status, requireAuth, redirectTo, redirectDelay, router, isRedirecting]);

  return {
    session,
    status,
    isLoading: status === 'loading' || isRedirecting,
    isAuthenticated: status === 'authenticated',
    isRedirecting
  };
};
