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
                    <div className="icon-max"></div>
                    <div className="describe">基于image-webpack-loader和imagemin-webpack-plugin压缩测试</div>
                    <div className="icon-type">background引入图片</div>
                    <div className="bkg-box">
                        {
                            iconList.map(classText => {
                                return <div key={classText} className={`${classText} icon`}></div>
                            })
                        }
                    </div>
                    <div className="icon-type">Img引入图片</div>
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
                        1. 分别测试 image-webpack-loader 和 imagemin-webpack-plugin 两类工具的压缩效果，
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Index></Index>, document.querySelector("#main"))
