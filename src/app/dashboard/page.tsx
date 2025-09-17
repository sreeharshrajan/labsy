'use client';

import { useAuthGuard } from '@/hooks/auth/useAuthGuard';

export default function DashboardPage() {
  const { session, isLoading, isAuthenticated } = useAuthGuard({
    redirectTo: '/login?redirect=/dashboard',
    requireAuth: true,
    redirectDelay: 200
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FF6E40] mx-auto"></div>
          <p className="mt-4 text-[#004D40]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !session?.user) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-[#004D40]">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  const user = session.user;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#004D40] mb-4">
            Welcome to MedLabby!
          </h1>
          <p className="text-[#004D40]/80 mb-8 text-lg">
            You have successfully logged in. Your laboratory management system is ready.
          </p>

          <div className="bg-gradient-to-r from-[#80CBC4]/10 to-[#FF6E40]/10 rounded-lg p-6 max-w-md mx-auto">
            <h2 className="text-lg font-medium text-[#004D40] mb-4">User Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="font-medium text-[#004D40]">Name:</span>
                <span className="text-[#004D40]/80">{user.name || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#004D40]">Email:</span>
                <span className="text-[#004D40]/80">{user.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#004D40]">Super Admin:</span>
                <span className={`font-medium ${user.isSuperAdmin ? 'text-green-600' : 'text-gray-500'}`}>
                  {user.isSuperAdmin ? 'Yes' : 'No'}
                </span>
              </div>
              {user.tenant && (
                <div className="flex justify-between">
                  <span className="font-medium text-[#004D40]">Organization:</span>
                  <span className="text-[#004D40]/80">{user.tenant.name}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="font-medium text-[#004D40]">Roles:</span>
                <span className="text-[#004D40]/80">
                  {user.roles.length > 0 ? user.roles.map(role => role.name).join(', ') : 'No roles assigned'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Features */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
        <h2 className="text-xl font-medium text-[#004D40] mb-6 text-center">System Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-medium text-green-800 flex items-center">
              <span className="mr-2">✓</span> Email/Password Login
            </h3>
            <p className="text-sm text-green-600 mt-1">Secure authentication with password validation</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-800 flex items-center">
              <span className="mr-2">✓</span> JWT Tokens
            </h3>
            <p className="text-sm text-blue-600 mt-1">Token-based authentication with refresh tokens</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-medium text-purple-800 flex items-center">
              <span className="mr-2">✓</span> Remember Me
            </h3>
            <p className="text-sm text-purple-600 mt-1">Extended session with remember me functionality</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-medium text-orange-800 flex items-center">
              <span className="mr-2">✓</span> Session Cookies
            </h3>
            <p className="text-sm text-orange-600 mt-1">Secure HTTP-only cookies for token storage</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
        <h2 className="text-xl font-medium text-[#004D40] mb-6 text-center">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <button className="bg-gradient-to-r from-[#80CBC4] to-[#3F51B5] text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-3">🧪</div>
            <div className="font-semibold text-lg">Manage Tests</div>
            <div className="text-sm opacity-90 mt-2">Create and track laboratory tests</div>
          </button>
          <button className="bg-gradient-to-r from-[#3F51B5] to-[#FF6E40] text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-3">📊</div>
            <div className="font-semibold text-lg">View Reports</div>
            <div className="text-sm opacity-90 mt-2">Access analytics and insights</div>
          </button>
          <button className="bg-gradient-to-r from-[#FF6E40] to-[#80CBC4] text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-3">⚙️</div>
            <div className="font-semibold text-lg">Settings</div>
            <div className="text-sm opacity-90 mt-2">Configure your laboratory</div>
          </button>
        </div>
      </div>
    </div>
  );
}
