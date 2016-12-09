var StateOne = require('./states/StateOne.js');
var StateTwo = require('./states/StateTwo.ts').SimpleState;
var game;

module.exports = {
    start: function (id) {

        console.log("Start Game");
        game = new Phaser.Game(800, 600, Phaser.Auto, id, {});
        game.state.add("one", StateOne);
        game.state.add("two", StateTwo);
        game.state.start('one');
    }
};