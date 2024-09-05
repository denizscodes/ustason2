"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /dashboard
    router.push('/dashboard');
  }, [router]);

  return (
    <div>Redirecting...</div>
  );
}

export default Homepage;
