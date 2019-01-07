let htmlNav = [
  {
    id: '1',
    title: 'label标签的妙用',
    active: false,
    children: [
      {
        id: '1-1',
        title: '与input标签一起使用',
        active: false,
      }
    ]
  },
  {
    id: '2',
    title: '修改全局的input，textarea,select的默认样式',
    active: false,
    children: [
      {
        id: '2-1',
        title: '修改全局的input的placeholder样式',
        active: false,
      },
      {
        id: '2-2',
        title: '修改全局的textarea的placeholder的样式',
        active: false,
      },
      {
        id: '2-3',
        title: '修改select的默认样式',
        active: false,
      },
    ]
  },
  {
    id: '3',
    title: 'textarea实现高度自适应',
    active: false,
  },
  
];
let htmlMain = [
  {
    id: 'text-1',
    navId: '1-1',
    text: [
      '可以摒弃input标签的一些基础样式，通过数据绑定把input标签中的内容放到相应label下，可以自定义任意样式'
    ]
  },
  {
    id: 'text-2',
    navId: '2-1',
    text: [
      `.input:placeholder, .textarea:placeholder {
        color:#b3b3b3;
      }`
    ]
  },
  {
    id: 'text-2',
    navId: '2-2',
    text: [
      `.input:placeholder, .textarea:placeholder {
        color:#b3b3b3;
      }`
    ]
  },
  {
    id: 'text-2',
    navId: '2-3',
    text: [
      `select {
        /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
        border: solid 1px #000;
        /*很关键：将默认的select选择框样式清除*/
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
        /*将背景改为红色*/
        background:red;
        /*加padding防止文字覆盖*/
        padding-right: 14px;
      }
        /*清除ie的默认选择框样式清除，隐藏下拉箭头*/
        select::-ms-expand { display: none; }`
    ]
  },
  {
    id: 'text-3',
    navId: '3',
    text: [
      `https://www.cnblogs.com/dffy/p/6386318.html`
    ]
  }
];
