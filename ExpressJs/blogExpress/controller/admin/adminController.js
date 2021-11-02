'use strict';

var adminModel = require('../../model/admin/adminModel.js');

exports.list_all_admins = function(req, res) {
  adminModel.getAlladmin(function(err, result) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', result);
    res.send(admin);
  });
};

exports.check_login = function(req, res) {
  var new_admin = new adminModel(req.body);
  if(!req.body.email || !req.body.password){
    if(!req.body.email){
      req.session.message = {email: 'email field is required', emailValue: req.body.email,passValue: req.body.password}
    }else if(!req.body.password){
      req.session.message = {password: 'password field is required', emailValue: req.body.email,passValue: req.body.password}
    }
    res.redirect("/admin");
  }else{
    adminModel.adminLogin(req.body, function(err, result) {
      if (err){
        res.redirect("/admin", { error:true, message:  res.send(err) });
      }
      if(result.length > 0){
        req.session.loggedin = true;
				req.session.username = result.name;
        req.session.message = {type: 'success', intro: 'login', message: 'successfully login'}
        console.log(req.session.message);
        res.redirect("/admin/dashboard");
       //return res.render(msg);
      }else{
        req.session.message = {type: 'danger', intro: 'login', message: 'Invalid email or password'}
        res.redirect("/admin");
      }       
    });
  }
  
  };
  exports.admin_logout = function(req, res) {
          req.session.loggedin = false;
          req.session.message = {type: 'success', intro: 'logout', message: 'successfully logout'}
          console.log(req.session.message);
          res.redirect("/admin");
  };

exports.create_a_admin = function(req, res) {
  var new_admin = new admin(req.body);

  //handles null error 
   if(!new_admin.admin || !new_admin.status){

            res.status(400).send({ error:true, message: 'Please provide admin/status' });

        }
else{
  
  adminModel.createadmin(new_admin, function(err, result) {
    
    if (err)
      res.send(err);
    res.json(admin);
  });
}
};


exports.read_a_admin = function(req, res) {
  admin.getadminById(req.params.adminId, function(err, result) {
    if (err)
      res.send(err);
    res.json(admin);
  });
};


exports.update_a_admin = function(req, res) {
  admin.updateById(req.params.adminId, new admin(req.body), function(err, result) {
    if (err)
      res.send(err);
    res.json(admin);
  });
};


exports.delete_a_admin = function(req, res) {


  admin.remove( req.params.adminId, function(err, result) {
    if (err)
      res.send(err);
    res.json({ message: 'admin successfully deleted' });
  });
};