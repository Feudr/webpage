// index.js用来调用插件的

//  // 下拉菜单的js控制鼠标的移入移出
//  $('.dropdown').hover(function() {
//     // 因为后面使用了两次$(this),所以要用变量￥this缓存$(this)，以避免重复加载
//     var $this = $(this);
//     // 鼠标移入,class增加，生效
//     $this.addClass($this.data('active')+'-active');
// },function() {
//     // 缓存this，以避免重复加载
//     var $this = $(this);
//     // 鼠标移出,class去除，失效
//     $this.removeClass($this.data('active')+'-active');

/**
 * 第二种写法：优化
 * 封装成函数有复用功能,
 * 以便于需要使用js控制鼠标移入移出的对象,
 * 当做参数elem传入函数,调用函数即可
 */
// function dropDown(elem) {
//     // 传入的参数要转化为jQuery对象
//     var $elem = $(elem);
    
//     // 下拉菜单的js控制鼠标的移入移出
//     $('.dropdown').hover(function() {
//         // 因为后面使用了两次$(this),所以要用变量￥this缓存$(this)，以避免重复加载
//         var $this = $(this);
//         // 鼠标移入,class增加，生效
//         $this.addClass($this.data('active')+'-active');
//     },function() {
//         // 缓存this，以避免重复加载
//         var $this = $(this);
//         // 鼠标移出,class去除，失效
//         $this.removeClass($this.data('active')+'-active');
//     })

// }

// 调用函数
// 带有dropdown类名样式的元素,都是需要使用js控制下拉菜单显示隐藏及样式改变
// 所以找出所有带  .dropdown 的元素
// 因为是数组(.dropdown不只一个),所以要遍历
// $('.dropdown').each(function() {
//     dropDown($(this));
//     // $this就是$('.dropdown')
// })

// 继续优化
// 函数调用封装成jQuery插件,插件为了更好的调用

// $.fn.extend({
//     // 传入插件名字
//     dropdownLayer: function() {

//         return this.each(function() {
//             dropDown(this);
//         })
//     }
// })
// // 调用插件
// $('.dropdown').dropdownLayer(); 

// 把函数和插件封装成模块,写入dropdown.js文件里

// ajax获取数据渲染到页面

// $(function() {
//     $.ajax({
//         type: 'GET',
//         url: "json/information.json",
//         dataType: "json",
//         success: function(res) {
//             console.log(res)
//             console.log(typeof(res))
//             var data = res.result
//             console.log(data)
//             var str =""
//             $.each(data, function(i, obj) {
//                 str += '<p class="floor-item-pic"><a href="###" target="_blank"><img src="img/floor/loading.gif" class="floor-img" data-src="img/floor/1/1/1.png" alt="" /></a></p>'
//                 str += '<p class="floor-item-name"><a href="###" target="_blank" class="link">'+obj.name+'</a></p>'
//                 str += '<p class="floor-item-price">'+obj.price+'</p>'
//             })
//             $('#text').append(str)
//         }
//     })

// });









