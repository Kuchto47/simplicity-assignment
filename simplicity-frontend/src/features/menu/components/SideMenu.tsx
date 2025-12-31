import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet.tsx';
import { Menu, LucideHome, MegaphoneIcon } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const SideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="cursor-pointer" size="30" />
      </SheetTrigger>
      <SheetContent side="left" className="p-8">
        <SheetHeader className="p-0">
          <Link to="/">
            <SheetClose className="cursor-pointer">
              <SheetTitle className="flex gap-2">
                <LucideHome size="24" />
                Test City
              </SheetTitle>
            </SheetClose>
          </Link>
        </SheetHeader>
        <Link to="/announcements">
          <SheetClose className="cursor-pointer">
            <div className="pt-4 flex gap-2">
              <MegaphoneIcon />
              Announcements
            </div>
          </SheetClose>
        </Link>
      </SheetContent>
    </Sheet>
  );
};
