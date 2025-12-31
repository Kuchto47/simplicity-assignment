import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shadcn/components/table.tsx';
import { MegaphoneIcon, Pen, Plus } from 'lucide-react';
import { useAnnouncements } from '@/features/announcements/hooks/useAnnouncements.ts';
import { format } from 'date-fns';
import { Link } from '@tanstack/react-router';
import {
  PUB_DATE_TABLE_FORMAT,
  UPDATED_AT_TABLE_FORMAT,
} from '@/features/announcements/consts.ts';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from '@/shadcn/components/alert-dialog.tsx';
import { useState } from 'react';
import { useMapCategories } from '@/features/announcements/model/useMapCategories.ts';

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
        <Link to="/announcements/add">
          <Plus className="cursor-pointer" />
        </Link>
      </TableCell>
    </TableRow>
  );
};

interface AnnouncementTableRowProps {
  announcement: ReturnType<typeof useAnnouncements>['data'][0];
}

const AnnouncementTableRow = ({ announcement }: AnnouncementTableRowProps) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const { mapIdsToNames } = useMapCategories();

  return (
    <>
      <Dialog
        isOpen={isOpenDialog}
        setIsOpen={setIsOpenDialog}
        announcement={announcement}
      />
      <TableRow
        onClick={() => setIsOpenDialog(true)}
        className="cursor-pointer"
      >
        <TableCell>{announcement.title}</TableCell>
        <TableCell>
          {format(announcement.publicationDate, PUB_DATE_TABLE_FORMAT)}
        </TableCell>
        <TableCell>
          {format(announcement.updatedAt, UPDATED_AT_TABLE_FORMAT)}
        </TableCell>
        <TableCell>{mapIdsToNames(announcement.categoryIds)}</TableCell>
        <TableCell
          className="flex justify-end"
          onClick={(e) => e.stopPropagation()}
        >
          <Link to="/announcements/$id" params={{ id: announcement.id }}>
            <Pen className="cursor-pointer" size="22" />
          </Link>
        </TableCell>
      </TableRow>
    </>
  );
};

interface DialogProps extends AnnouncementTableRowProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Dialog = (props: DialogProps) => {
  const { isOpen, setIsOpen, announcement } = props;
  const { mapIdsToNames } = useMapCategories();

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent size="dynamic">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <MegaphoneIcon size="56" />
          </AlertDialogMedia>
          <AlertDialogTitle className="mb-4">
            {announcement.title}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {announcement.content}
            <div className="flex mt-4">
              <div className="flex flex-col w-1/2">
                <span className="font-bold">Publication Date</span>
                {format(announcement.publicationDate, PUB_DATE_TABLE_FORMAT)}
              </div>
              <div className="flex flex-col w-1/2">
                <span className="font-bold">Last Update Date</span>
                {format(announcement.updatedAt, UPDATED_AT_TABLE_FORMAT)}
              </div>
            </div>
            <div className="flex mt-4 w-full justify-between">
              <span className="font-bold">Categories: </span>
              <span className="self-end">
                {mapIdsToNames(announcement.categoryIds)}
              </span>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => setIsOpen(false)}
            className="cursor-pointer"
          >
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
