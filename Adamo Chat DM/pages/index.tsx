
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/dm/demo');
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to Adamo Chat</h1>
      <p className="mb-6 text-lg">Start chatting instantly.</p>
      <button
        onClick={handleLogin}
        className="px-6 py-2 rounded bg-blue-500 hover:bg-blue-600 transition"
      >
        Login with Google (placeholder)
      </button>
    </main>
  );
}
