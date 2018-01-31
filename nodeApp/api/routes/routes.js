'use strict';

module.exports = function(app) {
    var hcontroller = require('../controllers/hero-controller');
    
    //CORS
    app.options('*', function(req,res,next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.sendStatus(200);
    })  

    app.get('/', function(req,res){
        res.render("index.html");
    });

    app.get('/api', hcontroller.checkStatus);

    app.get('/api/heroes', hcontroller.getAllHeroes);

    app.get('/api/heroes/:id', hcontroller.getHeroByName);

    app.post('/api/heroes', hcontroller.createHero);
    
    app.delete('/api/heroes/:id', hcontroller.deleteHeroByName);

    app.put('/api/heroes/:id', hcontroller.updateHeroByName);

    //joker
    app.use(function(req, res) {
        res.status(404).send({url: req.originalUrl + ' not found'})
    });
}