import { createFileRoute } from '@tanstack/react-router';
import {
  announcementsQueryOptions,
  useAnnouncements,
} from '@/features/announcements/hooks/useAnnouncements.ts';
import { AnnouncementsTableTitle } from '@/features/announcements/components/AnnouncementsTableTitle.tsx';

export const Route = createFileRoute('/announcements')({
  component: Announcements,
  loader: ({ context }) => {
    return context.queryClient.ensureQueryData(announcementsQueryOptions);
  },
});

function Announcements() {
  const { data } = useAnnouncements();

  return (
    <div className="flex flex-col justify-start h-full w-full p-8 gap-4">
      <AnnouncementsTableTitle />
      Hello from Announcements! data: {JSON.stringify(data)}
    </div>
  );
}
