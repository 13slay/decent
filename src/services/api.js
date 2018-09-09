import { stringify } from 'qs';
import request from '@/utils/request';
/** hackhone */

export async function queryCurrent() {
  return {
    name: '李狗蛋',
    account: web3.eth.coinbase,
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
  };
}

//export async function queryProject() {
//  return [
//
//  ]
//}

export async function queryProject() {
  return [
    {
      id: 'symc11',
      title: '幼儿园',
      cover: 'http://7xsuii.com1.z0.glb.clouddn.com/cover01.jpg',
      percent: 69,
      status: 'active',
      createdAt: '2018-09-28 12:20',
      subDescription:
        '万向创新城第一实验幼儿园，是高科技新城的重点幼儿园，建筑师试图通过设计的策略突破周边环境和建筑规范的双重限制，为孩子们营造一个城市中的理想空间。',
      crowdAddress: '0xd29D780122f61958C227286e288AA0d17f88323A',
      // 资产占比
      asset: [
        { type: 'government', name: '政府', ratio: 0.4 },
        { type: 'private', name: '企业', ratio: 0.4 },
        { type: 'community', name: '社会', ratio: 0.2 },
      ],
      process: {
        percent: 0.76,
        joined: 400,
      },
      target: 300000,
      // 募集目标单位
      unit: 'JC',
      // token 总数
      total: 10000,
      // 个人限购
      limit: 100,
      detail: `
  ## 项目介绍

  幼儿园建筑是住宅开发过程中必要的配套设施。在住宅货值最大化原则的驱动下，大部分幼儿园无法脱离被住宅挤压和被规范限制的双重困境，最终以妥协和消极的空间状态呈现。在上海一个典型别墅区环绕的不规则用地内，曼景建筑试图通过设计的策略突破周边环境和建筑规范的双重限制，为孩子们营造一个城市中的理想空间。幼儿园俯瞰形似“∞”，被称为∞幼儿园。

  Kindergarten is a necessary supporting facility in the process of housing development. Driven by the principle of maximizing the value of housing, most of the kindergartens can’t be separated from the double predicament of being squeezed by housing and restricted by the building norms; they’re finally presented in the compromising and negative spatial state. In an irregular land encircled by a typical villa area in Shanghai, Office Mass tries to break through the dual restriction of surrounding environment and norms through design strategies to create an ideal space in the city for children. The kindergarten looks like “∞” from aerial view, so it’s called ∞ kindergarten.

  ![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd01.jpeg)

  幼儿园的不规则地形、建筑师意将其作为一个1:1的积木的初衷和将建筑从三层降低到主体二层局部三层以减少建筑对人的压迫感的想法，导致用常规的空间布局方式都将是个不可能完成的任务：建筑平面增大，绿地率和活动场地面积难以达到要求；建筑周边场地形状不规则，不利于分班活动场地的划分。建筑师给出的答案是用一个漂浮的班级单元留出底层架空的活动场地；二层环廊形成退台，作为空中花园，增加绿地面积；在余量很小的场地中用圆形母题，铺满场地，形成分班活动场地、器械活动场地、沙水池、跑道等。相切的园环的边界自然形成了入园的环形洗手池、圆环景观路径、和活动场地的边界。简单、统一的形式处理，带来了功能之间最少差异，和可以互相转换的可能性。形式的统一性弱化了形式在设计中的地位，从而保证它跟不规则的地形之间会有更兼容性的衔接。

  The irregular site of the kindergarten, the architect’s original intention of making it into a 1:1 building block and the idea of reducing the building from three floors to two floors for main structure and three floors for part of it so as to reduce the sense of pressure all cause that it will be a mission impossible through conventional spatial layout: the increase of building plan makes it hard to meet the requirements on greening area and activity space area; the irregular shape of the surrounding site is not conducive to the division of activity space by classes. The answer given by the architect is to use a floating classroom unit to make space for outdoor activity; the second-floor circular corridor forms stepped terrace as the hanging garden to increase the green area; a circular motif is used in the site with small margin to pave and form the activity space by classes, apparatus activity space, sand pool and runway, etc. The boundary of tangent ring naturally forms the circular washing basin into the garden, circular landscape path and the boundary of activity space. Simple and unified form operation brings about the least difference between functions and the possibility of mutual transformation. The unity of form weakens the position of form in design, so as to ensure that it has more compatible linkup with irregular terrain.

  ## 效果图展示

  ![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd00.jpeg)

  ![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd02.jpeg)

  ![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd03.jpeg)

  ![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd04.jpeg)

  ## 设计图纸

  ![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd0a.jpeg)

![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd0b.png)

![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd0c.png)

  ## 相关资质

![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd05.png)

![cover](http://7xsuii.com1.z0.glb.clouddn.com/kd06.jpeg)
      `,
    },
    {
      id: 'symc12',
      title: '购物广场',
      cover: 'http://7xsuii.com1.z0.glb.clouddn.com/cover02.jpg',
      percent: 100,
      status: 'active',
      createdAt: '2018-09-28 12:30',
      subDescription:
        '万向中心购物广场，内容包括大型商业中心、城市步行街、五星级酒店、写字楼、公寓等，集购物、餐饮、文化、娱乐等多种功能于一体，形成独立的大型商圈。',
      asset: [],
      process: {},
      target: 300000,
    },
    {
      id: 'symc13',
      title: '大剧院',
      cover: 'http://7xsuii.com1.z0.glb.clouddn.com/cover04.jpg',
      percent: 20,
      status: 'active',
      createdAt: '2018-09-28 12:30',
      subDescription:
        '万向城大剧院是城市新中轴线上的标志性建筑之一，是一座综合性表演艺术中心。建筑面积7.3万平方米，建筑总高度43.1米，三个排练厅（歌剧排练厅、芭蕾排练厅以及交响乐排练厅），满足各类演出的需求。',
      asset: [],
      process: {},
      target: 300000,
    },
    {
      id: 'symc14',
      title: '购物公园',
      cover: 'http://7xsuii.com1.z0.glb.clouddn.com/cover05.jpg',
      percent: 80,
      status: 'active',
      createdAt: '2018-09-28 12:30',
      subDescription:
        '创新城森林购物公园，总建筑面积20万平方米。分两期开发，一、二期全面开业后将汇集近300家国际国内知名品牌商户，集购物、餐饮、娱乐休闲、儿童、运动、益智六大主题于一体',
      asset: [],
      process: {},
      target: 300000,
    },
    {
      id: 'symc15',
      title: '游泳馆',
      cover: 'http://7xsuii.com1.z0.glb.clouddn.com/cover03.jpg',
      percent: 38,
      creator: '火星第二基地',
      subDescription:
        '万向创新城游泳馆设计成为具有国际先进水平的、集游泳、运动、健身、休闲于一体的中心，承担游泳、跳水、花样游泳、水球等比赛，可容纳观众坐席1700座，其中永久观众坐席为600座',
      // 资产占比
      asset: [
        { type: 'government', name: '政府', ratio: 0.4 },
        { type: 'private', name: '企业', ratio: 0.4 },
        { type: 'community', name: '社会', ratio: 0.2 },
      ],
      process: {
        percent: 0.76,
        joined: 400,
      },
      // 募集目标
      target: 100000,
    },
  ];
}
