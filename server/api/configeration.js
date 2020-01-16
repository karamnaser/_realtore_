const MySql=require('mysql');

let connectore=MySql.createConnection({
host:"localhost",
user:"root",
password:"RootPasword",
database:"realtor"
});
connectore.connect();
module.exports=connectore;