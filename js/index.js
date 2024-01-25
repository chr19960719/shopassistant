const langObj = {
    CN: {
        kua: "跨境无界",
        wuxian: "商机无限",
    },
    EN: {
        kua: "Cross-border business",
        wuxian: "Business unlimited",
    },
};

// lang-switcher变化
$(document).on("change", "#lang-switcher", function () {
    const lang = $(this).val();
    // 存入到storage
    localStorage.setItem("lang", lang);
    const all = document.querySelectorAll("[lang]");
    all.forEach((item) => {
        const key = item.getAttribute("lang");
        item.innerText = langObj[lang][key];
    });
});
function getip(json) {
    console.log("My IP address is: ", json);
    let val = localStorage.getItem("lang");
    if (val) {
        changLang(val);
        return;
    }
    // 判断是否是国内
    let lang = 'CN';
    if (json.country_code === "CN") {
        localStorage.setItem("lang", "CN");
    } else {
        lang = 'EN';
        localStorage.setItem("lang", "EN");
    }
    changLang(lang);
}
function changLang(lang) {
    $("#lang-switcher").val(lang);
    const all = document.querySelectorAll('[lang]');
    all.forEach((item) => {
        const key = item.getAttribute("lang");
        item.innerText = langObj[lang][key];
    });
}
