const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();

// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const braintreeRoutes = require('./routes/braintree');
const orderRoutes = require("./routes/order");

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use('/api', authRoutes); 
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', braintreeRoutes);
app.use("/api", orderRoutes);



// db
const uri = 'mongodb://Dobri:Dobri@cluster0-shard-00-00.z1sur.mongodb.net:27017,cluster0-shard-00-01.z1sur.mongodb.net:27017,cluster0-shard-00-02.z1sur.mongodb.net:27017/<Dobri>?ssl=true&replicaSet=atlas-ok283v-shard-0&authSource=admin&retryWrites=true&w=majority';

 mongoose.connect(uri, {

    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err))
    
    const port =  8000;
    
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })


    






