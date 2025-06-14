export default {
  "/开发文档/": [
    {
      text: '简介',
      link: '/开发文档/简介',
      items: [
        { text: '快速开始', 
          link: '/开发文档/快速开始/快速开始',
          items:[
            {
              text:'数据库环境搭建',link:'/开发文档/快速开始/数据库环境搭建'
            },
            {
              text:'后端环境搭建',link:'/开发文档/快速开始/后端环境搭建'
            },
            {
              text:'前端环境搭建',link:'/开发文档/快速开始/前端环境搭建'
            }
          ]
        },
        { text: '领域驱动设计', link: '/开发文档/领域驱动设计/背景',
          items: [
            {
              text: '背景',
              link: '/开发文档/领域驱动设计/背景'
            },
            {
              text: '概念',
              link: '/开发文档/领域驱动设计/概念/概念',
              items: [
                {
                  text: '战略设计',
                  link: '/开发文档/领域驱动设计/概念/战略设计/战略设计',
                  items: [
                    {
                      text: '通用语言',
                      link: '/开发文档/领域驱动设计/概念/战略设计/通用语言'
                    },
                    {
                      text: '限界上下文',
                      link: '/开发文档/领域驱动设计/概念/战略设计/限界上下文'
                    },
                    {
                      text: '限界上下文映射',
                      link: '/开发文档/领域驱动设计/概念/战略设计/限界上下文映射'
                    },
                    
                  ]
                },
                {
                  text: '战术设计',
                  link: '/开发文档/领域驱动设计/概念/战术设计/战术设计',
                  items: [
                    {
                      text: '实体',
                      link: '/开发文档/领域驱动设计/概念/战术设计/实体'
                    },
                    {
                      text: '值对象',
                      link: '/开发文档/领域驱动设计/概念/战术设计/值对象'
                    },
                    {
                      text: '聚合',
                      link: '/开发文档/领域驱动设计/概念/战术设计/聚合'
                    },
                    {
                      text: '工厂',
                      link: '/开发文档/领域驱动设计/概念/战术设计/工厂'
                    },
                    {
                      text: '领域服务',
                      link: '/开发文档/领域驱动设计/概念/战术设计/领域服务'
                    },
                    {
                      text: '领域事件',
                      link: '/开发文档/领域驱动设计/概念/战术设计/领域事件'
                    },
                    {
                      text: '仓储',
                      link: '/开发文档/领域驱动设计/概念/战术设计/仓储'
                    }
                  ]
                }
              ]
            },
          ]
        },
        {
          text: '后端开发',
          link: '/开发文档/后端开发/后端开发',
          items: [
            {
              text: '领域分层和目录架构',
              link: '/开发文档/后端开发/分层目录/领域分层和目录架构',
              items: [
                {
                  text: '用户接口层',
                  link: '/开发文档/后端开发/分层目录/用户接口层'
                },
                {
                  text: '应用层',
                  link: '/开发文档/后端开发/分层目录/应用层'
                },
                {
                  text: '领域层',
                  link: '/开发文档/后端开发/分层目录/领域层'
                },
                {
                  text: '基础设施层',
                  link: '/开发文档/后端开发/分层目录/基础设施层'
                },
              ]
            },
            {
              text: 'CQRS架构',
              link: '/开发文档/后端开发/CQRS架构'
            },
            {
              text: '框架核心',
              link: '/开发文档/后端开发/核心/NebulaSQL',
              items: [
                {
                  text: 'NebulaSQL',
                  link: '/开发文档/后端开发/核心/NebulaSQL'
                },
                {
                  text: 'SnowFlake',
                  link: '/开发文档/后端开发/核心/SnowFlake'
                },
                {
                  text: '配置',
                  link: '/开发文档/后端开发/核心/配置'
                },
                {
                  text: '认证授权',
                  link: '/开发文档/后端开发/核心/认证授权'
                }
              ]
            }
          ]
        }
      ],
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
