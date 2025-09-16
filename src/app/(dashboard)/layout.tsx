import { Suspense } from 'react';
import { SessionProvider } from '@/components/providers/SessionProvider';
import { DashboardSidebar } from '@/components/modules/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/modules/dashboard/DashboardHeader';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader />
        <div className="flex">
          <DashboardSidebar />
          <main className="flex-1 p-6">
            <Suspense fallback={<div>Loading...</div>}>
              {children}
            </Suspense>
          </main>
        </div>
      </div>
    </SessionProvider>
  );
}
