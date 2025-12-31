import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { NavBar } from '@/features/navbar/components/NavBar.tsx';

const RootLayout = () => (
  <div className="flex flex-col h-screen">
    <NavBar />
    <div className="flex-1 overflow-auto">
      <Outlet />
    </div>
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
