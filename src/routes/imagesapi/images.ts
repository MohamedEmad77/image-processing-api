import express from 'express';

const images = express.Router();

images.get('/', (req, res) => {
  res.send(req.query.width);
});

export default images;