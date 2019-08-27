import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Header from "../component/header/index"
import "../style/index.less";
import mb_url from "../icon/mb.png"
import nyg_url from "../icon/nyg.png"
import ps_url from "../icon/ps.png"
import rg_url from "../icon/rg.png"
import ss_url from "../icon/ss.png"
import ttq_url from "../icon/ttq.png"
import yg_url from "../icon/yg.png"

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconList: ["icon-bb", "icon-bgg", "icon-bg", "icon-bd", "icon-cm", "icon-dg", "icon-dhs", "icon-kxg", "icon-mkl"]
        }
    }

    render() {
        const { iconList } = this.state
        return (
            <React.Fragment>
                <Header title="图片压缩测试"></Header>
                <div className="index-page">
                    <div className="title">图片分别以背景和Img标签的方式引入</div>
                    <div className="icon-type">background</div>
                    <div className="bkg-box">
                        {
                            iconList.map(classText => {
                                return <div key={classText} className={`${classText} icon`}></div>
                            })
                        }
                    </div>
                    <div className="icon-type">Img</div>
                    <div className="img-box">
                        <img className="icon-img" src={mb_url} />
                        <img className="icon-img" src={nyg_url} />
                        <img className="icon-img" src={ps_url} />
                        <img className="icon-img" src={rg_url} />
                        <img className="icon-img" src={ss_url} />
                        <img className="icon-img" src={ttq_url} />
                        <img className="icon-img" src={yg_url} />
                    </div>
                    <div className="info">
                        分别测试 image-webpack-loader 和 imagemin-webpack-plugin 两类工具的压缩效果，
                        <a className="taplink" href="#" target="_blank">稍后提供文档文档</a>。
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Index></Index>, document.querySelector("#main"))
