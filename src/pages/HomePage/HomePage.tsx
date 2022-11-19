import { PageLayout } from '@components';

export const HomePage = () => (
  <PageLayout>
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center text-7xl font-black">
      <h1>
        Welcome to the <p className="text-fuchsia-700">Algorithm Visualizer</p>
      </h1>
    </div>
  </PageLayout>
);
