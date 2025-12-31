import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/announcements')({
  component: About,
});

function Announcements() {
  return <div className="p-2">Hello from About!</div>;
}
