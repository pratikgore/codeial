const express = require('express') ;    // taking up server
const app = express() ;                          // instace or firing app 
const port = 8000 ;                                 // setting up port 

//use route 
app.use('/' , require('./routes/index'))

//firing app 
app.listen(port , function(err) {        
    if(err){
        console.log(`Error in running server : ${err}`) ; 
    }

    console.log(`Server is running on port ${port}`) ; 
})
