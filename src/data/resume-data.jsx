export const RESUME_DATA = {
  name: '陈泽辉',
  initials: 'chan_',
  location: '广州',
  about: '高级前端-广州高鼎信息科技有限公司',
  summary: () => (
    <div>组件库 element-components、vant-components 作者，重度极客，致力于代码的整体结构规范及优化，平时爱好跑步、游泳、codeing、源码阅读</div>
  ),
  avatarUrl: '/avatar.png',
  personalWebsiteUrl: 'https://github.com/zehuichan',
  contact: {
    email: 'jasonchenzehui@gmail.com',
    tel: '+8615800066380',
    github: 'https://github.com/zehuichan',
  },
  education: [
    {
      school: '广东外语外贸大学',
      degree: '工商管理 - 本科',
      start: '2019',
      end: '2022',
    },
    {
      school: '广东机电职业技术学院',
      degree: '应用电子技术 - 大专',
      start: '2010',
      end: '2013',
    },
  ],
  work: [
    {
      company: '广州高鼎信息科技有限公司',
      badges: () => (
        <>
          <el-tag>全职</el-tag>
        </>
      ),
      title: '高级前端',
      start: '2023',
      end: '至今',
      description: () => (
        <ul>
          <li>负责和林国际物流信息管理系统需求评审及开发落地工作，包括任务拆分、人员分配、工作排期</li>
          <li>负责项目核心代码的实现与优化、代码质量审查制定代码规范</li>
          <li>担任核心主程，负责主要功能模块实现，公共组件封装</li>
          <li>担任核心主程，负责主要功能模块实现，公共组件封装</li>
        </ul>
      ),
    },
    {
      company: '广州兴工科技有限公司',
      badges: () => (
        <>
          <el-tag>全职</el-tag>
        </>
      ),
      title: '高级前端',
      start: '2022',
      end: '2023',
      description: () => (
        <ul>
          <li>负责众包服务平台需求评审及开发落地工作，包括任务拆分、人员分配、工作排期</li>
          <li>担任核心主程，负责主要功能模块实现，公共组件封装</li>
          <li>制定前端组技术规划，优化前端开发流程，包括但不限于 Git 分支管理策略，Code Review 流程</li>
          <li>配合运维搭建基于Gitlab、Jenkins的持续集成(CI\CD)流程</li>
        </ul>
      ),
    },
    {
      company: '广东中视信息科技有限公司',
      badges: () => (
        <>
          <el-tag>全职</el-tag>
        </>
      ),
      title: '中级前端 → 高级前端',
      start: '2020',
      end: '2022',
      description: () => (
        <ul>
          <li>主导并设计、维护公司通用业务组件库，支持 npm 私有化发布，加快开发效率</li>
          <li>参与需求评审会议与产品沟通需求合理性，及时提出疑问点及优化点</li>
          <li>责前端团队的任务拆解、人员分配，主要功能模块实现，公共组件抽离</li>
          <li>配合运维搭建基于Gitlab、Jenkins的持续集成(CI\CD)流程</li>
        </ul>
      ),
    },
  ],
  skills: [
    'javascript',
    'vue/router/pinia',
    'taro',
    'uni-app',
    'element-plus',
    'vant',
    'vite',
    'unocss',
  ],
  projects: [
    {
      title: '和林国际物流信息管理系统',
      techStack: [
        'vue3',
        'pinia',
        'vueuse',
        'vite4',
        'element-plus',
        'unocss',
        'vant',
        'jweixin',
      ],
      start: '2023.07',
      end: '至今',
      description: `
      本套系统是在全球范围内进行货物运输和物流管理的一套综合性系统。 它涉及到了货物的收发、运输、仓储、报关、跟踪等一系列环节，通过高效的协调和管理，确保货物能够按时、安全地送达目的地。
      客户端公众号主要功能包括：下单、查货、地址簿、价格查询、仓库地址。
      管理后台主要功能模块包括：下单、配载、订舱、清关、派送、签收、财务报表等等，其他功能涉及商业保密。
       `,
      responsibilities: () => (
        <ul>
          <li>使用 vue3 搭建项目框架，编写公共组件，实现项目功能</li>
          <li>使用 unocss 原子样式，实现组件样式复用，提高开发效率</li>
          <li>根据业务功能，提炼公共组件</li>
          <li>项目日常维护、版本迭代</li>
        </ul>
      ),
    },
    {
      title: '广东科技成果转移转化中心全链条线上平台',
      techStack: [
        'taro3/vue3',
        'vue3',
        'pinia',
        'vueuse',
        'vite',
        'element-plus',
        'unocss',
        'nutui',
      ],
      start: '2022.11',
      end: '2023.06',
      description: `
      其定位是提供专家科研成果、知识产权、项⽬课题、个⼈荣誉等集中管理和展⽰，推动专家成果与企业需求的有效对接，并且为企业寻找高端人才、突破技术瓶颈、汇聚科技资源，提升核心竞争力。
      主要应用板块包括：众包服务平台前站、配套的管理后台、专家小程序、专家直播平台4大项目。
      `,
      responsibilities: () => (
        <ul>
          <li>负责整站业务需求评审与开发落地工作，使用 vue3 从0-1的推动项目，并如期落地</li>
          <li>担任核心主程，负责任务拆解，前端人员分配</li>
          <li>统一处理请求方法，基础缓存方法，工具函数，增强代码可复用性</li>
          <li>根据设计图，抽离公共组件，加快开发效率</li>
          <li>整合 即构 zego 实时音视频、超级白板功能，搭建专家直播平台</li>
        </ul>
      ),
    },
    {
      title: '中视ETC一站式发行平台',
      techStack: [
        'vue2/3',
        'vite',
        'pinia',
        'taro',
        'uniapp',
        '原生小程序',
      ],
      start: '2020.09',
      end: '2022.10',
      description: `
      中视ETC一站式发行平台，是一个建立于支付宝生态下，与全国各省ETC发行方对接客货车ETC发行、通行免密扣费、售后处理、车主服务的系统服务平台。
      目前平台已接入了广西、内蒙古、黑龙江、北京、安徽、江苏等省份的ETC发行业务，日均发行量为10000+，总用户规模达到了100万。
      主要功能模块包括：ETC发行、审核、售后、激活、通行扣费、财务报表等等，其他功能涉及商业保密。
      `,
      responsibilities: () => (
        <ul>
          <li>主要负责省方ETC小程序、配套的管理后台的维护版本迭代</li>
          <li>管理后台主要负责其重构工作，包括统一处理请求方法、公共组件搭建、前端字典的引入、菜单+按钮权限的适配</li>
          <li>小程序主要负责其首页界面可配置化、公告配置、售后服务中心包括（取消订单，设备更换，ETC
            注销，设备补办，生态回流补签，设备检测，免密代购补签）
          </li>
          <li>基于 element-ui 封装公共组件库的日常维护、版本迭代、文档维护</li>
          <li>配合运维搭建基于Gitlab、Jenkins的持续集成(CI\CD)流程</li>
          <li>负责前端小组的技术选型、框架搭建、code review</li>
        </ul>
      ),
    },
    {
      title: '4S店SAAS系统-支付宝小程序',
      techStack: [
        'vue2/3',
        'vite',
        'pinia',
        'taro',
        'uniapp',
        '原生小程序',
      ],
      start: '2022.02',
      end: '2022.08',
      description: `
      用户端针对4s店锁客难等痛点，基于支付宝开放能力（芝麻go，花呗分期）等信用能力，设计2年三次承诺到店保养可享7折优惠等活动，单店月保养GMV达到40w；
      并基于支付宝端3千万认证车主的公域内流量，利用支付宝域内消息通知、灯火平台等触达能力，设计支付宝域内运营工具。
      商户端针对用户端小程序功能设计了对应的活动发布、订单管理、营销短信管理、券码核销等管理功能，方便快速进行用户端小程序管理。
      `,
      responsibilities: () => (
        <ul>
          <li>主要负责项目前端整站建设包括界面搭建，数据对接，规范设计</li>
          <li>统一处理请求方法，公共组件搭建，基础缓存方法，增强代码可复用性</li>
          <li>负责小程序授权登录流程的对接、用户中心模块的开发</li>
          <li>负责公共组件搭建，包括oss图片上传组件、ocr文字识别组件、车牌号输入框、车牌号选择器、toggle选择器</li>
          <li>负责公共hooks的封装，基于 Taro.setStorageSync 和 Taro.getStorageSync 封装的useStorage，支持响应式数据</li>
        </ul>
      ),
    },
  ],
  repository: [
    {
      title: 'element-components',
      techStack: [
        'Side Project',
        'component',
        'vue',
        'element-ui',
      ],
      description: '增强组件库，基于 element-ui 实现',
      link: 'https://github.com/zehuichan/element-components'
    },
    {
      title: 'vant-components',
      techStack: [
        'Side Project',
        'component',
        'vue',
        'vant2.x',
      ],
      description: '增强组件库，基于 vant2.x 实现',
      link: 'https://github.com/zehuichan/vant-components'
    },
    {
      title: 'vite-element-plus-admin',
      techStack: [
        'vite5',
        'vue3',
        'element-plus',
        'admin-template',
        'vue-admin',
      ],
      description: '是一个后台前端解决方案，它基于 vue3 和 element-plus 实现。',
      link: 'https://github.com/zehuichan/vite-element-plus-admin'
    },
  ]
}
