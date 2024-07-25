/** @type {import('jest').Config} */
const config = {
  // the presence of this field will disable the default transform
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}

module.exports = config
