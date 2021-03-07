const keycloak = require('keycloak-backend')({
  "realm": "test",
  "auth-server-url": "http://host.docker.internal:8080",  // = Localhost
  "client_id": "myclient",
  "username": "first",
  "password": "123"
});

(async () => {
  try {

const someAccessToken = await keycloak.accessToken.get()
let token = await keycloak.jwt.verify(someAccessToken)
console.log(token.isExpired())

} catch (err) {
  console.log(err)
}
})()