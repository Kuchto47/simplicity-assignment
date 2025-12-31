//import { Link } from '@tanstack/react-router';
import { SideMenu } from '@/features/menu/components/SideMenu.tsx';

export const NavBar = () => {
  return (
    <>
      <header className="px-8 py-4 flex h-20 justify-center">
        <div className="flex gap-6 items-center w-full">
          <SideMenu />
          {/*<Link to="/" className="[&.active]:font-bold">*/}
          {/*  Home*/}
          {/*</Link>{' '}*/}
          {/*<Link to="/about" className="[&.active]:font-bold">*/}
          {/*  About*/}
          {/*</Link>*/}
        </div>
      </header>
      <hr />
    </>
  );
};
