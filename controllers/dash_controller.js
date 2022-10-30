const User =require('../models/user');
const Document = require('../models/document');

module.exports.home = function(req,res){
    User.findById(req.user.id,async function(err, user){
        if(err){
            console.log('Error finding user with requested',err);
            return;
        }
        
        try{
            let documents = await Document.find({isPublic:true}).sort('-createdAt').populate("author");
            let user = await User.findById(req.user.id);
            //console.log(user);
            documents.forEach(function (doc) {
                if(user.favorites.indexOf(doc.id) !== -1){
                    doc.isFavStatus = true;
                }else{
                    doc.isFavStatus = false;
                }
                // element.Active = "false";
            });
            //console.log(documents);
            return res.render('dashboard',{
                title:'Dashboard | ${user.name}',
                dashDocs:documents,
            });
        }catch(err){
            req.flash('error', err);
            console.log('Documents Page Render :: Error :',err);
            return res.redirect('back');
        }
    });
};

