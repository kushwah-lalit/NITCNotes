const User = require('../models/user');
const Document = require('../models/document');
module.exports.toggleFavourite = async function(req,res){
    try{
        let document = await Document.findById(req.params.id);
        let user = await User.findById(req.user.id);
        if(document){
            if(user.favorites.indexOf(document.id) !== -1){
                user.favorites.remove(document);
            }else{
                user.favorites.push(document);
            }
            await user.save();
            if (req.xhr){
                return res.status(200).json({
                    data: {
                        problem_id: req.params.id
                    },
                    message: "Post deleted"
                });
            }
            return res.redirect('back');
        }else{
            req.flash('error', err);
            console.log('Document does not exists :: Error :',err);
            return res.redirect('back');
        }
    }catch(err){
        req.flash('error', err);
        console.log('Document Favourite not toggled :: Error :',err);
        return res.redirect('back');
    }
};