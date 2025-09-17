import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#80CBC4] to-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#004D40] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#004D40] mb-4">Page Not Found</h2>
        <p className="text-lg text-[#004D40]/80 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#FF6E40] hover:bg-[#FF6E40]/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
