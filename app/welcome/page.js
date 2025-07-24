'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
          url('https://i.pinimg.com/1200x/bd/f9/ba/bdf9baebfce79f6c83dc8e259a3484f3.jpg')`,
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
          We’re excited to have you here. Taking you to the home page...
        </p>
        {/* <Link
          href="/blog"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#fff',
            color: '#333',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
          }} */}
        {/* > */}
        {/* </Link> */}
      </div>
    </main>
  );
}