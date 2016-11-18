global.SHOUT = function SHOUT (...args) {
  console.log('*********************')
  console.log.apply(null, args)
  console.log('*********************')
}

module.exports = {

  logging: true,
  seed: true,
  db: {
    url: 'mongodb://localhost/dual-n-back_dev',
  },
}
