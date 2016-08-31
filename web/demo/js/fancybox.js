var Fancybox = function() {
  function Fancybox() {
    // 默认设置
    this.cfg = {
      width: 600,
      top: 150,
      hasCloseBtn: false,
      openInBlank: false
    }
  }

  Fancybox.prototype = {
    init: function() { // 初始化, 把需要多次用到的东西保存成属性（变量）避免全局重复查找
      var self = this;
      this.bodyNode = $(document.body);
      // 创建遮罩和弹出框
      this.fancyMask = $('<div class="fancy-mask" data-role="close-btn"></div>');
      this.fancyPopup = $('<div class="fancy-popup">');
      // 弹出框的具体HTML结构单独用下面这个方法进行渲染
      this.render();
      // 渲染后保存需要用到的元素
      this.fancyImg = this.fancyPopup.find('img');
      this.closeBtn = this.fancyPopup.find('a.close-btn');
      this.picContainer = this.fancyPopup.find('div.fancy-pic-area');
      this.picLink = this.picContainer.find('a');
      this.captionContainer = this.fancyPopup.find('div.fancy-text-area > p');
      this.textContainer = this.captionContainer.find('span');
      this.captionLink = this.captionContainer.find('a');
      this.textNode = null;
      // 调用初始化弹出框方法
      this.initPopup();
      // 用委托的方式添加事件
      this.bodyNode.delegate('[data-role=fancybox]', 'click', function(e) {
        e.stopPropagation(); // 阻止事件冒泡
        self.showPopup($(this)); // 调用显示弹出框的方法，把当前发生事件的元素传参进去
      });
      // 添加关闭弹框事件，具体同上
      this.bodyNode.delegate('[data-role=close-btn]', 'click', function(e) {
        e.stopPropagation();
        self.hidePopup();
      });

    },
    initPopup: function() { // 初始化弹出框
      var self = this,
          cfg = this.cfg; // 获取配置

      if (cfg.hasCloseBtn) { // 配置有关闭按钮就添加一个DOM节点，要做其他例如上下切换的话配置方法类似这样就行，也可以不要配置直接写到render那个方法里面去
        this.fancyPopup.find('.fancy-pic-area').append('<a href="javascript:;" class="close-btn" data-role="close-btn">X</a>');
      }

      if (cfg.openInBlank) { // 配置是否新窗口打开
        this.picLink.attr('target', '_blank');
        this.captionLink.attr('target', '_blank');
      }

      this.fancyPopup.css({ // 初始化弹框的样式
        width: cfg.width,
        marginLeft: cfg.width * -0.5,
        top: cfg.top
      });

      this.fancyPopup.find('p').css({ // 布局偷懒了p标签有10像素padding 所以要在初始化弹框的时候减去左右padding
        width: cfg.width - 20
      });
    },
    showPopup: function(item) { // 显示弹框
      var src = item.attr('data-source'), // 通过自定义属性获取需要的数据
          captionText = item.attr('data-caption'),
          link = item.attr('data-link');
      // 把数据设置到对应的节点上去
      this.textNode = document.createTextNode(captionText);
      this.fancyImg.attr('src', src);
      this.textContainer.html(this.textNode);
      this.picLink.attr('href', link);
      this.captionLink.attr('href', link);


      // 让隐藏的遮罩和弹框显示
      this.fancyMask.fadeIn();
      this.fancyPopup.fadeIn();

    },
    hidePopup: function() {
      // 让遮罩和弹框隐藏
      this.fancyMask.fadeOut();
      this.fancyPopup.fadeOut();
    },
    config: function(cfg) { // 配置方法,用jquery的extend方法来扩展配置
      this.cfg = $.extend(this.cfg, cfg);
    },
    render: function() { // 渲染、插入DOM结构
      var domString = '' +
        '<div class="fancy-pic-area">' +
          '<a href="#"><img src="" alt=""></a>' +
        '</div>' +
        '<div class="fancy-text-area">' +
          '<p><span></span><a href="#">MORE >></a></p>  ' +
        '</div>';

      this.fancyPopup.html(domString);
      this.bodyNode.append(this.fancyMask, this.fancyPopup);
    }
  }

  return Fancybox;
}();