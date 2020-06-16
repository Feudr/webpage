// 解决不同浏览器的 transition 兼容问题
// transitionend 是CSS3 的属性,用的话要考虑兼容性

(function(){
    var transitionAndEvenName = {
        // 标准的transition支持的是transitionend
        transition: 'transitionend',
        // 火狐浏览器的transition,支持的是transitionend
        MozTransition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
		OTransition: 'oTransitionEnd otransitionend'
    };
    
    // 定义变量保存最终获得的transition的支持写法
    var transitionEnd = '';
    // 默认情况下不支持CSS3的transition
    isSupport = false;

    // 遍历transitionAndEvenName
    for (var i in transitionAndEvenName) {
        // 每次遍历都要判断body标签下的样式是否存在transition, !== undefined就代表存在
        // [name]代表transitionAndEvenName里的4个对象
		if (document.body.style[i] !== undefined) {
            // 存在就取出保存给变量transitionEnd接收
            transitionEnd = transitionAndEvenName[i];
            // CSS3的transition也就存在
            isSupport = true;
            // 一旦找到存在transition的,就停止循环停止继续遍历
			break;
		}
	};

    // 把变量暴露给全局作用域
	window.mt = window.mt || {};
	window.mt.transition = {
        // 默认transitionEnd
		end: transitionEnd,
		isSupport: isSupport
    };
    
})();