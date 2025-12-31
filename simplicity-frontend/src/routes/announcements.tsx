import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/announcements')({
  component: AnnouncementsLayout,
});

function AnnouncementsLayout() {
  return (
    <div className="flex flex-col justify-start h-full w-full p-8 gap-4">
      <Outlet />
    </div>
  );
}
