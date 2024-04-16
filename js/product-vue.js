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
        }
      ]
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
