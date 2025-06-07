'use client';
import { useState } from 'react';
import { supabaseBrowser } from '@/lib/supabase';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    const { error } = await supabaseBrowser().auth.signInWithPassword({
      email,
      password,
    });
    setError(error?.message ?? null);
  };

  return (
    <div className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
        Sign In
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
