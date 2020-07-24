const passport = require('passport');
const cors = require('cors')
module.exports = (app) => {

    app.get('https://intense-badlands-91337.herokuapp.com/auth/google', passport.authenticate('google', {
        scope: ['email', 'profile']
    }))
    app.get('https://intense-badlands-91337.herokuapp.com/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/surveys');

    }
    
    

    );
    app.get("https://intense-badlands-91337.herokuapp.com/api/logout", (req, res) => {
        req.logout();
        res.redirect('/');
    });
    app.get('https://intense-badlands-91337.herokuapp.com/api/output', (req, res) => {
        res.send(req.user);
    });
    app.use(cors());


}
