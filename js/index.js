const langObj = {
    CN: {
        home_index_first: "跨境无界",
        home_index_second: "商机无限",
        home_index_third: "世界触手可及",
        home_index_fourth: "我们拥有丰富的产品线、强大的供应链能力和完善的物流体系，致力于打造高效、便捷的全球电子商务体验，助力您开拓无限商机。"
    },
    EN: {
        home_index_first: "Cross-border unbounded",
        home_index_second: "Opportunity unlimited",
        home_index_third: "World reachable",
        home_index_fourth: "We have rich product lines, strong supply chain capabilities, and comprehensive logistics systems to help you open up unlimited opportunities."
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
