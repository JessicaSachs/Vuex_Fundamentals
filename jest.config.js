module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setup.js'],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
