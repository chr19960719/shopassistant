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
          title: "产品1",
          desc: "产品描述1",
        },
        {
          img: "images/product/household/2.jpg",
          title: "产品2",
          desc: "产品描述2",
        },
        {
          img: "images/product/household/3.jpg",
          title: "产品3",
          desc: "产品描述3",
        },
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
