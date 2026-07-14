import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Automatically unmount React element trees after each test to prevent memory leaks
afterEach(() => {
    cleanup();
});