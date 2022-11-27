import {cleanup} from '@testing-library/react-native';

// Cleanup after each case.
afterEach(cleanup);

Date.now = jest.fn(() => new Date('2020-01-01T04:30:54.591Z').valueOf());

process.on('unhandledRejection', (err) => {
  fail(err);
});
