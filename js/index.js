/**
 * Created by wzf on 2017/5/6.
 */
$(function () {
    // 百度地图API功能
    var map = new BMap.Map("allmap");//通过百度地图拾取坐标系统得到point值
    map.centerAndZoom(new BMap.Point(114.409267,30.489884), 17);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.setCurrentCity("武汉");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    // 添加带有定位的导航控件
    var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
    });
    map.addControl(navigationControl);
    // 添加定位控件
    var geolocationControl = new BMap.GeolocationControl();
    geolocationControl.addEventListener("locationSuccess", function(e){
        // 定位成功事件
        var address = '';
        address += e.addressComponent.province;
        address += e.addressComponent.city;
        address += e.addressComponent.district;
        address += e.addressComponent.street;
        address += e.addressComponent.streetNumber;
        alert("当前定位地址为：" + address);
    });
    geolocationControl.addEventListener("locationError",function(e){
        // 定位失败事件
        alert(e.message);
    });
    map.addControl(geolocationControl);
    //$('.welcome-to').textillate({in: {effect: 'flipInY'}});//--------运用文字插件
    $(".nav-btn-show").textillate({initialDelay: 300, in: {delay: 2, shuffle: true}});
    $('.subhead').textillate({
        loop: true,
        in: {
            effect: 'fadeInLeftBig',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: false
        },
        out: {
            effect: 'rotateOutUpRight',
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: false,
            reverse: true
        }
    });
    $(".welcome-visiting").textillate({
        autoStart: true,
        initialDelay: 0,
        minDisplayTime: 1000,
        loop: true,
        in: {
            effect: 'bounce',
            delayScale: 0.5,
            delay: 50,
            sync: false,
            shuffle: true,
            reverse: false
        },
        out: {
            effect: 'bounce',
            delayScale: 0.5,
            delay: 50,
            sync: false,
            shuffle: true,
            reverse: false
        }
    });

    /*window.mySilder = new flux.slider('#slider', {//--------运用轮播图插件
        delay: 5000,
        transitions:[/!*"bars3d",*!//!*"blinds3d"*!//!*"cube",*!//!*"tiles3d"*!//!*"turn",*!/"warp","zip","bars","blinds"/!*,"blocks"*!//!*,"blocks2","concentric","dissolve"*!/],
        autoplay: false,
        pagination: false,
        controls: true,
        captions:false
    });*/
    $("a[rel=group]").fancybox({//fancybox插件
        'transitionIn'	: 'elastic',
        'transitionOut'	: 'elastic',
        'titlePosition' : 'outside',
        'cyclic'        : true,
    });
    $( "#lightgallery,#email" ).tooltip({//input框提示工具
        position: { my: "left+15 center", at: "right center" }
    });
    $('.row1').adipoli({
        'startEffect' : 'transparent',
        'hoverEffect' : 'boxRainGrowReverse'
    });
    $('.row2').adipoli({
        'startEffect' : 'transparent',
        'hoverEffect' : 'sliceDown'
    });
    $('.row3').adipoli({
        'startEffect' : 'transparent',
        'hoverEffect' : 'boxRandom'
    });
    $('.row4').adipoli({
        'startEffect' : 'transparent',//overlay
        'hoverEffect' : 'foldLeft'
    });
    $('.row5').adipoli({
        'startEffect' : 'normal',
        'hoverEffect' : 'popout'
    });
    lightGallery(document.getElementById('lightgallery'),{//gallery插件
        mode: 'lg-slide',
        cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
        loop:true
    });
    var ue = UE.getEditor('text', {//百度ueditor
        toolbars: [
            ['fullscreen', 'source', 'undo', 'redo', 'bold','time', 'date','fontfamily','fontsize','emotion','map']
        ]

    });
    option = {
        /*title : {
            text: '南丁格尔玫瑰图',
            subtext: '纯属虚构',
            x:'center'
        },*/
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:['html','js','css','php','jQuery']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'Work Skills',
                type:'pie',
                radius : [30, 110],
                center : ['50%', '50%'],
                roseType : 'area',
                data:[
                    {value: 25, name: 'html'},
                    {value: 30, name: 'js'},
                    {value: 20, name: 'css'},
                    {value: 10, name: 'php'},
                    {value: 15, name: 'jQuery'}
                ]
            }
        ]
    };

    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(option);
    (function () {//<----------backTop函数
        $(window).scroll(function () {//<----------backTop的显示与隐藏
            if ($(window).scrollTop() >= $(".main").offset().top) {
                $("#toTop").show("fade","slow");
            }else{
                $("#toTop").hide("fade","slow");
            }
        });
        $("#toTop").click(function () {
            $("html,body").animate({"scrollTop": 0}, 600);
        });
    })();
    (function () {
        var arr=[];//<----------导航栏的点击事件
        $(".my-floor").each(function () {
            arr.push($(this).offset().top);
        });
        $('.nav-btn-hide').each(function (i) {
            $(this).click(function () {
                $("html,body").animate({"scrollTop":arr[i]}, 600);
            });
        });
        /*$('.nav-list-title li').hover(function() {	//On hover...
            $(this).children().stop().animate({top:'-51px'}, 250);
        } , function() { //On hover out...
            $(this).children().stop().animate({
                top: "0"
            }, 250);//Move the span back to its original state (0px)
        });*/
    })();
    (function () {//<----------顶部固定栏菜单
        $(".top-nav-fix li").hover(function() {	//On hover...
            $(this).children("span").stop().animate({marginTop:'-40px'}, 250);
        } , function() { //On hover out...
            if ($(this).index() == num_index) {//---------若当前index值等于所记录下的num_index值 则return
                return;
            }
            $(this).children("span").stop().animate({
                marginTop: "0"
            }, 250);//Move the span back to its original state (0px)
        });
        var arr = [];
        var num_index;
        $('.my-floor').each(function () {//<--------将所有楼层的offset().top放进数组
            arr.push($(this).offset().top);
        });
        arr.push($(document).height());//<--------将文档高度放进数组
        var screenH = $(window).height();
        function scrollEvent() {//<--------滚动事件函数
            if ($(this).scrollTop() >= arr[0] - (screenH / 2)) {
                $('.myFix').show("fold", "slow");
            } else {
                $('.myFix').hide("fold", "slow");
            }
            for (var i = 0; i < arr.length; i++) {//<--------当滚动条的高度大于某个楼层的高度且小于其下一个楼层的高度 得到当前在哪个楼层
                if ($(window).scrollTop() >= arr[i] - (screenH / 2) && $(window).scrollTop() < arr[i + 1] - (screenH / 2)) {
                    $(".top-nav-fix").children('li').eq(i).children("span").stop().animate({marginTop:'-40px'}, 250).end().siblings().children("span").stop().animate({marginTop: "0"}, 250);
                    num_index = i;//<--------记录下此时的num_index值
                }
            }
        }
        $(window).scroll(function () {//<--------window的滚动事件
            scrollEvent();//调用scrollEvent
        });
        $(".top-nav-fix").children('li').each(function (i) {
            var _this = $(this);
            _this.click(function () {////<--------每个楼层的li绑定点击事件
                var that = $(this);
                num_index = that.index();//<--------记录下此时的num_index值
                that.children("span").stop().animate({marginTop:'-40px'}, 250).end().siblings().children("span").stop().animate({marginTop: "0"}, 250);
                $(window).scroll(function () {//滚动事件发生时不调用scrollEvent
                    that.children("span").stop().animate({marginTop:'-40px'}, 250).end().siblings().children("span").stop().animate({marginTop: "0"}, 250);
                });
                $("html,body").stop().animate({"scrollTop": arr[num_index]}, 600, function () {
                    $(window).scroll(function () {//<--------window的滚动事件
                        scrollEvent();//重新调用scrollEvent
                    });
                });
            });
        });
    })();
    (function () {//邮箱失去焦点事件
        var re=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        $("#email").focusout(function () {
            var emailVal=$(this).val();
            console.log(re.test(emailVal));
            if(!re.test(emailVal)){
                $(this).val("");
            }
        });
    })();
    (function slider() {//slider插件
        var imf = function () {
            var lf = 0;
            var instances = [];
            //定义一个通过class获得元素的方法
            function getElementsByClass (object, tag, className) {
                var o = object.getElementsByTagName(tag);
                for ( var i = 0, n = o.length, ret = []; i < n; i++)
                    if (o[i].className == className) ret.push(o[i]);
                if (ret.length == 1) ret = ret[0];
                return ret;
            }
            function addEvent (o, e, f) {
                if (window.addEventListener) o.addEventListener(e, f, false);
                else if (window.attachEvent) r = o.attachEvent('on' + e, f);
            }
            function createReflexion (cont, img) {
                var flx = false;
                if (document.createElement("canvas").getContext) {
                    flx = document.createElement("canvas");
                    flx.width = img.width;
                    flx.height = img.height;
                    var context = flx.getContext("2d");
                    context.translate(0, img.height);
                    context.scale(1, -1);
                    context.drawImage(img, 0, 0, img.width, img.height);
                    context.globalCompositeOperation = "destination-out";
                    var gradient = context.createLinearGradient(0, 0, 0, img.height * 2);
                    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
                    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
                    context.fillStyle = gradient;
                    context.fillRect(0, 0, img.width, img.height * 2);
                } else {
                    /* ---- DXImageTransform ---- */
                    flx     = document.createElement('img');
                    flx.src = img.src;
                    flx.style.filter = 'flipv progid:DXImageTransform.Microsoft.Alpha(' +
                        'opacity=50, style=1, finishOpacity=0, startx=0, starty=0, finishx=0, finishy=' +
                        (img.height * .25) + ')';
                }
                /* ---- insert Reflexion ---- */
                flx.style.position = 'absolute';
                flx.style.left     = '-1000px';
                cont.appendChild(flx);
                return flx;
            }
            /* //////////// ==== ImageFlow Constructor ==== //////////// */
            function ImageFlow(oCont, size, zoom, border) {
                this.diapos     = [];
                this.scr        = false;
                this.size       = size;
                this.zoom       = zoom;
                this.bdw        = border;
                this.oCont      = oCont;
                this.oc         = document.getElementById(oCont);
                this.scrollbar  = getElementsByClass(this.oc,   'div', 'scrollbar');
                this.text       = getElementsByClass(this.oc,   'div', 'text');
                this.title      = getElementsByClass(this.text, 'div', 'title');
                this.legend     = getElementsByClass(this.text, 'div', 'legend');
                this.bar        = getElementsByClass(this.oc,   'img', 'bar');
                this.arL        = getElementsByClass(this.oc,   'img', 'arrow-left');
                this.arR        = getElementsByClass(this.oc,   'img', 'arrow-right');
                this.bw         = this.bar.width;
                this.alw        = this.arL.width - 5;
                this.arw        = this.arR.width - 5;
                this.bar.parent = this.oc.parent  = this;
                this.arL.parent = this.arR.parent = this;
                this.view       = this.back       = -1;
                this.resize();
                this.oc.onselectstart = function () { return false; }
                /* ---- create images ---- */
                var img   = getElementsByClass(this.oc, 'div', 'bank').getElementsByTagName('a');
                this.NF = img.length;
                for (var i = 0, o; o = img[i]; i++) {
                    this.diapos[i] = new Diapo(this, i,
                        o.rel,
                        o.title || '- ' + i + ' -',
                        o.innerHTML || o.rel,
                        o.href || '',
                        o.target || '_self'
                    );
                }
                /* ==== add mouse wheel events ==== */
                if (window.addEventListener)
                    this.oc.addEventListener('DOMMouseScroll', function(e) {
                        this.parent.scroll(-e.detail);
                    }, false);
                else this.oc.onmousewheel = function () {
                    this.parent.scroll(event.wheelDelta);
                }
                /* ==== scrollbar drag N drop ==== */
                this.bar.onmousedown = function (e) {
                    if (!e) e = window.event;
                    var scl = e.screenX - this.offsetLeft;
                    var self = this.parent;
                    /* ---- move bar ---- */
                    this.parent.oc.onmousemove = function (e) {
                        if (!e) e = window.event;
                        self.bar.style.left = Math.round(Math.min((self.ws - self.arw - self.bw), Math.max(self.alw, e.screenX - scl))) + 'px';
                        self.view = Math.round(((e.screenX - scl) ) / (self.ws - self.alw - self.arw - self.bw) * self.NF);
                        if (self.view != self.back) self.calc();
                        return false;
                    }
                    /* ---- release scrollbar ---- */
                    this.parent.oc.onmouseup = function (e) {
                        self.oc.onmousemove = null;
                        return false;
                    }
                    return false;
                }
                /* ==== right arrow ==== */
                this.arR.onclick = this.arR.ondblclick = function () {
                    if (this.parent.view < this.parent.NF - 1)
                        this.parent.calc(1);
                }
                /* ==== Left arrow ==== */
                this.arL.onclick = this.arL.ondblclick = function () {
                    if (this.parent.view > 0)
                        this.parent.calc(-1);
                }
            }
            /* //////////// ==== ImageFlow prototype ==== //////////// */
            ImageFlow.prototype = {
                /* ==== targets ==== */
                calc : function (inc) {
                    if (inc) this.view += inc;
                    var tw = 0;
                    var lw = 0;
                    var o = this.diapos[this.view];
                    if (o && o.loaded) {
                        /* ---- reset ---- */
                        var ob = this.diapos[this.back];
                        if (ob && ob != o) {
                            ob.img.className = 'diapo';
                            ob.z1 = 1;
                        }
                        /* ---- update legend ---- */
                        this.title.replaceChild(document.createTextNode(o.title), this.title.firstChild);
                        this.legend.replaceChild(document.createTextNode(o.text), this.legend.firstChild);
                        /* ---- update hyperlink ---- */
                        if (o.url) {
                            o.img.className = 'diapo link';
                            window.status = 'hyperlink: ' + o.url;
                        } else {
                            o.img.className = 'diapo';
                            window.status = '';
                        }
                        /* ---- calculate target sizes & positions ---- */
                        o.w1 = Math.min(o.iw, this.wh * .5) * o.z1;
                        var x0 = o.x1 = (this.wh * .5) - (o.w1 * .5);
                        var x = x0 + o.w1 + this.bdw;
                        for (var i = this.view + 1, o; o = this.diapos[i]; i++) {
                            if (o.loaded) {
                                o.x1 = x;
                                o.w1 = (this.ht / o.r) * this.size;
                                x   += o.w1 + this.bdw;
                                tw  += o.w1 + this.bdw;
                            }
                        }
                        x = x0 - this.bdw;
                        for (var i = this.view - 1, o; o = this.diapos[i]; i--) {
                            if (o.loaded) {
                                o.w1 = (this.ht / o.r) * this.size;
                                o.x1 = x - o.w1;
                                x   -= o.w1 + this.bdw;
                                tw  += o.w1 + this.bdw;
                                lw  += o.w1 + this.bdw;
                            }
                        }
                        /* ---- move scrollbar ---- */
                        if (!this.scr && tw) {
                            var r = (this.ws - this.alw - this.arw - this.bw) / tw;
                            this.bar.style.left = Math.round(this.alw + lw * r) + 'px';
                        }
                        /* ---- save preview view ---- */
                        this.back = this.view;
                    }
                },
                /* ==== mousewheel scrolling ==== */
                scroll : function (sc) {
                    if (sc < 0) {
                        if (this.view < this.NF - 1) this.calc(1);
                    } else {
                        if (this.view > 0) this.calc(-1);
                    }
                },
                /* ==== resize  ==== */
                resize : function () {
                    this.wh = this.oc.clientWidth;
                    this.ht = this.oc.clientHeight;
                    this.ws = this.scrollbar.offsetWidth;
                    this.calc();
                    this.run(true);
                },
                /* ==== move all images  ==== */
                run : function (res) {
                    var i = this.NF;
                    while (i--) this.diapos[i].move(res);
                }
            }
            /* //////////// ==== Diapo Constructor ==== //////////// */
            Diapo = function (parent, N, src, title, text, url, target) {
                this.parent        = parent;
                this.loaded        = false;
                this.title         = title;
                this.text          = text;
                this.url           = url;
                this.target        = target;
                this.N             = N;
                this.img           = document.createElement('img');
                this.img.src       = src;
                this.img.parent    = this;
                this.img.className = 'diapo';
                this.x0            = this.parent.oc.clientWidth;
                this.x1            = this.x0;
                this.w0            = 0;
                this.w1            = 0;
                this.z1            = 1;
                this.img.parent    = this;
                this.img.onclick   = function() { this.parent.click(); }
                this.parent.oc.appendChild(this.img);
                /* ---- display external link ---- */
                if (url) {
                    this.img.onmouseover = function () { this.className = 'diapo link';	}
                    this.img.onmouseout  = function () { this.className = 'diapo'; }
                }
            }
            /* //////////// ==== Diapo prototype ==== //////////// */
            Diapo.prototype = {
                /* ==== HTML rendering ==== */
                move : function (res) {
                    if (this.loaded) {
                        var sx = this.x1 - this.x0;
                        var sw = this.w1 - this.w0;
                        if (Math.abs(sx) > 2 || Math.abs(sw) > 2 || res) {
                            /* ---- paint only when moving ---- */
                            this.x0 += sx * .1;
                            this.w0 += sw * .1;
                            if (this.x0 < this.parent.wh && this.x0 + this.w0 > 0) {
                                /* ---- paint only visible images ---- */
                                this.visible = true;
                                var o = this.img.style;
                                var h = this.w0 * this.r;
                                /* ---- diapo ---- */
                                o.left   = Math.round(this.x0) + 'px';
                                o.bottom = Math.floor(this.parent.ht * .25) + 'px';
                                o.width  = Math.round(this.w0) + 'px';
                                o.height = Math.round(h) + 'px';
                                /* ---- reflexion ---- */
                                if (this.flx) {
                                    var o = this.flx.style;
                                    o.left   = Math.round(this.x0) + 'px';
                                    o.top    = Math.ceil(this.parent.ht * .75 + 1) + 'px';
                                    o.width  = Math.round(this.w0) + 'px';
                                    o.height = Math.round(h) + 'px';
                                }
                            } else {
                                /* ---- disable invisible images ---- */
                                if (this.visible) {
                                    this.visible = false;
                                    this.img.style.width = '0px';
                                    if (this.flx) this.flx.style.width = '0px';
                                }
                            }
                        }
                    } else {
                        /* ==== image onload ==== */
                        if (this.img.complete && this.img.width) {
                            /* ---- get size image ---- */
                            this.iw     = this.img.width;
                            this.ih     = this.img.height;
                            this.r      = this.ih / this.iw;
                            this.loaded = true;
                            /* ---- create reflexion ---- */
                            this.flx    = createReflexion(this.parent.oc, this.img);
                            if (this.parent.view < 0) this.parent.view = this.N;
                            this.parent.calc();
                        }
                    }
                },
                /* ==== diapo onclick ==== */
                click : function () {
                    if (this.parent.view == this.N) {
                        /* ---- click on zoomed diapo ---- */
                        if (this.url) {
                            /* ---- open hyperlink ---- */
                            window.open(this.url, this.target);
                        } else {
                            /* ---- zoom in/out ---- */
                            this.z1 = this.z1 == 1 ? this.parent.zoom : 1;
                            this.parent.calc();
                        }
                    } else {
                        /* ---- select diapo ---- */
                        this.parent.view = this.N;
                        this.parent.calc();
                    }
                    return false;
                }
            }
            /* //////////// ==== public methods ==== //////////// */
            return {
                /* ==== initialize script ==== */
                create : function (div, size, zoom, border) {
                    /* ---- instanciate imageFlow ---- */
                    var load = function () {
                        var loaded = false;
                        var i = instances.length;
                        while (i--) if (instances[i].oCont == div) loaded = true;
                        if (!loaded) {
                            /* ---- push new imageFlow instance ---- */
                            instances.push(
                                new ImageFlow(div, size, zoom, border)
                            );
                            /* ---- init script (once) ---- */
                            if (!imf.initialized) {
                                imf.initialized = true;
                                /* ---- window resize event ---- */
                                addEvent(window, 'resize', function () {
                                    var i = instances.length;
                                    while (i--) instances[i].resize();
                                });
                                /* ---- stop drag N drop ---- */
                                addEvent(document.getElementById(div), 'mouseout', function (e) {
                                    if (!e) e = window.event;
                                    var tg = e.relatedTarget || e.toElement;
                                    if (tg && tg.tagName == 'HTML') {
                                        var i = instances.length;
                                        while (i--) instances[i].oc.onmousemove = null;
                                    }
                                    return false;
                                });
                                /* ---- set interval loop ---- */
                                setInterval(function () {

                                    var i = instances.length;
                                    while (i--) instances[i].run();

                                }, 16);
                            }
                        }
                    }
                    /* ---- window onload event ---- */
                    addEvent(window, 'load', function () { load(); });
                }
            }
        }();
        /* ==== create imageFlow ==== */
        //          div ID    , size, zoom, border
        imf.create("imageFlow", 0.15, 1.5, 10);

    })();//slider插件
});