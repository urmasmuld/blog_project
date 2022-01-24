import express from 'express';
const App = express();

App.get('/user', async (req, res) => {});

App.get('/', (req, res) => {
  res.json({ message: 'Hello!' });
});

export = App;
