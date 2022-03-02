
const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {

    alias({
        '@Assets': 'src/assets',
        '@Pages' : 'src/containers/Pages',
  })(config)

  return config
}