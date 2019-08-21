import React, { Component } from "react";
import ReactDOM from 'react-dom';
import VConsole from "vconsole/dist/vconsole.min"
import Header from "../component/header/index"
import "../style/home.less";
import mb_url from "../icon/home/面包.png"
import nyg_url from "../icon/home/牛油果.png"
import ps_url from "../icon/home/披萨.png"
import rg_url from "../icon/home/热狗.png"
import ss_url from "../icon/home/寿司.png"
import ttq_url from "../icon/home/甜甜圈.png"
import yg_url from "../icon/home/腰果.png"

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconList: ["icon-bb", "icon-bgg", "icon-bg", "icon-bd", "icon-cm", "icon-dg", "icon-dhs", "icon-kxg", "icon-mkl"]
        }
    }

    componentDidMount() {
        this.vConsole = new VConsole();
    }

    render() {
        const { iconList } = this.state
        return (
            <React.Fragment>
                <Header title="图片压缩测试"></Header>
                <div className="home-page">
                    <div className="title">图片分别以背景和Img标签的方式引入</div>
                    <div className="icon-type">background</div>
                    <div className="bkg-box">
                        {
                            iconList.map(classText => {
                                return <div key={classText} className={classText}></div>
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
                        <a className="taplink" href="https://km.sankuai.com/page/189360715" target="_blank">点击查看对比文档</a>。
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Home></Home>, document.querySelector("#main"))
