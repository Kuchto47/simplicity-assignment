import { SideMenu } from '@/features/menu/components/SideMenu.tsx';

export const NavBar = () => {
  return (
    <>
      <header className="px-8 py-4 flex h-20 justify-center">
        <div className="flex gap-6 items-center w-full">
          <SideMenu />
        </div>
      </header>
      <hr />
    </>
  );
};
