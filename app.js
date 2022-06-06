//required so able to use express
const express=require('express');

const app= express();
//requires path to file
const path=require('path');
//sets view engine to be ejs file 
app.set('view engine', 'ejs');
//sets which directory its in
app.set('views', path.join(__dirname, 'views'));

//(req=request, res=response)
app.get('/', (req, res)=>{
    res.render('home')

})

//port we're listening on. It's where server is located
app.listen(3000,()=>{
    console.log("Serving on port 3000")
})
