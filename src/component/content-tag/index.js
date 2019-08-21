

/* eslint-disable react/prefer-stateless-function */

import React, { Component } from "react";
import "./index.less";

const mvBaseData = {
    valBid: "b_dianping_nova_citycolumn_operatetag_mv",
    valLab: {index: 0, custom: { model_title: "", tag_id: ""}}
}

const mcBaseData = {
    valBid: "b_dianping_nova_citycolumn_operatetag_mc",
    valLab: {index: 0, custom: { model_title: "", tag_id: ""}}
}

export default class ContentTag extends Component {
    render() {
        const { data, index, tid, clickHandle } = this.props;
        mvBaseData.valLab.index = mcBaseData.valLab.index = index
        mvBaseData.valLab.custom.model_title = mcBaseData.valLab.custom.model_title = data.name
        mvBaseData.valLab.custom.tag_id = mcBaseData.valLab.custom.tag_id = data.id
        const lxMV = JSON.stringify(mvBaseData)
        const lxMC = JSON.stringify(mcBaseData)

        return (
            <li data-lxmc={lxMC} data-lxmv={lxMV} onClick={clickHandle.bind(this, data.id)} className={data.id == tid ? "item select" : "item"}>
                <div className="maxtitle">{data.name}</div>
            </li>
        );
    }
}
