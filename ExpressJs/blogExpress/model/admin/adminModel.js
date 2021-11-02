'user strict';
var sql = require('../../config/db.js');

//Admin object constructor
var  adminModel = function(request){
    this.email = request.email;
    this.password = request.password;
    this.created_at = new Date();
};
adminModel.adminLogin = function (request, result) {    
    sql.query("SELECT * FROM ADMIN WHERE email = '"+request.email+"' AND PASSWORD = '"+request.password+"'", function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res);
                result(null, res);
            }
        });           
};

adminModel.createAdmin = function (newAdmin, result) {    
        sql.query("INSERT INTO ADMIN set ?", newAdmin, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
adminModel.getAdminById = function (AdminId, result) {
        sql.query("Select * from ADMIN where id = ? ", AdminId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
adminModel.getAllAdmin = function (result) {
        sql.query("Select * from ADMIN", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('Admins : ', res);  

                 result(null, res);
                }
            });   
};
adminModel.updateById = function(id, Admin, result){
  sql.query("UPDATE ADMIN SET Admin = ? WHERE id = ?", [adminModel.Admin, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
adminModel.remove = function(id, result){
     sql.query("DELETE FROM ADMIN WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= adminModel;
