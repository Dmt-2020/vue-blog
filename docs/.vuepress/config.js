module.exports = {
  title: 'Welcome to dmt\'s world!',
  description: 'Just playing around',
  //sidebar: 'auto',
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: '博文',
        items:[
          { text: '我', link: '/Me/'},
          { text: '你', link: '/You/'},
          { text: '她', link: '/She/'},
        ]
      },
      {
        text:'Github',
        link:'https://www.github.com/codeteenager'
      },
    ],
    sidebar:{
      '/Me/':[
        '',  //默认index页面
        'me'
      ],
      '/You/':[
        '',
        'ni'
      ],
      '/She/':[
        '',
        'she'
      ]
    },
    sidebarDepth:2,
    lastUpdated:'last Update',
  },
}