import { Outlet } from '@tanstack/react-router';
import { FC } from 'react';

export const Root: FC = () => {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
};
