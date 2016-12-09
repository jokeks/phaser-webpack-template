var state = module.exports = function () {
};

state.prototype.preload = function () {
    this.game.load.image('image', require("../assets/Image.png"));
    this.game.load.audio('sound', require("../assets/Sound.ogg"));
};
state.prototype.create = function () {
    console.log("State One");
};
state.prototype.update = function () {
    this.game.state.start("two");
};