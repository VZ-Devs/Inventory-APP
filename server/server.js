// const express = require('express');
// const app = express();
const { db } = require("./models");
const app = require("./app");

const { PORT = 3001 } = process.env;

const init = async () => {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();
