export const RESUME_DATA = {
  name: '陈泽辉',
  initials: 'chan_',
  location: '广州',
  about: '高级前端-广州兴工科技有限公司',
  summary: () => (
    <ul>
      <li>组件库 element-components、vant-components 作者</li>
      <li>多年前端开发经验，能独立开发项目，善于组件抽象、前端架构与性能优化</li>
      <li>能从0到1开发项目，熟悉 vue2、vue3、taro(vue3)、uniapp(vue2/3) 开发模式，熟悉模块化开发</li>
      <li>熟悉 axios 数据请求方式，使用 mockjs，JSON-Server 模拟后台数据</li>
      <li>熟悉前端⼯程化，掌握 webpack、vite 代码打包工具，能针对项目进行性能分析以及性能优化</li>
      <li>熟悉 yarn、npm、pnpm 包管理工具</li>
      <li>熟悉 eslint、stylelint、prettier、husky 配套的开发模式</li>
      <li>了解 Gitlab 持续集成(CI\CD)流程</li>
      <li>了解 Node.js 及 express、koa 框架，体验输出接口思想</li>
      <li>重度极客，致力于代码的整体结构规范及优化</li>
      <li>爱好跑步、游泳、codeing、源码阅读</li>
    </ul>
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
    {
      company: '广州创思云网络科技有限公司',
      badges: () => (
        <>
          <el-tag>全职</el-tag>
        </>
      ),
      title: '中级前端',
      start: '2019',
      end: '2020',
      description: () => (
        <ul>
          <li>参与前端小组的技术选型、框架搭建</li>
          <li>负责h5app及其配套的管理后台开发</li>
          <li>设计开发高效可复用的基础组件，动态路由实现</li>
          <li>配合项目负责人完成项目指标，根据业务需求，优化完善项目代码</li>
        </ul>
      ),
    },
    {
      company: '佛山市电子口岸有限公司',
      badges: () => (
        <>
          <el-tag>全职</el-tag>
        </>
      ),
      title: '初级前端 → 中级前端',
      start: '2015',
      end: '2019',
      description: () => (
        <ul>
          <li>参与项目需求分析编写文档，根据文档输出产品原型图</li>
          <li>独立负责前端项目，包括项目搭建、技术选型</li>
          <li>独立分析和解决问题，并协助其他开发人员解决问题</li>
          <li>熟练使用 vue 全家桶及其 UI 框架，例如：Element-ui、vux、vant等</li>
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
      title: '田园牧客点餐系统',
      techStack: [
        'vue3',
        'pinia',
        'vueuse',
        'Vite',
        'element-plus',
        'unocss',
        'nutui4',
        'taro3/vue3',
      ],
      start: '2023.12',
      end: '至今',
      description: `
      田园牧客点餐系统是一个基于小程序技术搭建的点餐平台，旨在为用户提供方便、快捷的点餐服务。
      用户端小程序主要功能包括：菜单展示、点餐、购物车、订单提交、微信支付、历史记录。
      商家端管理后台主要功能包括：餐厅基本信息管理、餐桌参数管理、订座信息管理、菜品管理、订单管理、系统管理。
       `,
      responsibilities: () => (
        <ul>
          <li>主导 taro3/vue3 技术栈，搭建项目框架，编写公共组件，实现项目功能</li>
          <li>使用 unocss 原子样式，实现组件样式复用，提高开发效率</li>
          <li>根据业务功能，提炼公共组件</li>
          <li>项目日常维护、版本迭代</li>
        </ul>
      ),
    },
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
    {
      title: '同律人-法律咨询',
      techStack: [
        'vue2',
        'webpack',
        'uniapp',
        'less',
        'vant',
        'tim-js-sdk',
        'jweixin',
      ],
      start: '2020.01',
      end: '2020.07',
      description: `
      法律咨询App，为用户提供了更为便利的法律咨询平台，有利于帮助群众增加法律常识和守法意识。
      主要功能有：文章课程、法律产品、时事新闻、在线咨询、在线支付、地址管理、钱包管理、发票管理、订单管理、个人中心、投诉建议、人才招聘等等，其他功能涉及商业保密。
      `,
      responsibilities: () => (
        <ul>
          <li>独立负责前端整站搭建，包括统一请求方法、模块页面编写、接口联调</li>
          <li>在全局前置守卫初始化 wx.config，以实现每个页面支持微信分享功能</li>
          <li>在线咨询使用 tim-js-sdk 搭建即时通信功能</li>
          <li>使用 wx.chooseImage、wx.getLocalImgData 封装上传图片组件</li>
        </ul>
      ),
    },
    {
      title: '内容管理后台',
      techStack: [
        'react16',
        'ant-design-pro',
        'ant-design',
        'dva',
        'less',
        'es6',
      ],
      start: '2019.04',
      end: '2019.12',
      description: `
      本项目属于公司内部使用的saas管理后台，支持租户开通、动态菜单的一个管理系统。
      主要功能有：系统设置、收款设置、提款设置、开户管理、公告管理、消息管理、充值种类、反馈管理、角色管理等等，其他功能涉及商业保密。
      `,
      responsibilities: () => (
        <ul>
          <li>负责主要功能的前端开发，包括页面编写、公共组件抽离、接口联调</li>
          <li>使用 Select 封装了自定义表单控件，包括用户选择器、部门选择器等组件</li>
          <li>使用 Tag 封装了关键字表单控件</li>
          <li>封装 ImageUpload 自定义七牛云上传表单控件</li>
          <li>项目日常维护、版本迭代</li>
        </ul>
      ),
    },
    {
      title: '国药齐富微信商城',
      techStack: [
        'vue2',
        'vue-router',
        'vuex',
        'vant2',
        'less',
        'es6',
      ],
      start: '2018.12',
      end: '2019.12',
      description: `
      本项目是一个线上药店商城，业务包含中西药品、滋补保健、母婴孕产、生活个护、医疗器械、成人计生等多个板块，为消费者提供全面、安全、普惠的医药、医疗、健康服务。
      为药房信息化赋能，让用户享受到最为专业的医疗服务。主要功能有：医生预约模块、医药文化模块、商品模块、分类列表模块、购物车模块、
      下单支付模块、个人中心模块、我的订单模块、积分模块、卡券管理模块、收货地址模块等等，其他功能涉及商业保密。
      `,
      responsibilities: () => (
        <ul>
          <li>独立负责主要功能的前端开发，包括页面编写、公共组件抽离、接口联调</li>
          <li>移动端适配，使用 postcss-px-to-viewport 进行单位转换</li>
          <li>使用 axios 拦截器模式，对响应进行统一错误处理</li>
          <li>封装多个组件，包括送货地址选择器、高德地图地址选择器、预约时间选择器、优惠券选择器、商品卡片组件、分割线组件</li>
          <li>项目日常维护、版本迭代</li>
        </ul>
      ),
    },
    {
      title: '南海燃气-燃气管家',
      techStack: [
        'vue2',
        'vue-router',
        'vuex',
        'vux',
        'axios',
        'less',
        'es6',
      ],
      start: '2017.08',
      end: '2019.03',
      description: `
      燃气管家公众号主要是为了帮助用户在线燃气安检、燃气安装、燃气维修预约服务。
      公司后台接到预约后，操作员会在管理后台上分配给施工师傅。施工师傅收到消息后赶往施工现场，将施工图片及进程通过APP反馈给公司客服以此形成业务闭环。
      主要功能有：我要缴费、我要报数、我要安装、我要改管、我要点火、我要维修、我要安检、气费查询、个人中心、发票管理、用户绑定等等，其他功能涉及商业保密。
      `,
      responsibilities: () => (
        <ul>
          <li>负责项目的前站以及配套的管理后台的主要功能开发，包括页面编写、接口联调</li>
          <li>全局 filters 注入，方便调用</li>
          <li>使用 require.context 自动引入 vuex module</li>
          <li>项目日常维护、版本迭代</li>
        </ul>
      ),
    },
    {
      title: '佛山智慧口岸',
      techStack: [
        'vue2',
        'vue-router',
        'vuex',
        'element-ui',
        'axios',
        'less',
        'es6',
      ],
      start: '2018.01',
      end: '2018.07',
      description: `
      该项目是“单一窗口”功能的细化和延伸，项目的建设内容围绕“单一窗口”并结合佛山本地口岸信息化的建设情况开展。
      主要功能有：首页仪表板模块、查验管理模块、放行查询模块、查验流程模块、查验费用管理目录、集装箱动态查询模块、散货动态查询模块、
      机构管理模块、角色管理模块、长期堆存集装箱预警模块、分区堆放预警模块、集装箱号异常预警模块、
      集装箱口岸漂移预警模块、集装箱异常离场预警模块、超时未申报预警模块、超时未提离预警模块。
      `,
      responsibilities: () => (
        <ul>
          <li>负责项目的主要功能开发，包括页面编写、接口联调</li>
          <li>使用 router.beforeEach 结合 router.addRoutes 两个api，实现动态菜单</li>
          <li>封装 v-permission，实现按钮权限</li>
          <li>全局 filters 注入，方便调用</li>
          <li>使用 require.context 自动引入 vuex module</li>
          <li>项目日常维护、版本迭代</li>
        </ul>
      ),
    },
    {
      title: '跨境电子商务公共平台',
      techStack: [
        'ace-admin',
        'jsp',
        'jquery',
        'less/scss',
        'ajax',
      ],
      start: '2015.11',
      end: '2017.01',
      description: `
      该项目为管理后台项目，主要为跨境电子商务企业及国内消费者提供便捷的通关、退税、结汇、身份认证、查询等服务。
      主要功能有：商品备案查询模块、企业备案查询模块、商家诚信查询模块、问题管理模块、站内信模块、订单管理模块、税率查询模块、
      商品行邮税查询模块、个人设置模块、电子订单查询模块、电子运单查询模块、电子支付单查询模块。
      `,
      responsibilities: () => (
        <ul>
          <li>负责项目的主要功能开发，包括页面编写、接口联调</li>
          <li>运用单例设计模式开发多页应用</li>
          <li>项目日常维护、版本迭代</li>
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
        'vite4',
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
