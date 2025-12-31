import { createFileRoute } from '@tanstack/react-router';
import { Home } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-8 gap-4">
      <p className="text-center">Welcome to 'Test City' management tool</p>
      <Home size="64" />
    </div>
  );
}
