export class SimpleState {
    game: Phaser.Game;

    public preload() {
        this.game.load.image('image', require("../assets/Image.png"));
        this.game.load.audio('sound', require("../assets/Sound.ogg"));
    }

    public create() {
        console.log("State Tow");
    }

    public update() {

    }
}