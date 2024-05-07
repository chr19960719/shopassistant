const { createApp, ref, onMounted, computed, onUnmounted, nextTick } = Vue;

createApp({
    setup() {
        const currentMenu = ref('home');
        const lang = ref('CN');
        const changeMenu = (menu, type) => {
            currentMenu.value = menu;
            const url = new URL(window.location.href);
            url.searchParams.set('menu', menu);
            if (menu === 'post') {
                changeType(type);
                // 地址入栈
                url.searchParams.set('type', type);
            } else {
                url.searchParams.delete('type');
            }
            window.history.pushState(null, '', url.href);
        };

        const avtiveType = ref(1);
        const changeType = type => {
            avtiveType.value = type;
        };

        const init = () => {
            // 获取链接参数
            const url = new URL(window.location.href);
            const type = url.searchParams.get('type');
            currentMenu.value = url.searchParams.get('menu') || 'home';
            avtiveType.value = Number(type) || 1;
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
                tabRefWidth.value = tabRef.value?.offsetWidth / 4;
            });
            return (avtiveType.value - 1) * tabRefWidth.value;
        });

        onMounted(() => {
            // 获取tabRef的宽度
            tabRefWidth.value = tabRef.value.offsetWidth / 4;
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
}).mount('#Wrapper');
