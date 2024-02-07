const Player = require('../models/player.model');
 
//Find all players:
module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then((allDaPlayers) => {
            res.json({ players: allDaPlayers })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
//Find a single :
module.exports.findOneSinglePlayer = (req, res) => {
    Player.findById( req.params.id )
        .then(oneSinglePlayer => {
            res.json({ player: oneSinglePlayer })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 

//Create a player:
module.exports.createNewPlayer = (req, res) => {
    Player.create(req.body)
        .then(newlyCreatedPlayer => {
            res.json({ player: newlyCreatedPlayer })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 

//Update a single player:      
module.exports.updateExistingPlayer = (req, res) => {
    Player.findByIdAndUpdate(
         req.params.id ,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPlayer => {
            res.json({ player: updatedPlayer })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 

//Delete a player:
module.exports.deleteAnExistingPlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
