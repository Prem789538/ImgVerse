const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('login')
})

router.post('/home',(req,res)=>{
    if(req.body.user){  //coming from login page
        if(req.body.user==="foo" && req.body.pass==="bar"){
            res.render('home')
        }else
            res.render('err')
    }
})

router.get('add-pics',(req,res)=>{

})

router.post('/create-usr',(req,res)=>{
    //backend work
    res.redirect('/')   
})

router.get('/signup',(req,res)=>{
    res.render('signup')
})
router.get('/photos',(req,res)=>{
    // const photos = getPhotosFromDB()
    const photos = ['sc.png','sc2.png','sc3.png'];

    res.render('photos.ejs',{pics:photos,total:photos.length+100})
})


router.get('/forgot-passwd',(req,res)=>{
    res.render('forgot_password')
})






module.exports = router