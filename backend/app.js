const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');

const Package = require('./models/Packages');

const users = require('./routes/user'); 
var cors = require('cors')
const rateLimiter = require('./ratelimiter')


mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

app.use(rateLimiter)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/api/users', users);

app.get('/', function(req, res) {
    res.send('hello');
});


//TEST data
const packages = [{
    id:1,
    source:"Bangalore",
    destinations:[{
        id:1,
        place:"Chennai",
    },
    {
        id:2,
        place:"Mysore",
    },

]
},

{
    id:2,
    source:"Delhi",
    destinations:[{
        id:1,
        place:"Agra",
    },
    {
        id:2,
        place:"Chandigarh",
    },

]
}]

app.get('/api/packages',function(req,res){
    console.log("HELLO")
    Package.find({},function (err, packages) {
        if (err) {console.log(err);console.log("error")}
        else{
            console.log("Data");
            console.log(packages)
        }
      });
    

});

app.get('/api/destinations',function(req,res){
    //TODO

    res.send("PATH INCOMPLETE")
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});