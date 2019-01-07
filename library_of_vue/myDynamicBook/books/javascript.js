let jsNav = [
  {
    id: '1',
    title: '实现双向绑定Proxy比defineproperty优劣如何',
    active: false,
    children: [
      {
        id: '1-1',
        title: '双向绑定',
        active: false,
      },
      {
        id: '1-2',
        title: 'vue三要素',
        active: false,
      },
      {
        id: '1-3',
        title: '基于数据劫持的双向绑定',
        active: false,
      },
      {
        id: '1-4',
        title: '什么是数据劫持',
        active: false,
      },
    ]
  },
  {
    id: '2',
    title: '将 对象格式的数据 转化成 数组格式的数据',
    active: false,
    children: [
      {
        id: '2-1',
        title: 'ES5 的 Object.keys()',
        active: false,
      },
      {
        id: '2-2',
        title: 'ES6 Object.values()',
        active: false,
      },
      {
        id: '2-3',
        title: 'ES6 Object.entries()',
        active: false,
      },
    ]
  },
  {
    id: '3',
    title: '获取时间戳（单位：毫秒），对时间戳进行加减，从而做到上一天，下一天的功能',
    active: false,
    children: [
      {
        id: '3-1',
        title: '获取时间戳',
        active: false,
      },
      {
        id: '3-2',
        title: '时间戳转换为时间',
        active: false,
      },
      {
        id: '3-3',
        title: '上一天，下一天',
        active: false,
      },
    ]
  },
];
let jsMain = [
  {
    id: 'text-1',
    navId: '1-1',
    text: [
      '响应式: 例如如何监听数据变化,其中的实现方法就是我们提到的双向绑定；',
      '模板引擎: 如何解析模板；',
      '渲染: Vue如何将监听到的数据变化和解析后的HTML进行渲染。'
    ]
  },
  {
    id: 'text-2',
    navId: '1-2',
    text: [
      '双向绑定其实已经是一个老掉牙的问题了,只要涉及到MVVM框架就不得不谈的知识点。',
      '可以实现双向绑定的方法有很多：',
      'KnockoutJS基于观察者模式的双向绑定；',
      'Ember基于数据模型的双向绑定；',
      'Angular基于脏检查的双向绑定；',
      '以及此次要讲的基于数据劫持的双向绑定。'
    ]
  },
  {
    id: 'text-3',
    navId: '1-3',
    text: [
      'Vue2.0在用的Object.defineProperty',
      'ES2015中新增的Proxy（vue3.0中将会用到）',
      '严格来讲Proxy应该被称为『代理』而非『劫持』,不过由于作用有很多相似之处,我们在文中就不再做区分,统一叫『劫持』。'
    ]
  },
  {
    id: 'text-4',
    navId: '1-4',
    text: [
      '数据劫持比较好理解,通常我们利用Object.defineProperty劫持对象的访问器,在属性值发生变化时我们可以获取变化,从而进行进一步操作。',
    ]
  },
  {
    id: 'text-5',
    navId: '2-1',
    text: [
      'ES5 的 Object.keys() 将对象中的键名返回成一个数组',
      'typeof之后的类型还是object'
    ]
  },
  {
    id: 'text-6',
    navId: '2-2',
    text: [
      'ES6 的 Object.values() 将对象中的值返回成一个数组',
    ]
  },
  {
    id: 'text-7',
    navId: '2-3',
    text: [
      'ES6 的 Object.entries() 将对象中的键值对返回成一个数组',
    ]
  },
  {
    id: 'text-8',
    navId: '3-1',
    text: [
      'let now = new Date()',
      'now.getTime()方法获得时间戳',
      'let date = new Date(2018, 10, 12)',
      'date.getTime()方法可获得2018年11月12日的时间戳',
    ]
  },
  {
    id: 'text-9',
    navId: '3-2',
    text: [
      'let now = new Date(1533472686000); ',
      '可将时间戳转化为时间',
      '再通过getFullYear()等方法获得具体的年月日时分秒',
    ]
  },
  {
    id: 'text-10',
    navId: '3-3',
    text: [
      'let getDay = (date, type) => {',
        'let year = date.split("-")[0],',
            'month = date.split("-")[1] - 1,',
            'day = date.split("-")[2];',
      '  let curDate = new Date(year, month, day);',
        'let nextTime;',
        'if (type === 1) {',
          '// 下一天',
         ' nextTime = curDate.getTime() + 1000*60*60*24;',
        '} else if (type === 0) {',
          '// 上一天',
          'nextTime = curDate.getTime() - 1000*60*60*24;',
       ' }',
        'let newDate = new Date(nextTime);',
        'let newYear = newDate.getFullYear(),',
           ' newMonth = newDate.getMonth() + 1,',
          '  newDay = newDate.getDate();',
        'newMonth = setZero(newMonth);',
        'newDay = setZero(newDay);',
        'return `${newYear}-${newMonth}-${newDay}`;',
     ' }',
      ",",
    ]
  },
];
