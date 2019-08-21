import React, { Component } from "react"
import ReactDOM from 'react-dom';
import Header from "../component/header/index"
import "../style/index.less"

class Index extends Component {
    constructor(options) {
        super(options)
        this.state = {
            pageAry: [
                { name: "List", url: "./list.html" },
                { name: "雪碧图", url: "./detail.html" },
                { name: "图片压缩", url: "./home.html" }
            ]
        }
    }

    clickPage(pageInfo) {
        window.location.href = pageInfo.url
    }

    render() {
        const { pageAry } = this.state
        return (
            <React.Fragment>
                <Header></Header>
                <div className="indexbox">
                    <div className="icon"></div>
                    <div className="describe">webpack图片打包方案测试平台</div>
                    <div className="cs">测试案例 :</div>
                    <div className="pagelist">
                        {
                            pageAry.map(pageInfo => {
                                return <div key={pageInfo.name} onClick={this.clickPage.bind(this, pageInfo)} className="item">{pageInfo.name}<div className="arrow"></div> </div>   
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Index></Index>, document.querySelector("#main"))
console.log("欢迎来到图片测试平台！")
