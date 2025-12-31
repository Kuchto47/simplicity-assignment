import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet.tsx';
import { Menu, LucideHome } from 'lucide-react';
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
              <SheetTitle className="flex gap-4">
                <LucideHome size="24" />
                Test City
              </SheetTitle>
            </SheetClose>
          </Link>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
