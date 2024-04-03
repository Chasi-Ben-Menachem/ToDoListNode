const sdk = require('api')('@render-api/v1.0#34i64rhilu8ilhkj');

sdk.auth('rnd_zMYqYYk63U0yrYvNG9kkzmDhNGqn');
sdk.getServices({name: '', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));