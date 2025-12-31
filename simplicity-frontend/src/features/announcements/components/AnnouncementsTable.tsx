import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx';
import { Pen, Plus } from 'lucide-react';
import { useAnnouncements } from '@/features/announcements/hooks/useAnnouncements.ts';
import { format } from 'date-fns';
import { useCategories } from '@/features/announcements/hooks/useCategories.ts';

export const AnnouncementsTable = () => {
  const { data: announcements } = useAnnouncements();

  return (
    <Table>
      <AnnouncementsTableHead />
      <TableBody>
        <AddAnnouncementTableRow />
        {announcements.map((announcement) => (
          <AnnouncementTableRow
            key={announcement.id}
            announcement={announcement}
          />
        ))}
      </TableBody>
    </Table>
  );
};

const AnnouncementsTableHead = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Title</TableHead>
        <TableHead>Publication Date</TableHead>
        <TableHead>Last Update</TableHead>
        <TableHead>Categories</TableHead>
        <TableHead className="text-right" />
      </TableRow>
    </TableHeader>
  );
};

const AddAnnouncementTableRow = () => {
  return (
    <TableRow>
      <TableCell />
      <TableCell />
      <TableCell />
      <TableCell />
      <TableCell className="flex justify-end">
        <Plus className="cursor-pointer" />
      </TableCell>
    </TableRow>
  );
};

const AnnouncementTableRow = ({
  announcement,
}: {
  announcement: ReturnType<typeof useAnnouncements>['data'][0];
}) => {
  const { data: categories } = useCategories();

  return (
    <TableRow>
      <TableCell>{announcement.title}</TableCell>
      <TableCell>
        {format(new Date(announcement.publicationDate), 'MMM d, yyyy HH:MM')}
      </TableCell>
      <TableCell>
        {format(new Date(announcement.updatedAt), 'MMM d, yyyy')}
      </TableCell>
      <TableCell>
        {announcement.categoryIds.map(
          (cid) => categories.find((c) => c.id === cid.id)?.name
        )}
      </TableCell>
      <TableCell className="flex justify-end">
        <Pen className="cursor-pointer" />
      </TableCell>
    </TableRow>
  );
};
