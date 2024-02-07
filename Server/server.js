// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors =require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');


// const mongoose = require('mongoose');
// const ObjectId = mongoose.Types.ObjectId;


const apiData =  require('./routes/userController')
const jobData= require('./routes/jobController')
const hrData= require('./routes/hrController')


mongoose.connect('mongodb://127.0.0.1:27017/jobportal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());
app.use(session({
  secret:'893d64c310bcfdc2bd00e8a723b7c2b097f7d11d4963aae24dcefb3aac2dc9e081d87128e5761960b500cc0f1c02b97b89fb297184976c41b62c04ae60e1dc5c',
  resave:false,
  saveUninitialized: true
}));

app.use(express.json());


app.use('/',apiData);
app.use('/',jobData);
app.use('/',hrData);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});







    // useEffect(async ()=>{
    //     console.log("my home")
    //     try {
    //         const response = await fetch('job/userhomedata', {
    //         })
    //     } catch (error) {
    //       console.error('An error occurred:', error);
    //     }

    //     },[]);