// // 下拉菜单显示隐藏及样式更改功能模块封装
(function(){
    'use strict';
    
    /**
     * 优化
     * 封装成函数有复用功能,
     * 以便于需要使用js控制鼠标移入移出的对象,
     * 当做参数elem传入函数,调用函数即可
     */
    function dropDown(elem) {
        // 传入的参数要转化为jQuery对象
        var $elem = $(elem);
        
        // 下拉菜单的js控制鼠标的移入移出
        $('.dropdown').hover(function() {
            // 因为后面使用了两次$(this),所以要用变量￥this缓存$(this)，以避免重复加载
            var $this = $(this);
            // 鼠标移入,class增加，生效
            $this.addClass($this.data('active')+'-active');
        },function() {
            // 缓存this，以避免重复加载
            var $this = $(this);
            // 鼠标移出,class去除，失效
            $this.removeClass($this.data('active')+'-active');
        })

    }

    // 函数调用封装成jQuery插件,插件为了更好的调用

    $.fn.extend({
        // 传入插件名字
        dropdownLayer: function() {

            return this.each(function() {
                dropDown(this);
            })
        }
    })
    // 调用插件
    $('.dropdown').dropdownLayer(); 

})(jQuery);

// (function($) {
//     'use strict'

//     function Dropdown($elem, options) {
//         this.$elem = $elem;
//             this.options = options;
//         this.$layer = this.$elem.find('.dropdown-layer'),
//             this.activeClass = options.active + '-active';
        
//         this._init();
//     }

//     Dropdown.DEFAULTS = {
//         event: "hover",
//         css3: true,
//         js: true,
//         animation: 'fade',
//         delay: 0,
//         active: 'dropdown'
//     };
//     Dropdown.prototype._init=function () {
//         var self=this;
//         this.$layer.showHide(this.options);       
//         this.$layer.on('show shown hide hidden',function (e) {
//             self.$elem.trigger('dropdown-'+e.type);
            
//         });

//         if (this.options.event === 'click') {
//             this.$elem.on('click', function(e) {
//                 self.show();
//                 e.stopPropagation();
//             });
//             $(document).on('click', $.proxy(this.hide, this));

//         } else {
//             this.$elem.hover($.proxy(this.show, this), $.proxy(this.hide, this));

//         }
//     }

    
//     Dropdown.prototype.show = function() {
//         var self = this;
//         if (this.options.delay) {
//             this.timer = setTimeout(function() {
//                 _show();
//             }, this.options.delay);
//         } else {
//             _show();
//         }

//         function _show() {
//             self.$elem.addClass(self.activeClass);
//             self.$layer.showHide('show');
//         }

//     }

//     Dropdown.prototype.hide = function() {
//         if(this.options.delay){
//             clearTimeout(this.timer);

//         }
//         this.$elem.removeClass(this.activeClass);
//         this.$layer.showHide('hide');
//     }

//     $.fn.extend({
//         dropdown: function(option) {
//             return this.each(function() {
                
//                 var $this=$(this),
//                 dropdown=$this.data('dropdown'),
//                 options = $.extend({}, Dropdown.DEFAULTS, $(this).data(), typeof option==='object'&&option);
//                 // dropdown(this, options);  
//                 if(!dropdown){//解决多次调用dropdown问题
//                     $this.data('dropdown',dropdown=new Dropdown($this,options));

//                 }  

//                 if(typeof dropdown[option]==='function'){
//                     dropdown[option]();

//                 }

//             });

//         }
//     });


//     // $('.dropdown').dropdown({
//     //     event: 'hover',
//     //     delay: 1000,
//     //     css3: true,
//     //     js: true,
//     //     animation: 'fade'
//     //     // active:'menu'
    
//     // });

// })(jQuery);

// $('.dropdown').dropdown({
//     event: 'hover',
//     delay: 1000,
//     css3: true,
//     js: true,
//     animation: 'fade'
//     // active:'menu'

// });

// $('#btn-show').on('click', function() {
//     $('.dropdown').dropdown('show');

// });

// $('#btn-hide').on('click', function() {
//     $('.dropdown').dropdown('hide');

// });



