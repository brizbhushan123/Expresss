const express = require('express')
const router = express.Router()
const adminController = require('../controller/admin/adminController')
const dashboardController = require('../controller/admin/dashboardController')
const blogController = require('../controller/admin/blogController')
let formidable = require('express-formidable');
const path = require('path')

const app = express()
router.post('/blog/create', formidable({
    encoding: 'utf-8',
    uploadDir: path.join(__dirname, '../public/uploads/blog'),
    multiples: true,
    keepExtensions:true// req.files to be arrays of files
    }));

router.get('/', (req, res)=>{   
    //res.sendFile(path.join(__dirname, '../views/admin/login'))
    res.render('admin/login', {layout: false});
})

router.post('/login', (req, res)=>{ adminController.check_login(req, res) })
router.get('/logout', (req, res)=>{ adminController.admin_logout(req, res) })

router.use(function(req, res, next) {
    if (req.session.loggedin) {
        next(); 
    } else {
        next(); 
        //res.redirect('/admin');
    }
});

router.get('/dashboard', (req, res)=>{ dashboardController.index(req, res) })
router.get('/blog/add', (req, res)=>{ blogController.index(req, res) })
router.post('/blog/create', (req, res)=>{ blogController.create(req, res) })
router.get('/blog/list', (req, res)=>{ blogController.list(req, res) })


module.exports = router