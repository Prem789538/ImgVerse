const express = require('express')
const fs = require('fs')
const router = express.Router()
const path = require('path')
const maxUploadLimit = 30;

const multer = require('multer')
const uploadPath = path.join(__dirname,"../static/img/")

const fileStorageEngine = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,uploadPath)
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now() + "__" + file.originalname)
        console.log(file)
    },
})

const upload = multer({storage: fileStorageEngine})



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


//security issue (basically paap)
router.get('/home',(req,res)=>{
    res.render('home')
})

router.get('/add-pics',(req,res)=>{
    res.render('photoselector')
})

router.post('/save-photos',upload.array('myFiles',maxUploadLimit),(req,res)=>{
    res.redirect('/home')
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
    
    const photos = fs.readdirSync(path.join(__dirname,"../static/img"))
    console.log(photos.length)

    res.render('photos.ejs',{pics:photos,total:photos.length})
})


router.get('/forgot-passwd',(req,res)=>{
    res.render('forgot_password')
})






module.exports = router