const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

const Router=require('express').Router();
const csvToAnyController=require('../Controller/csvToAnyController');
const jsonToAnyController=require('../Controller/jsonToAnyController');

Router.route('/csv_to_json').post(multipartMiddleware,csvToAnyController.csvToJsonConvert);
Router.route('/json_to_csv').post(multipartMiddleware,jsonToAnyController.jsonToCsvConvert);

module.exports=Router;