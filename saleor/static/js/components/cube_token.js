const jwt = require('jsonwebtoken');
const CUBE_API_SECRET = process.env.CUBEJS_API_SECRET;

function get_token(){
  const cubejsToken = jwt.sign({}, CUBE_API_SECRET, {expiresIn: '30d'});

  return cubejsToken;
}
