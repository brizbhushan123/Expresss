'use strict';

var adminModel = require('../../model/admin/adminModel.js');

exports.index = function(req, res) {
    res.render('admin/dashboard',{title: 'Dashboard',layout: 'admin.hbs'});
};
