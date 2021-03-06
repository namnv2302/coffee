const Menu = require('../models/Menu.js')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {

        Menu.find({})
            .then(menus => {
                res.render('home', {
                    menus: mutipleMongooseToObject(menus)
                })
            })
            .catch(next)
  
    }

    // [GET] /book
    book(req, res) {
        res.render('book');
    }
}

module.exports = new SiteController();
