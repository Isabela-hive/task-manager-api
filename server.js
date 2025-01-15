const app = require('./app');
const config = require('./config/config');

app.listen(config.port, () => {
  console.log(
    `Server is running  in ${config.nodeEnv} mode on port ${config.port}`
  );
});
