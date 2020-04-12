const Wish = require('../models/wish');

exports.getAddWishPage = (req,res) =>{
        res.render('add-wish', {
            pageTitle: "Add New Wish",
            path: "/admin/add-wish"
        });
    }

exports.postAddWish = (req, res) => {
    console.log(req.body.name);
    const wish = new Wish(req.body.name);
    wish.saveWish();
    res.redirect('/');
}

exports.getWish = (req, res) => {    
    Wish.fetchAllWishes((wish)=>{
        res.render('main', {
        pageTitle: 'Welcome to My Wish Page!',
        wishes: wish,
        path: '/'
        });
    })
}   