import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shadcn/components/sheet.tsx';
import { Menu, LucideHome, MegaphoneIcon } from 'lucide-react';
import { Link, useMatchRoute } from '@tanstack/react-router';

export const SideMenu = () => {
  const matchRoute = useMatchRoute();
  const isAnnouncementsActive = matchRoute({
    to: '/announcements',
    fuzzy: true,
  });

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="cursor-pointer" size="30" />
      </SheetTrigger>
      <SheetContent side="left" className="p-8">
        <SheetHeader className="p-0 mb-4">
          <Link to="/">
            <SheetClose className="cursor-pointer w-full">
              <SheetTitle className="flex gap-2 hover:bg-primary/30 px-1 h-10 items-center">
                <LucideHome size="24" />
                Test City
              </SheetTitle>
            </SheetClose>
          </Link>
        </SheetHeader>
        <Link to="/announcements">
          <SheetClose className="cursor-pointer w-full">
            <div
              className={`flex h-10 px-1 gap-2 items-center hover:bg-primary/30 ${isAnnouncementsActive ? 'bg-primary/40' : ''}`}
            >
              <MegaphoneIcon />
              Announcements
            </div>
          </SheetClose>
        </Link>
      </SheetContent>
    </Sheet>
  );
};
