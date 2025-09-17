import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

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
  const pathname = usePathname();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const redirectingRef = useRef(false);

  useEffect(() => {
    // Prevent multiple redirects
    if (redirectingRef.current) return;

    // Wait for session to be determined
    if (status === 'loading') return;

    // Handle authentication requirements
    if (requireAuth && status === 'unauthenticated') {
      redirectingRef.current = true;
      setIsRedirecting(true);

      // Store the current path for redirect after login (but don't expose in URL)
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('redirectAfterLogin', pathname);
      }

      const timer = setTimeout(() => {
        router.push(redirectTo);
      }, redirectDelay);

      return () => {
        clearTimeout(timer);
      };
    }

    // Handle redirect away from auth pages when already authenticated
    if (!requireAuth && status === 'authenticated') {
      redirectingRef.current = true;
      setIsRedirecting(true);

      // Check if there's a stored redirect path
      let targetPath = redirectTo;
      if (typeof window !== 'undefined') {
        const storedRedirect = sessionStorage.getItem('redirectAfterLogin');
        if (storedRedirect && storedRedirect !== '/login') {
          targetPath = storedRedirect;
          sessionStorage.removeItem('redirectAfterLogin');
        }
      }

      const timer = setTimeout(() => {
        router.push(targetPath);
      }, redirectDelay);

      return () => {
        clearTimeout(timer);
      };
    }

    // Reset redirecting state when conditions don't match
    if (redirectingRef.current) {
      redirectingRef.current = false;
      setIsRedirecting(false);
    }
  }, [status, requireAuth, redirectTo, redirectDelay, router, pathname]);

  return {
    session,
    status,
    isLoading: status === 'loading' || isRedirecting,
    isAuthenticated: status === 'authenticated',
    isRedirecting
  };
};
