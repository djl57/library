let htmlNav = [
  {
    id: '1',
    title: '弹框层滚动问题',
    active: false,
    children: [
      {
        id: '1-1',
        title: '两次absolute之后滚动混乱',
        active: false,
      },
      {
        id: '1-2',
        title: '微信端使用window.screen.height的问题',
        active: false,
      },

    ]
  },
];
let htmlMain = [
  {
    id: 'text-1',
    navId: '1-1',
    text: [
      '外面那层absolute改为滚定高度',
      `initSize () {
        let teaLeaveBox = this.$refs.teaLeaveBox;
        let height = window.screen.height;
        let width = window.screen.width;
        teaLeaveBox.style.height = height - 85 + 'px';
        teaLeaveBox.style.width = width + 'px';
      },`,
      '里面那层还是用absolute',
      `.d_scroll2 {
        position: absolute;
        top: 85px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: auto;
        background-color: #ffffff;
        z-index: 1;
      }`
    ]
  },
  {
    id: 'text-2',
    navId: '1-2',
    text: [
      `这是屏幕高度，科室微信页面还要去掉微信本身的高度`
    ]
  },
];
