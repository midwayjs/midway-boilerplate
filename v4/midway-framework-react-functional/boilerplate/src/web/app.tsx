import { useEffect, useState } from 'react';
import { api } from './api/client';

type User = {
  id: string;
  name: string;
};

export function App() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.user
      .getUser({
        params: { id: 'u-1' },
      })
      .then(data => setUser(data as User))
      .catch(err => setError(err?.message || String(err)));
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: 24, lineHeight: 1.5 }}>
      <h1>Midway Functional API + React</h1>
      <p>Current User: {user ? `${user.name} (${user.id})` : 'Loading...'}</p>
      {error && <p style={{ color: 'crimson' }}>Request Error: {error}</p>}
    </main>
  );
}
