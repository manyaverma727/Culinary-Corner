'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
          url('/welcomebg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
        flexDirection: 'column',
      }}
    >
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Welcome to Culinary Corner!
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          We&apos;re excited to have you here. Taking you to the home page...
        </p>

      </div>
    </main>
  );
}