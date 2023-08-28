import { Theme } from '@radix-ui/themes';
import { Outlet } from '@tanstack/react-router';
import { FC } from 'react';

export const Root: FC = () => {
  return (
    <Theme appearance="dark" className="h-full" hasBackground>
      <Outlet />
    </Theme>
  );
};
