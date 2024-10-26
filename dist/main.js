"use strict";
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
        this.load.audio('bgm', 'assets/Fairyland.mp3'); // 実際のファイルパスに変更してね
        this.load.audio('sfx', 'assets/decideSound.mp3'); // 効果音をロード
    };
    MyGame.prototype.create = function () {
        var _this = this;
        var music = this.sound.add('bgm');
        music.play();
        // 効果音を再生するためのイベントリスナーを追加
        this.input.on('pointerdown', function () {
            var soundEffect = _this.sound.add('sfx');
            soundEffect.play();
        });
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
