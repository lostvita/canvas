export default [
  {
    title: '绘图', // 页面标题&一级nav标题
    icon: 'icon-home',
    routes: [{
        name: '文字粒子',
        path: '/front/image/text-grain',
        component: 'TextGrain'
    }, {
        name: '图像粒子',
        path: '/front/image/image-grain',
        auth: '123',
        component: 'ImageGrain'
    }]
  },
  {
    title: '运动', // 页面标题&一级nav标题
    icon: 'icon-home',
    routes: [{
        name: '匀速',
        path: '/front/stir/uniform-speed',
        component: 'UniformSpeed'
    }, {
        name: '匀变速',
        path: '/front/stir/variable-speed',
        auth: '123',
        component: 'VariableSpeed'
    }, {
      name: '自由落体',
      path: '/front/stir/free-fall',
      auth: '123',
      component: 'FreeFall'
    }]
  },
  {
    title: 'HTML+CSS可视化',
    icon: 'icon-money',
    routes: [{
      name: '柱状图',
      path: '/front/hc/histogram',
      component: 'HcHistogram'
    }, {
      name: '饼图',
      path: '/front/hc/piegraph',
      component: 'PieGraph'
    }, {
      name: '路径裁剪',
      path: '/front/hc/clip-path',
      component: 'ClipPath'
    }]
  },{
    title: 'Canvas绘画',
    icon: 'icon-pic',
    routes: [{
      name: '基础图形',
      path: '/front/canvas/base-shape',
      component: 'BaseShape'
    }]
  }
]