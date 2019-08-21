import React, { Component } from "react"
import "./index.less"

const mvBaseData = {
    valBid: "b_dianping_nova_guide_page_POI_mv",
    valLab: { poi_id: "", feed_id: 23, title: "", custom: { bussi_id: "946" } },
    options: {
        cid: "c_dianping_nova_guide_page"
    }
}

const mcBaseData = {
    valBid: "b_dianping_nova_guide_page_POI_mc",
    valLab: { poi_id: "", feed_id: 23, title: "", custom: { bussi_id: "946" } },
    options: {
        cid: "c_dianping_nova_guide_page",
        delay: 0 // 本次埋点上报的延迟时间,单位是秒
    }
}

export default class ShopCard extends Component {

    render() {
        const { title, price, subtitle, picture, moduleId } = this.props.data
        mcBaseData.valLab.poi_id = mvBaseData.valLab.poi_id = moduleId
        mcBaseData.valLab.title = mvBaseData.valLab.title = title
        const lxMV = JSON.stringify(mvBaseData)
        const lxMC = JSON.stringify(mcBaseData)
        return (
            <div data-lxmc={lxMC} data-lxmv={lxMV} className="cardbox">
                <div className="content-warp">
                    <div className="imgbox">
                        <img className="picture" src={picture} />
                    </div>
                    <div className="content-info">
                        <div className="title">{title}</div>
                        <div className="price">{price}</div>
                        <div className="subtitle">{subtitle}</div>
                    </div>
                </div>
            </div>
        )
    }
}


