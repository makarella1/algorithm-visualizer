import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, './src/utils'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@features/hooks': path.resolve(__dirname, './src/features/hooks'),
      '@features/selectors': path.resolve(
        __dirname,
        './src/features/selectors'
      ),
      '@features/slices/sortSettingsSlice': path.resolve(
        __dirname,
        './src/features/slices/sortSettingsSlice'
      ),
      '@features/slices/arrayItemsSlice': path.resolve(
        __dirname,
        './src/features/slices/arrayItemsSlice'
      ),
      '@features/slices/sortAnimationsSlice': path.resolve(
        __dirname,
        './src/features/slices/sortAnimationsSlice'
      ),
      '@store': path.resolve(__dirname, './src/store/store'),
      '@utlis/sorting/animations/insertionSort': path.resolve(
        __dirname,
        './src/utils/sorting/animations/insertionSort'
      ),
      '@features/thunks': path.resolve(__dirname, './src/features/thunks'),
      '@utils/sorting/animations': path.resolve(
        __dirname,
        './src/utils/sorting/animations'
      ),
    },
  },
});
