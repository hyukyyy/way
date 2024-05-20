jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock'),
);

jest.mock('@react-native-camera-roll/camera-roll', () =>
  require('@react-native-camera-roll/camera-roll/src/__mocks__/nativeInterface'),
);

jest.useFakeTimers();
