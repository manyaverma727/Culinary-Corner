'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      router.push('/welcome');
    }
  };

  return (
    <main
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
          url('https://i.pinimg.com/736x/91/3e/b5/913eb5de0f63e1eec1c6a87e824447be.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: 'transparent',
          padding: '2rem',
          borderRadius: '12px',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'white' }}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            marginBottom: '1rem',
            padding: '0.5rem',
            border: '1px solid white',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: 'white',
            outline: 'none',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            marginBottom: '1.5rem',
            padding: '0.5rem',
            border: '1px solid white',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: 'white',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: 'white',
            padding: '0.6rem',
            border: '1px solid white',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </main>
  );
}