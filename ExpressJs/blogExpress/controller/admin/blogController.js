'use strict';

var blogModel = require('../../model/admin/blogModel.js');

exports.index = function(req, res) {
    res.render('admin/blog/add',{title: 'Blog Create',layout: 'admin.hbs'});
};

exports.create = function(req, res) {
    var insertData = new blogModel(req.fields,req.files);
    console.log('Fields '+JSON.stringify(insertData));//contains data about non-file fields 
    blogModel.createBlog(insertData, function(err, result) {
        if (err){
            res.render('admin/blog/add',{title: 'Blog Create',layout: 'admin.hbs', data: err});
        }else{
            req.session.message = {type: 'success', intro: 'login', message: 'successfully create blog'}
            res.redirect('list');
        }
            //res.json(result);
    })
};

exports.list = function(req, res) {
    res.render('admin/blog/list',{title: 'Blog list',layout: 'admin.hbs'});
};
