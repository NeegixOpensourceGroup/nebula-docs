export default {
  "/开发文档/": [
    {
      text: '简介',
      link: '/开发文档/简介',
      items: [
        { text: '快速开始', 
          link: '/开发文档/快速开始',
          items:[
            {
              text:'数据库环境搭建',link:'/开发文档/数据库环境搭建'
            },
            {
              text:'后端环境搭建',link:'/开发文档/后端环境搭建'
            },
            {
              text:'前端环境搭建',link:'/开发文档/前端环境搭建'
            }
          ]
         }
      ]
    }
  ],
  "/nebula-framework-generator/": [
    {
      text: '简介',
      link: '/nebula-framework-generator/index',
      items: [
        { text: '插件如何使用',
          items:[
            {
              text:'快速开始',link:'/nebula-framework-generator/quick-start'
            }
          ]
          },
        { text: '自定义扩展', link: '/nebula-framework-generator/custom-extension',
          items: [
            {
              text: '数据库扩展',
              link: '/nebula-framework-generator/database-extension'
            },
            {
              text: '模板扩展',
              link: '/nebula-framework-generator/template-extension'
            }
          ]
        }
      ]
    }
  ]
}
