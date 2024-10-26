var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyGame = /** @class */ (function (_super) {
    __extends(MyGame, _super);
    function MyGame() {
        return _super.call(this, { key: 'MyGame' }) || this;
    }
    MyGame.prototype.preload = function () {
        // 音声ファイルをロード
        this.load.audio('bgm', 'path/to/your/bgm.mp3'); // 実際のファイルパスに変更してね
    };
    MyGame.prototype.create = function () {
        // 音声を再生
        var music = this.sound.add('bgm');
        music.play();
    };
    return MyGame;
}(Phaser.Scene));
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: MyGame
};
var game = new Phaser.Game(config);
