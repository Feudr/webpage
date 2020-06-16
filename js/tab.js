// 选项卡点击切换
$(function() {
    // 初始加载页面时 默认显示第一个选项卡及内容
    // $(window).load(function () {
    //     $('.tab-panel').eq(0).show().siblings().hide();
    // })
    // // 监听选项卡的点击事件
    // $('.tab-item').click(function() {
    //     // 排他思想
    //     // 点击添加样式,利用siblings清除其他兄弟样式
    //     $(this).addClass('tab-item-active').siblings().removeClass('tab-item-active')
    //     var index = $(this).index();
    //     // 显示对应的ul
    //     $('.tab-panel').eq(index).show().siblings().hide()
    // })

    // tab 的初始化

    $(".floor1 .tab-item").click(function() {
        // $(".floor > ul").eq(0).show().siblings().hide();
        $(this).addClass("tab-item-active").siblings().removeClass("tab-item-active");
        console.log($(this).index())
        $(".floor1 .tab-panel").eq($(this).index()).show().siblings().hide();
    }) 
    $(".floor2 .tab-item").click(function() {
        $(this).addClass("tab-item-active").siblings().removeClass("tab-item-active");
        $(".floor2 .tab-panel").eq($(this).index()).show().siblings().hide();
    })
    $(".floor3 .tab-item").click(function() {
        $(this).addClass("tab-item-active").siblings().removeClass("tab-item-active");
        $(".floor3 .tab-panel").eq($(this).index()).show().siblings().hide();
    })
});


