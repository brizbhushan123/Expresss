'user strict';
var sql = require('../../config/db.js');
var ars = require('arslugify');

//Admin object constructor
var  blogModel = function(request, file){
    this.title = request.title;
    this.description = request.description;
    this.image = file.image.path;
    this.slug = ars(request.title);
    this.published = 0;
    this.created_at = new Date();
};

blogModel.createBlog = function (insertData, result) {    
        sql.query("INSERT INTO blogs set ?", insertData, function (err, res) {
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

module.exports= blogModel;
