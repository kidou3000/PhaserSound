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
        var _this = _super.call(this, { key: 'MyGame' }) || this;
        _this.soundEffects = {};
        return _this;
    }
    MyGame.prototype.preload = function () {
        this.load.audio('bgm', 'assets/Fairyland.mp3'); // 実際のファイルパスに変更してね
        this.load.audio('sfxClick', 'assets/ClickSound.mp3'); // 効果音1をロード
        this.load.audio('sfxAlert', 'assets/AlertSound.mp3'); // 効果音2をロード
    };
    MyGame.prototype.create = function () {
        var _this = this;
        var music = this.sound.add('bgm');
        music.play();
        // 効果音をあらかじめ作成して保持
        this.soundEffects['click'] = this.sound.add('sfxClick', { volume: 1 });
        this.soundEffects['alert'] = this.sound.add('sfxAlert', { volume: 1 });
        // 効果音を再生するためのイベントリスナーを追加
        this.input.on('pointerdown', function () {
            console.log('クリックイベント発生'); // デバッグ用メッセージ
            _this.soundEffects['click'].play(); // クリック効果音を再生
        });
        // 他の効果音を再生する例（例えば、警告を表示する際など）
        this.time.addEvent({
            delay: 5000, // 5秒後に再生
            callback: function () {
                console.log('5秒後の効果音再生');
                _this.soundEffects['alert'].play(); // 警告効果音を再生
            },
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
