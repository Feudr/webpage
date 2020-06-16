
// 点击侧栏工具条返回顶部
$(function() {
    $('#backToTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        },500)
    })
});