/* eslint-disable react/prefer-stateless-function */

import React, { Component } from "react";
import "./index.less";

const mvBaseData = {
    valBid: "b_dianping_nova_citycolumn_reculike_mv",
    valLab: { title: "", custom: { tag_id: "", content_id: "", show_style: "singleList" } }
}

const mcBaseData = {
    valBid: "b_dianping_nova_citycolumn_reculike_mc",
    valLab: {
        title: "", custom: { tag_id: "", content_id: "", show_style: "singleList" }
    }
}

export default class ContentCard extends Component {

    render() {
        const { data, contentHader } = this.props;
        if (!data) return null;
        if (!data.backColor || data.backColor.length != 7) {
            data.backColor = "#e1e1e1";
        }
        let shopStr = data.shopDescribe;
        let shopText = shopStr;
        let shopMoreText = "";
        if (/家店$/.test(shopStr)) {
            shopMoreText = shopStr.substr(shopStr.lastIndexOf("等"));
            shopText = shopStr.substr(0, shopStr.length - shopMoreText.length);
        }
        
        mvBaseData.valLab.title = mcBaseData.valLab.title = data.title
        mvBaseData.valLab.custom.tag_id = mcBaseData.valLab.custom.tag_id = data.tagId
        mvBaseData.valLab.custom.content_id = mcBaseData.valLab.custom.content_id = data.contentId
        const lxMV = JSON.stringify(mvBaseData)
        const lxMC = JSON.stringify(mcBaseData)
        
        return (
            <div
                data-lxmc={lxMC}
                data-lxmv={lxMV}
                className="guidecard"
                onClick={contentHader}
                style={{ background: data.backColor }}
            >
                <div
                    className={
                        data.shopDescribe ? "contentcenter" : "contentaround"
                    }
                >
                    <div className="title">{data.title}</div>
                    {!!data.shopDescribe && (
                        <div className="moreshop">
                            <i className="shopicon" />
                            <span
                                className={
                                    shopMoreText ? "shoptext stj" : "shoptext"
                                }
                            >
                                {shopText}
                            </span>
                            <span
                                className={
                                    shopMoreText
                                        ? "shopmoretext smtj"
                                        : "shopmoretext"
                                }
                            >
                                {shopMoreText}
                            </span>
                        </div>
                    )}
                    <div className="baseinfo">
                        <div className="icon">
                            <img className="user" src={ data.guideUserDTO.authorIconUrl}/>
                            {data.guideUserDTO.vipLogo.length > 0 && (
                                <img
                                    className="level"
                                    src={data.guideUserDTO.vipLogo}
                                />
                            )}
                        </div>
                        <div className="name">
                            {data.guideUserDTO.authorNickName}
                        </div>
                        <div className="viewcount">
                            浏览 {data.viewNum}
                        </div>
                        <div className="likecount">
                            赞 {data.likeNum}
                        </div>
                    </div>
                </div>
                <div className="imgbox">
                    <img className="imgfile" src={data.picture} />
                </div>
            </div>
        );
    }
}
