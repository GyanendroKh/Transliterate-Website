import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { FC, PropsWithChildren } from 'react';
import '@radix-ui/themes/styles.css';
import { router } from './router';
import { queryClient } from './apiClient';

function App() {
  return <ProviderWrapper />;
}

const ProviderWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {children}
    </QueryClientProvider>
  );
};

export default App;
