'use strict';

var hrep = require('../repos/hero-repo');

exports.checkStatus = function(req,res) {
    res.json({status : "up" });
}

exports.getAllHeroes = function(req,res) {
    hrep.getAllHeroes(function(data) {
        res.send(data);
    });
}

exports.getHeroByName = function(req,res) {
    hrep.getHeroById(req.params.id, function(err, data) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(data);
        }        
    });
}

exports.createHero = function(req,res) {
    hrep.createHero(req.body, function(err, data) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(data);
        }        
    });
}

exports.deleteHeroByName = function(req,res) {
    hrep.deleteHeroById(req.params.id,function(data) {
        res.send(data)
    })
}

exports.updateHeroByName = function(req,res) {
    hrep.updateHero(req.params.id, req.body, function(err, data) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(data);
        }
    })
}