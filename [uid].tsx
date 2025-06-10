
import { useRouter } from 'next/router';

export default function DMPage() {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <main className="h-screen bg-gray-800 text-white flex flex-col">
      <header className="p-4 bg-gray-900 text-xl font-bold">
        Chatting with: {uid}
      </header>
      <section className="flex-1 p-4 overflow-y-auto">Chat window goes here.</section>
      <footer className="p-4 bg-gray-900">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
      </footer>
    </main>
  );
}
