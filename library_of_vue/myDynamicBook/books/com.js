let comNav = [
  {
    id: '1',
    title: '组件化的前提',
    active: false,
    children: [
      {
        id: '1-1',
        title: '基础组件',
        active: false,
      },
      {
        id: '1-2',
        title: '功能组件',
        active: false,
      },
      {
        id: '1-3',
        title: '业务组件',
        active: false,
      },
    ]
  },
];
let comMain = [
  {
    id: 'text-1',
    navId: '1-1',
    text: [
      '可做成sdk，供其他app选择性调用。（我的理解，基础组件，在项目中选择性引入）。',
      '我给它取名为base。'
    ]
  },
  {
    id: 'text-2',
    navId: '1-2',
    text: [
      '也可做成sdk，供其他app选择性调用。',
      '我给他取名为functions。',
      '比如地图组件SDK模块就属于功能组件。'
    ]
  },
  {
    id: 'text-3',
    navId: '1-3',
    text: [
      '特定项目开发中所需要用到的组件。',
      '我给它取名为business。'
    ]
  },
];
