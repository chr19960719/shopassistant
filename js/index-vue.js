const { createApp, ref, onMounted, computed, onUnmounted, nextTick } = Vue;

const app = createApp({
    setup() {
        const currentMenu = ref('post');
        const lang = ref('CN');
        const changeMenu = (menu, type) => {
            currentMenu.value = menu;
            const url = new URL(window.location.href);
            url.searchParams.set('menu', menu);
            if (menu === 'post') {
                changeType(type);
            } else {
                url.searchParams.delete('type');
                updateUrlParameter([{ key: 'type', value: '' }, { key: 'menu', value: menu }])
            }
        };

        const avtiveType = ref(1);
        const changeType = type => {
            avtiveType.value = type;
            updateUrlParameter([{ key: 'type', value: type }, { key: 'menu', value: 'post' }]);
            nextTick(() => {
                initSwiper();
            });
        };

        const updateUrlParameter = (keyValues = []) => {
            const urlParams = new URLSearchParams(window.location.search);
            keyValues.forEach(kv => {
                // 如果value为空，则删除该参数
                if (kv.value === '') {
                    urlParams.delete(kv.key);
                } else {
                    urlParams.set(kv.key, kv.value);
                }
            });
            const newUrl = window.location.origin + window.location.pathname + '?' + urlParams.toString();
            window.history.pushState({}, '', newUrl);
        };

        const init = () => {
            // 获取链接参数
            const url = new URL(window.location.href);
            const type = url.searchParams.get('type');
            currentMenu.value = url.searchParams.get('menu') || 'home';
            avtiveType.value = Number(type) || 1;
            initSwiper();
        };

        let mySwipers = null;
        const initSwiper = () => {
            if (mySwipers !== null) {
                // 多个swiper时，需要遍历所有swiper，销毁
                mySwipers.forEach(swiper => {
                    swiper.destroy();
                });
            }
            mySwipers = new Swiper(".mySwiper", {
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
            });
        };
        const changeLanguage = e => {
            console.log('changeLanguage', e.target.value);
            lang.value = e.target.value;
        };

        const productList = computed(() => {
            if (lang.value === 'EN') {
                return enAllList[avtiveType.value];
            }
            return allList[avtiveType.value];
        });

        const tabRef = ref(null);
        const tabRefWidth = ref(0);
        const tabActiveBarTranslateX = computed(() => {
            nextTick(() => {
                tabRefWidth.value = tabRef.value?.offsetWidth / 5;
            });
            return (avtiveType.value - 1) * tabRefWidth.value;
        });

        onMounted(() => {
            // 获取tabRef的宽度
            tabRefWidth.value = tabRef.value.offsetWidth / 5;
            lang.value = localStorage.getItem('lang') || 'CN';
            window.addEventListener('popstate', init);
            init();
        });

        onUnmounted(() => {
            window.removeEventListener('popstate', init);
        });

        return {
            currentMenu,
            changeMenu,
            avtiveType,
            changeType,
            tabActiveBarTranslateX,
            tabRef,
            productList,
            tabRefWidth,
            changeLanguage
        };
    }
});

app.use(ElementPlus);
app.mount('#Wrapper');
