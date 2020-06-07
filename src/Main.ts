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

class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {
            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        let sky = this.createBitmapByName("6401136_jpg");
        this.addChild(sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        //定义滚动式图
        var scroll: egret.ScrollView = new egret.ScrollView();
        //添加到显示列表中
        this.addChild(scroll);
        //设置可滚动范围
        scroll.width = stageW;
        scroll.height = stageH;

        //定义一个容器
        var content: egret.Sprite = new egret.Sprite();
        //设置容器可以滚动
        scroll.setContent(content);


        //定义一个bitmap
        var portrait: egret.Bitmap = new egret.Bitmap();
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
        var circle: egret.Shape = new egret.Shape();
        //绘制一个圆形
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(portrait.x, portrait.y, portrait.width / 2);
        circle.graphics.endFill();
        content.addChild(circle);
        //设置圆形遮罩，让头像变成现实成圆形
        portrait.mask = circle;

        //定一个文本
        var text: egret.TextField = new egret.TextField();
        //直接显示到显示列表中
        content.addChild(text);
        //设置内容
        // text.text = '《我亦好歌亦好酒》殊同 \n \n我亦好歌亦好酒，唱与佳人饮与友。\n \n歌宜关西铜绰板，酒当直进十八斗。';
        text.text = `《我亦好歌亦好酒》
        ——殊同
我亦好歌亦好酒，
唱与佳人饮与友。
歌宜关西铜绰板，
酒当直进十八斗。
摇摆长街笑流云，
我本长安羁旅人。
丛楼参差迷归路，
行者匆匆谁与群。
幸有作文与谈诗，
寥落情怀有君知。
负气登楼狂步韵，
每被游人笑双痴。
幸有浩然共蹴鞠，
轻拨慢扣自欢娱。
七月流火无眠夜，
同向荧屏做唏嘘。
幸有彩云喜香山，
兰裳桂冠共游仙，
说来红尘多趣事，
笑声惊动九重天。
幸有晓艳能操琴，
玉葱手指石榴裙。
止如高山流如水，
流水溯洄桃花林。
红衣佳人白衣友，
朝与同歌暮同酒。
世人谓我恋长安，
其实只恋长安某。
        `;
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
        var change = () => {
            //默认portrait的旋转角度为0
            portrait.rotation = 0;
            //使用Tween动画库来实现
            //激活portrait动画
            egret.Tween.get(portrait).to({
                rotation: 360
            },5000).call(change,this);
        }
        //调用change函数
        change();
        
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: string[]) {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }
}