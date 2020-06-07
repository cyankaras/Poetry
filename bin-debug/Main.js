//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        var _this = this;
        var sky = this.createBitmapByName("6401136_jpg");
        this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        //定义滚动式图
        var scroll = new egret.ScrollView();
        //添加到显示列表中
        this.addChild(scroll);
        //设置可滚动范围
        scroll.width = stageW;
        scroll.height = stageH;
        //定义一个容器
        var content = new egret.Sprite();
        //设置容器可以滚动
        scroll.setContent(content);
        //定义一个bitmap
        var portrait = new egret.Bitmap();
        //加载图片纹理
        portrait.texture = RES.getRes('head_jpg');
        //添加到显示列表
        content.addChild(portrait);
        portrait.width = stageW / 2;
        portrait.height = stageW / 2;
        //设置锚点的方式来实现水平居中
        portrait.anchorOffsetX = portrait.width / 2;
        portrait.anchorOffsetY = portrait.height / 2;
        portrait.x = stageW / 2;
        portrait.y = portrait.height / 2 + 20;
        //设置遮罩
        var circle = new egret.Shape();
        //绘制一个圆形
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(portrait.x, portrait.y, portrait.width / 2);
        circle.graphics.endFill();
        content.addChild(circle);
        //设置圆形遮罩，让头像变成现实成圆形
        portrait.mask = circle;
        //这里有个坑，一会儿填
        //定一个文本
        var text = new egret.TextField();
        //直接显示到显示列表中
        content.addChild(text);
        //设置内容
        // text.text = '《我亦好歌亦好酒》殊同 \n \n我亦好歌亦好酒，唱与佳人饮与友。\n \n歌宜关西铜绰板，酒当直进十八斗。';
        text.text = "\u300A\u6211\u4EA6\u597D\u6B4C\u4EA6\u597D\u9152\u300B\n        \u2014\u2014\u6B8A\u540C\n\u6211\u4EA6\u597D\u6B4C\u4EA6\u597D\u9152\uFF0C\n\u5531\u4E0E\u4F73\u4EBA\u996E\u4E0E\u53CB\u3002\n\u6B4C\u5B9C\u5173\u897F\u94DC\u7EF0\u677F\uFF0C\n\u9152\u5F53\u76F4\u8FDB\u5341\u516B\u6597\u3002\n\u6447\u6446\u957F\u8857\u7B11\u6D41\u4E91\uFF0C\n\u6211\u672C\u957F\u5B89\u7F81\u65C5\u4EBA\u3002\n\u4E1B\u697C\u53C2\u5DEE\u8FF7\u5F52\u8DEF\uFF0C\n\u884C\u8005\u5306\u5306\u8C01\u4E0E\u7FA4\u3002\n\u5E78\u6709\u4F5C\u6587\u4E0E\u8C08\u8BD7\uFF0C\n\u5BE5\u843D\u60C5\u6000\u6709\u541B\u77E5\u3002\n\u8D1F\u6C14\u767B\u697C\u72C2\u6B65\u97F5\uFF0C\n\u6BCF\u88AB\u6E38\u4EBA\u7B11\u53CC\u75F4\u3002\n\u5E78\u6709\u6D69\u7136\u5171\u8E74\u97A0\uFF0C\n\u8F7B\u62E8\u6162\u6263\u81EA\u6B22\u5A31\u3002\n\u4E03\u6708\u6D41\u706B\u65E0\u7720\u591C\uFF0C\n\u540C\u5411\u8367\u5C4F\u505A\u550F\u5618\u3002\n\u5E78\u6709\u5F69\u4E91\u559C\u9999\u5C71\uFF0C\n\u5170\u88F3\u6842\u51A0\u5171\u6E38\u4ED9\uFF0C\n\u8BF4\u6765\u7EA2\u5C18\u591A\u8DA3\u4E8B\uFF0C\n\u7B11\u58F0\u60CA\u52A8\u4E5D\u91CD\u5929\u3002\n\u5E78\u6709\u6653\u8273\u80FD\u64CD\u7434\uFF0C\n\u7389\u8471\u624B\u6307\u77F3\u69B4\u88D9\u3002\n\u6B62\u5982\u9AD8\u5C71\u6D41\u5982\u6C34\uFF0C\n\u6D41\u6C34\u6EAF\u6D04\u6843\u82B1\u6797\u3002\n\u7EA2\u8863\u4F73\u4EBA\u767D\u8863\u53CB\uFF0C\n\u671D\u4E0E\u540C\u6B4C\u66AE\u540C\u9152\u3002\n\u4E16\u4EBA\u8C13\u6211\u604B\u957F\u5B89\uFF0C\n\u5176\u5B9E\u53EA\u604B\u957F\u5B89\u67D0\u3002\n        ";
        //设置文本的宽度是屏幕（舞台）的宽度
        text.width = stageW;
        // 设置文本的背景色
        // text.background = true;
        // text.backgroundColor = 0xe8fff5;
        //设置文本的位置,距头像底部下面20像素
        text.y = portrait.y * 2 + 20;
        //设置字体颜色
        // text.textColor = 0x199fc2;
        //设置文本的高度（文本内容上下留20）
        text.height = text.height + 20;
        //设置文本居中（水平/垂直）
        text.textAlign = egret.HorizontalAlign.CENTER;
        text.verticalAlign = egret.VerticalAlign.MIDDLE;
        var audio = RES.getRes("chunJiangHuaYueYeByDaWei_mp3");
        audio.play();
        //让头像旋转起来
        var change = function () {
            //默认portrait的旋转角度为0
            portrait.rotation = 0;
            //使用Tween动画库来实现
            //激活portrait动画
            egret.Tween.get(portrait).to({
                rotation: 360
            }, 5000).call(change, _this);
        };
        //调用change函数
        change();
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map