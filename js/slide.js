// 幻灯片模块
// (function($) {
//     'use strict';

//     // 构造函数只实例化一次,所以Slide只调用一次
//     function Slide($elem,options) {
//         // 用this来接收参数,参数可在全局使用,即参数可复用
//         this.$elem = $elem;
//         this.options = options;

//         // 在构造函数里获取slide-item
//         this.$items = this.$elem.find('.slide-item');
//         // 找到小圆钮
//         this.$indicators = this.$elem.find('.slide-indicator');
//         this.$controls = this.$elem.find('.slide-control');

//         this.itemNum = this.$items.length;
//         this.curIndex = this._getCorrectIndex(this.options.activeIndex);

//         // 在构造函数内完成初始化过程
//         this_init();

//     }

//     // 在原型上添加_init初始化函数,仅供内部使用
//     Slide.prototype._init = function() {

//         // 对象加上淡入淡出样式
//         // this.$elem.addClass('slide-fade');
        
//         //eq方法找到默认的显示图片,默认显示this.options.activeIndex
//         this.$items.eq(this.options.activeIndex).show();

//         // 每次找对应圆钮前,要清除之前圆钮的激活样式, 然后再去激活对应的圆钮
//         this.$items.$indicators.removeClass('slide-indicator-active');
//         // 激活对应的小圆钮: 找到对应圆钮,添加激活状态 class
//         this.$items.$indicators.eq(this.options.activeIndex).addClass('slide-indicator-active');

//         if(this.options.animation === 'slide') {
//             // 调用_slide方法
//             this.to = this_slide;
//             // 添加slide样式
//             this.$elem.addClass('slide-slide');
//         }else {
//             this.to = this._fade;
//             // 调用fade切换,就添加fade样式
//             this.$elem.addClass('slide-fade');
//         }

//     }

//     // 原型添加切换函数,实现切换功能
//     // 两个参数: 当前显示图片index,指定的下一张图片
//     Slide.prototype.to = function(index, ) {
//         // 判断只需要做一次,只有init函数是调用一次,所以判断放入init函数里

//         // 判断切换图片是采用淡入淡出切换 还是 滑入滑出切换

//         // 如果指定动画为slide,就调用slide,否则就采用淡入淡出切换
//         // if(this.options.animation === 'slide') {
//         //     // 调用_slide方法
//         //     this_slide(index);
//         // }else {
//         //     this._fade(index);
//         // }


//     }

//     // 淡入淡出的切换方式
//     Slide.prototype_fade = function() {
//         if (this.curIndex === index) return;

//         this.$items.eq(this.curIndex).showHide('hide');
//         this.$items.eq(index).showHide('show');

//         this._activateIndicators(index);

//         this.curIndex = index;
//     }

//     // 滑入滑出的切换方式
//     Slide.prototype._slide = function() {
//         if (this.curIndex === index) return;

//         var self = this;

//         // 确定滑入滑出的方向
//         if (!direction) { // click indicators
//             if (this.curIndex < index) {
//                 direction = -1;
//             } else if (this.curIndex > index) {
//                 direction = 1;
//             }
//         }

//         // 设置指定滑入幻灯片的初始位置
//         this.$items.eq(index).removeClass(this.transitionClass).css('left', -1 * direction * this.itemWidth);

//         // 当前幻灯片滑出可视区域，指定幻灯片滑入可视区域
//         setTimeout(function () {
//             self.$items.eq(self.curIndex).move('x', direction * self.itemWidth);
//             self.$items.eq(index).addClass(self.transitionClass).move('x', 0);
//             self.curIndex = index;
//         }, 20);
        
//         // 激活indicator
//         this._activateIndicators(index);
//     }

//     // 自动切换的开启
//     Slide.prototype.auto = function() {
//         var self = this;

//         this.intervalId = setInterval(function () {
//             self.to(self._getCorrectIndex(self.curIndex + 1), -1);
//         }, this.options.interval);
//     }

//     // 自动切换的暂停
//     Slide.prototype.pause = function() {
//         clearInterval(this.intervalId);
//     }


//     // 定义构造函数的默认参数
//     Slide.DEFAULTS = {
//         css3: false,
//         // 不要js动画
//         js: false,
//         // animation采用fade淡入淡出的效果,slide是滑入滑出的方式
//         animation: 'fade',
//         // 控制默认情况下哪一张幻灯片显示,比如刷新页面后,当前幻灯片显示哪一张
//         activIndex: 0, //假设默认显示第1张
//         // 默认不开启自动切换的功能
//         interval: 0
//     }

//     // 注册jQuery插件
//     $.fn.extend({
//         slide: function(option) {
//             // 全部遍历并返回this
//             return this.each(function() {
//                 var $this=$(this),
//                 slide=$this.data('slide'),
//                 // 如果传入的参数是一个对象,就覆盖$(this).data(),$(this).data()就是获取data-active
//                 options = $.extend({}, Slide.DEFAULTS, $(this).data(), typeof option==='object'&&option);
//                 // dropdown(this, options);  
//                 if(!slide){//解决多次调用slide问题
//                     $this.data('slide',slide=new Slide($this,options));

//                 }  

//                 if(typeof slide[option]==='function'){
//                     slide[option]();

//                 }
              
//             })
//         }
        
//     })
    
// })(jQuery);

//  // 通过jQuery插件的方式调用幻灯片模块
//  // 获取需要调用插件的id
//  $focusSlide = $('#focus-slide');
//  // 调用封装的幻灯片插件slide,并且传入参数
//  $focusSlide.slide(
//      // 传参数：是否使用动画，动画采用CSS3方式还是js方式
//      {
//          // 要CSS3动画
//          css3: true,
//          // 不要js动画
//          js: false,
//          // animation采用fade淡入淡出的效果,slide是滑入滑出的方式
//          animation: 'fade',
//          // 控制默认情况下哪一张幻灯片显示,比如刷新页面后,当前幻灯片显示哪一张
//          activIndex: 2, //假设默认显示第三张
//          interval: 500 

//          // // auto 控制是否需要自动切换
//          // auto: true,
//          // // 控制自动切换的间隔时间为500毫秒
//          // autoInterval: 500,
//          // auto和autoInterval可以简化为一个参数inteval
//          // interval: 0 表示不需要自动切换 interval: 500表示有自动切换和切换时间
//      }
//  );

$(function() {
       //代码初始化
       var size=$(".slide-container img").size();
       //页面加入小圆点
       for (var i = 1; i <= size; i++) {
           var li="<li></li>";
           $(".slide-indicator-wrap").append(li);
       };

       //手动控制轮播效果
       $(".slide-container img").eq(0).show();  //默认显示第一张幻灯片
       $(".slide-indicator-wrap li").eq(0).addClass("slide-indicator-active");
       //控制鼠标在小圆点上的移入移出
       $(".slide-indicator-wrap li").mouseover(function() {
           $(this).addClass("slide-indicator-active").siblings().removeClass("slide-indicator-active");
           var index = $(this).index();
           i=index;
           $(".slide-container img").eq(index).fadeIn(300).siblings().fadeOut(300);
       })


       //自动
       var i = 0;
       var t = setInterval(move, 1500);
       //点击左切换按钮  
       function moveLeft() {
           i--;
           if (i == -1) {
                 i = size-1;
           }
           $(".slide-indicator-wrap li").eq(i).addClass("slide-indicator-active").siblings().removeClass("slide-indicator-active");
           $(".slide-container img").eq(i).fadeIn(300).siblings().fadeOut(300);

       }
       //点击右切换按钮
       function move() {
           i++;
           if (i == size) {
               i = 0;
           }
           $(".slide-indicator-wrap li").eq(i).addClass("slide-indicator-active").siblings().removeClass("slide-indicator-active");
           $(".slide-container img").eq(i).fadeIn(300).siblings().fadeOut(300);

       }
       //定时器的开始与结束
       $(".slide-fade").hover(function() {
           clearInterval(t);
       }, function() {
           t = setInterval(move, 1500)
       })
       //左边按钮的点击事件
       $(".slide-fade .slide-control-left").click(function() {
           moveLeft();
       })
       //右边按钮的点击事件
       $(".slide-fade .slide-control-right").click(function() {
           move();
       })


});