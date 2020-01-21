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
  }
]