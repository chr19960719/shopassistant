const { createApp, ref, onMounted, computed } = Vue;

createApp({
  setup() {
    const avtiveType = ref(1);
    const changeType = (type) => {
      avtiveType.value = type;
    };
    const init = () => {
      // 获取链接参数
      const url = new URL(window.location.href);
      const type = url.searchParams.get("type");
      avtiveType.value = Number(type) || 1;
    };

    const allList = {
      1: [
        {
          img: "images/product/household/1.jpg",
          title: "按压式分装瓶",
          desc: "100ml  PETG塑料",
        },
        {
          img: "images/product/household/2.jpg",
          title: "壁挂式拖把扫把架",
          desc: "38 x 3cm 304不锈钢",
        },
        {
          img: "images/product/household/3.jpg",
          title: "彩色密封夹",
          desc: "小夹 4 x 4cm中夹8.1 x 1.3cm 大夹10.3 x 1.3cm 塑料",
        },
        {
          img: "images/product/household/4.jpg",
          title: "彩色皮包式28格随身药盒",
          desc: "20 x 12 x 2.5cm 塑料",
        },
        {
          img: "images/product/household/5.jpg",
          title: "餐桌餐垫",
          desc: "45 × 30 cm PVC",
        },
        {
          img: "images/product/household/6.jpg",
          title: "创意DIY牛皮纸相框",
          desc: "15.5 x 11.5cm  牛皮纸",
        },
        {
          img: "images/product/household/7.jpg",
          title: "独角兽纸杯蛋糕包装纸",
          desc: "24个  纸板",
        },
        {
          img: "images/product/household/8.jpg",
          title: "多功能皮革桌面收纳盒",
          desc: "25 x 19 x 5cm  PU皮革",
        },
        {
          img: "images/product/household/9.jpg",
          title: "防滑浴缸淋浴安全把手",
          desc: "25cm 不锈钢",
        },
        {
          img: "images/product/household/10.jpg",
          title: "烘培工具套装",
          desc: "蛋糕转盘尺寸：28cm 塑料+不锈钢",
        },
        {
          img: "images/product/household/11.jpg",
          title: "化妆品收纳盒",
          desc: "28x 17.5 x 12.5 cm PP塑料",
        },
        {
          img: "images/product/household/12.jpg",
          title: "可折叠壁挂式垃圾桶",
          desc: "容量：9L  展开尺寸：25.3 x 17.5 x 28.6cm  折叠尺寸：25.3 x 8 x 28.6 cm   ABS",
        },
        {
          img: "images/product/household/13.jpg",
          title: "可折叠阅读架",
          desc: "30 x 24 cm 木质",
        },
        {
          img: "images/product/household/14.jpg",
          title: "亮片桌布",
          desc: "30 x 280cm 亮片 + 网眼织物",
        },
        {
          img: "images/product/household/15.jpg",
          title: "旅行分装瓶套装",
          desc: "洗漱包尺寸：20.5 x 11.5 x 4 cm PET塑料",
        },
        {
          img: "images/product/household/16.jpg",
          title: "木质手摇音乐盒",
          desc: "6.5x 5x3.6 木质",
        },
        {
          img: "images/product/household/17.jpg",
          title: "牛仔工作围裙",
          desc: "80 x 69 cm 耐磨牛仔",
        },
        {
          img: "images/product/household/18.jpg",
          title: "沙发扶手收纳挂袋",
          desc: "88 x 33 cm 涤纶布+PP泡沫",
        },
        {
          img: "images/product/household/19.jpg",
          title: "食品级硅胶吸管",
          desc: "长 25cm 内径 0.5 cm BPA",
        },
        {
          img: "images/product/household/20.jpg",
          title: "双头不锈钢弹簧长155cm鱼缸刷",
          desc: "弹簧长155cm",
        },
        {
          img: "images/product/household/21.jpg",
          title: "通用淋浴花洒喷头",
          desc: "可调节五种模式 塑胶+镀铬饰面",
        },
        {
          img: "images/product/household/22.jpg",
          title: "长柄柔软搓澡刷",
          desc: "35x7 cm PET尼龙毛丝+PP手柄",
        }
      ],
      2: [
        {
          img: "images/product/outdoor/1.jpg",
          title: "10mm 登山杖防滑垫",
          desc: "3.8 x 2.2cm 橡胶",
        },
        {
          img: "images/product/outdoor/2.jpg",
          title: "便携式高尔夫球袋",
          desc: "9.5 x 9.5cm氯丁橡胶和天鹅绒",
        },
        {
          img: "images/product/outdoor/3.jpg",
          title: "冰爪户外登山防滑鞋套",
          desc: "通用尺寸 橡胶+不锈钢",
        },
        {
          img: "images/product/outdoor/4.jpg",
          title: "弹性运动头带",
          desc: "宽 1cm 长40cm 软布+硅胶",
        },
        {
          img: "images/product/outdoor/5.jpg",
          title: "多色帐篷夹",
          desc: "8 x 2.3 x 2  塑料",
        },
        {
          img: "images/product/outdoor/6.jpg",
          title: "户外便携式手持钢锯 ",
          desc: "材质：高碳钢 手柄：尼龙 全长：105cm 锯长：65cm)",
        },
        {
          img: "images/product/outdoor/7.jpg",
          title: "户外带耳机孔运动手机臂包",
          desc: "9 x 10 x 3.5cm 尼龙",
        },
        {
          img: "images/product/outdoor/8.jpg",
          title: "户外登山易拉扣+卡套",
          desc: "可拉伸长度： 80cm ABS+不锈钢",
        },
        {
          img: "images/product/outdoor/9.jpg",
          title: "户外多功能头带头巾",
          desc: "25 x 50cm 100% 超细纤维聚酯纤维",
        },
        {
          img: "images/product/outdoor/10.jpg",
          title: "户外防水袋",
          desc: "1.5  2.5  3  3.5  5  8 L  涤纶塔夫材质",
        },
        {
          img: "images/product/outdoor/11.jpg",
          title: "户外可折叠便携坐垫",
          desc: "38.1 x 38 x 0.03cm  XPE材料",
        },
        {
          img: "images/product/outdoor/12.jpg",
          title: "户外遮阳帽",
          desc: "帽围：56-58cm 涤纶+棉",
        },
        {
          img: "images/product/outdoor/13.jpg",
          title: "可触屏防晒手套",
          desc: "长度：21cm 宽度：9cm 手腕宽度：15cm 冰丝",
        },
        {
          img: "images/product/outdoor/14.jpg",
          title: "野营餐具套装",
          desc: "13件套 不锈钢和塑料",
        },
        {
          img: "images/product/outdoor/15.jpg",
          title: "运动防水腰包",
          desc: "18.5 x 9 cm尼龙涤纶面料",
        },
        {
          img: "images/product/outdoor/16.jpg",
          title: "自行车手机支架",
          desc: "硅胶",
        },
      ],
      3: [
        {
          img: "images/product/kids/1.jpg",
          title: "彩虹字母钓鱼对数板",
          desc: "41 x 15 x 5cm 木质",
        },
        {
          img: "images/product/kids/2.jpg",
          title: "电动建筑工程车轨道玩具套装",
          desc: "产品尺寸：36 x 25 x 7 cm 塑料",
        },
        {
          img: "images/product/kids/3.jpg",
          title: "俄罗斯方块拼图",
          desc: "包装尺寸：25.5 x 19 x 5 cm 木质 塑料",
        },
        {
          img: "images/product/kids/4.jpg",
          title: "儿童仿真水果蔬菜切割玩具",
          desc: "包装尺寸：23.5 x 18cm 木质+ 磁铁",
        },
        {
          img: "images/product/kids/5.jpg",
          title: "儿童绘画套装",
          desc: "包装尺寸：28.5 x 21.3 x 6.9 cm 海绵、泡沫和EVA",
        },
        {
          img: "images/product/kids/6.jpg",
          title: "儿童拼图",
          desc: "产品尺寸：10.8 x 15.8 x 0.03 cm 木质 ",
        },
        {
          img: "images/product/kids/7.jpg",
          title: "过家家独角兽茶具套装",
          desc: "产品尺寸：41 x 31 x 9  塑料 锡",
        },
        {
          img: "images/product/kids/8.jpg",
          title: "几何图形拼图积木",
          desc: "产品尺寸： 25 x 21 x 4 cm 6 种形状积木 155片 木质",
        },
        {
          img: "images/product/kids/9.jpg",
          title: "蒙特梭利四色游戏逻辑思维益智玩具",
          desc: "24 x 19.7 x 4cm 木质",
        },
        {
          img: "images/product/kids/10.jpg",
          title: "蒙特梭利玩具儿童扭拧螺丝修理玩具",
          desc: "产品尺寸：19 x 3.2 x 9cm  木质 金属",
        },
        {
          img: "images/product/kids/11.jpg",
          title: "蒙特梭利早教几何形状套柱配对益智玩具",
          desc: "产品尺寸：29 x 6.2 x 5.5 cm 木质",
        },
        {
          img: "images/product/kids/12.jpg",
          title: "木制打击乐器套装",
          desc: "产品尺寸26 x 21 x 11cm 木质",
        },
        {
          img: "images/product/kids/13.jpg",
          title: "女孩时装设计师DIY套装",
          desc: "",
        },
        {
          img: "images/product/kids/14.jpg",
          title: "软陶串珠套装",
          desc: "包装尺寸 19 x 13.3 x 3.7 cm  24格软陶款式",
        },
        {
          img: "images/product/kids/15.jpg",
          title: "手偶安抚玩具",
          desc: "大号：28.3cm 小号：7.2cm 长毛绒",
        },
        {
          img: "images/product/kids/16.jpg",
          title: "音乐婴儿安抚毛绒玩具",
          desc: "24.5 x 18.5cm  短绒布料+ABS塑料",
        },
        {
          img: "images/product/kids/17.jpg",
          title: "婴儿摇铃手表带袜子",
          desc: "手表带尺寸：16.5 x 3.5  cm 袜子尺寸：18.5 x 6cm 长毛绒+棉花",
        },
      ],
      4: [
        {
          img: "images/product/pet/1.jpg",
          title: "Airtag 反光可调节狗狗项圈",
          desc: "尼龙+橡胶 直径38-45cm",
        },
        {
          img: "images/product/pet/2.jpg",
          title: "宠物车载安全带",
          desc: "带长：50-89cm （可调节） 尼龙",
        },
        {
          img: "images/product/pet/3.jpg",
          title: "宠物啃咬磨牙解闷毛绒玩具",
          desc: "27 x 8 cm 棉",
        },
        {
          img: "images/product/pet/4.jpg",
          title: "宠物猫狗嗅闻垫",
          desc: "直径：38cm  毛毡",
        },
        {
          img: "images/product/pet/5.jpg",
          title: "宠物美容修毛套装",
          desc: "不锈钢",
        },
        {
          img: "images/product/pet/6.jpg",
          title: "宠物外出便携式斜挎包",
          desc: "肩带宽度：12cm 袋子深度：30cm 袋子宽度：60cm 棉+涤纶",
        },
        {
          img: "images/product/pet/7.jpg",
          title: "宠物洗澡吸水速干毛巾",
          desc: "64 x 23 cm 雪尼尔",
        },
        {
          img: "images/product/pet/8.jpg",
          title: "宠物训练铃",
          desc: "直径7.2cm 高5cm 金属",
        },
        {
          img: "images/product/pet/9.jpg",
          title: "宠物训练响片",
          desc: "6 x 4cm ABS塑料",
        },
        {
          img: "images/product/pet/10.jpg",
          title: "可拆卸仓鼠透明厕所盆浴室",
          desc: "14×9×10cm 塑料",
        },
        {
          img: "images/product/pet/11.jpg",
          title: "可调节宠物条纹领带",
          desc: "领带周长：32 cm 可调节尺寸：24-30  cm 涤纶棉",
        },
        {
          img: "images/product/pet/12.jpg",
          title: "可调节狗狗防滑袜",
          desc: "16 x 6.5 cm 棉",
        },
        {
          img: "images/product/pet/13.jpg",
          title: "可折叠兔子猫豚鼠隧道玩具",
          desc: "30 x 28 x 3.5 cm  聚酯纤维",
        },
        {
          img: "images/product/pet/14.jpg",
          title: "铝合金猫砂铲",
          desc: "34 x 14 x 4.5  cm 铝合金+橡胶",
        },
        {
          img: "images/product/pet/15.jpg",
          title: "毛绒宠物鸟吊床",
          desc: "24 x 14 x 17 cm",
        },
        {
          img: "images/product/pet/16.jpg",
          title: "三合一猫狗喂食碗",
          desc: "38 x 14 x 19 cm  ABS塑料",
        },
        {
          img: "images/product/pet/17.jpg",
          title: "中大型犬牵引绳",
          desc: "1.8m  尼龙",
        },
      ],
    };
    const productList = computed(() => {
      console.log(allList[avtiveType.value]);
      return allList[avtiveType.value];
    });

    const tabRef = ref(null);
    const tabRefWidth = ref(0);
    const tabActiveBarTranslateX = computed(() => {
      return (avtiveType.value - 1) * tabRefWidth.value;
    });
    onMounted(() => {
      // 获取tabRef的宽度
      tabRefWidth.value = tabRef.value.offsetWidth / 4;
      init();
    })

    return {
      avtiveType,
      changeType,
      tabActiveBarTranslateX,
      tabRef,
      productList,
      tabRefWidth
    };
  },
}).mount("#Wrapper");
