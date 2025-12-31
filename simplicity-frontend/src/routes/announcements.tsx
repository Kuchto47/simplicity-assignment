import { createFileRoute } from '@tanstack/react-router';
import {
  announcementsQueryOptions,
  useAnnouncements,
} from '@/features/announcements/hooks/useAnnouncements.ts';

export const Route = createFileRoute('/announcements')({
  component: Announcements,
  loader: ({ context }) => {
    return context.queryClient.ensureQueryData(announcementsQueryOptions);
  },
});

function Announcements() {
  const { data } = useAnnouncements();

  return (
    <div className="p-2">
      Hello from Announcements! data: {JSON.stringify(data)}
    </div>
  );
}
