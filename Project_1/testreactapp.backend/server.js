//import app
const app = require('./app');
const port = 3000;
const host = '127.0.0.1';


const server = app.listen(3001, host, () => {
    console.log(`Node server is listning to ${server.address().port}`)
});
