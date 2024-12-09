const express = require('express')
const userRouter = require('./routes/user.routes')
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const connectToDB = require('./config/db')
connectToDB();
const cookieParser = require('cookie-parser');
const { cookie } = require('express-validator');
const indexRouter = require('./routes/index.routes')

// view engine - for render the ejs
app.set('view engine', 'ejs');

// Built - in Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

// home route
app.use('/', indexRouter)
// user route
app.use('/user', userRouter)

app.listen(3000, () =>{
    console.log('server is running on port 3000')
})