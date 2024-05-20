module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|aws-amplify-react-native|@ui-kitten|react-redux)',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  // setupFiles: ['./node_modules/@testing-library/jest-native/extend-expect'],
};
