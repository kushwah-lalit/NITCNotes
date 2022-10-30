const User =require('../models/user');
const Document =require('../models/document');
module.exports.searchDocuments = async function(req,res){
    let payload = req.body.payload.trim();
    let searchResult = await Document.find({name:{$regex: new RegExp('.*'+payload+'.*','i')},author:req.user}).exec();
    res.send({payload:searchResult});
};
module.exports.searchPublicDocuments = async function(req,res){
    let payload = req.body.payload.trim();
    let searchResult = await Document.find({name:{$regex: new RegExp('.*'+payload+'.*','i')},isPublic:true}).exec();
    res.send({payload:searchResult});
};