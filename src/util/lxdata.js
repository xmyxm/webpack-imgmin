// click 打点数据（必传）
let lxClickData = {
    valBid: "b_dianping_nova_guide_page_like_tap_mc",
    valLab: { poi_id: "584750", feed_id: 23 },
    options: {
        cid: "c_dianping_nova_guide_page",
        isLeave: false, // isLeave 表示点击事件埋点选项是否页面离开点击事件，如果为 true 则会在MC事件后追加页面离开事件
        withPageInfo: false, // withPageInfo 表示点击事件埋点是否携带上一次发送PV的 valLab 信息
        callback: function () { }, // 事件上报完成后的回调
        callbackTimeout: function () { } // 回调超时的毫秒数，默认为2000
    }
}
// click打点支持以下配置数据,优先级最高（非必传）
let clickConfig = {
    eventType: 1,
    reportType: 1,
    stopPropagation: false
}

// dom节点绑定数据
export let LXClickData = JSON.stringify({ data: lxClickData, clickConfig })


// view 打点数据必传
let lxViewData = {
    valBid: "b_dianping_nova_guide_page_user_mv",
    valLab: { poi_id: "584750", feed_id: 23, custom: { bussi_id: "946" } },
    options: {
        cid: "c_dianping_nova_guide_page",
        delay: 0, // 本次埋点上报的延迟时间,单位是秒
        callback: function () { }, // 事件上报完成后的回调
        callbackTimeout: function () { } // 回调超时的毫秒数，默认为2000
    }
}

// view打点支持以下配置数据,优先级最高（非必传）
let viewConfig = {
    reportCount: 1
}

// dom节点绑定数据
export let LXViewData = JSON.stringify({ data: lxViewData, viewConfig })


export let cardList = [
    {
        moduleId: "98698727",
        title: "O’mills Bakery",
        subtitle: "音乐学院 西餐",
        price: "¥135/人",
        picture: "https://qcloud.dpfile.com/pc/MxBB9VGAfAxjhWU9dP1HMRuiGTWIUe6LjGt2Aix7_yQ96l5LP3mYdGq0GKzemWoXIw86yJAyL262V9SVViT-Ewxxxek7cKy7_R0W-KdxWUk.jpg"
    },
    {
        moduleId: "97715078",
        title: "RAC BAR",
        subtitle: "复兴西路/丁香花园 法国菜",
        price: "¥124/人",
        picture: "https://qcloud.dpfile.com/pc/Ynva-XPryT8e-_DBI577O8JAfqxYLOQGXQwV9xM_MpbTtYaXFmiKBqJc_bNvyQABIw86yJAyL262V9SVViT-Ewxxxek7cKy7_R0W-KdxWUk.jpg"
    },
    {
        moduleId: "76998732",
        title: "BIG BAGEL",
        subtitle: "音乐学院 面包烘焙",
        price: "¥47/人",
        picture: "https://img.meituan.net/msmerchant/cca079572e2250d04c4fb9b097f7b43629169.jpg%40130w_130h_1e_1c_1l_90q%7Cwatermark%3D0"
    },
    {
        moduleId: "102198547",
        title: "LOKAL",
        subtitle: "音乐学院 面包烘焙",
        price: "¥113/人",
        picture: "https://img.meituan.net/msmerchant/46f2b1b3049c72495540ee4a6ac91ac7441906.jpg%40130w_130h_1e_1c_1l_90q%7Cwatermark%3D0"
    },
    {
        moduleId: "93167824",
        title: "uncle no name espresso",
        subtitle: "复兴西路/丁香花园 西餐",
        price: "¥75/人",
        picture: "https://qcloud.dpfile.com/pc/3tiZvJGvNzNlcTGSCHiEZZJi42hh4TM_cS8_VC3Aszw6LhM5mo9xh_TBdVFsdo7-Iw86yJAyL262V9SVViT-Ewxxxek7cKy7_R0W-KdxWUk.jpg"
    },
    {
        moduleId: "96005854",
        title: "Hotcake舒馥芮松饼",
        subtitle: "衡山路 甜品",
        price: "¥42/人",
        picture: "https://img.meituan.net/msmerchant/c4b54237e7eb2164f628c59b002658722879614.jpg%40130w_130h_1e_1c_1l_90q%7Cwatermark%3D0"
    }
]
