module.exports = [
  {text: '首页', link: '/'},
  {
    text: '计算机',
    link: '/computer/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '学习笔记', items:[
        {text: '《JavaScript教程》笔记', link: '/note/javascript/'},
      ]}
    ]
  },
  {
    text: '机械', 
    link: '/mechanical/',
    items: [
      {text: 'HTML', link: '/mechanical/8309a5b876fc95e3/'},
      {text: 'CSS', link: '/mechanical/0a83b083bdf257cb/'},
    ]
  },
  {
    text: '其他',
    link: '/others/',
    items: [
      {text: '技术文档', link: '/others/9a7ee40fc232253e/'},
      //{text: '测试', link: '/pages/41f87d890d0a02af/'},
    ]
  },
  {text: '归档', link: '/archives/'}
]