module.exports = {
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()){
            return next();
        }
        return res.redirect('/signin');
    },

    isNotLoggedIn(req, res, next){  
        if (!req.isAuthenticated()){
            return next();
        }
        return res.redirect('/data/relacionvehiculos');
    },

    isAdmin(req, res, next){
        if (req.isAuthenticated() && req.user.isAdmin){
            return next();
        }
        return res.redirect('/data/error',);    
    } 
}
