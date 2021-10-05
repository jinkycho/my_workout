const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const config = require('./config/key');

const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


//미들웨어
//application/x-www-form-urlencoded 를 가져오기 위함
app.use(express.urlencoded({extended : true}));

//application/json 을 가져오기 위함
app.use(express.json());
app.use(cookieParser());

//routes 가져오기
app.use('/api/users', require('./routes/users'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/wishlist', require('./routes/wishlist'));
app.use('/api/like', require('./routes/like'));

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));


//node standard port -> 5000
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});

