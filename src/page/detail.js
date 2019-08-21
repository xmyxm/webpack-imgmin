import React, { Component } from "react"
import ReactDOM from 'react-dom';
import VConsole from "vconsole/dist/vconsole.min"
import ShopCard from "../component/shop-card/index"
import Header from "../component/header/index"
import { cardList } from "../util/lxdata"
import "../style/detail.less"

class Index extends Component {
    constructor(options) {
        super(options)
    }

    componentDidMount() {
        this.vConsole = new VConsole();
    }

    render() {
        return (
            <React.Fragment>
                <Header hideHeight nextPage={"/list.html"}></Header>
                <div className="content">
                    <div className="head-img"></div>
                    <div className="sdml-text">
                        魔都早午餐的选择真的太多了<br />
                        每天几乎可以吃得不重样！<br />
                        这几家推荐希望大家喜欢~<br />
                        🌟一家无论如何都会再来很多次的店！<br />
                        早起的鸟儿在上午十点吃上了brunch<br />
                        即使是工作日还是非常热闹，还用台湾的阿姨们一起来聚餐。<br />
                        🌟果断选择了玻璃房上的小位置，田园风格的桌椅和装饰让人慢慢安静下来<br />
                        <br />
                        服务员有的是外国人，但是小姐姐笑起来真的很可爱，服务态度也很棒<br />

                        
                    </div>
                    <div className="list-box">
                        {
                            cardList.map(cardInfo => {
                                return <ShopCard key={cardInfo.moduleId} data={cardInfo}></ShopCard>
                            })
                        }
                    </div>
                    <div className="sdml-text">
                    🌟菜品基本没有踩雷<br />
                        「姬松茸炒蛋吐司」🌟🌟🌟🌟🌟<br />
                        第一眼看到的这道菜就选了<br />
                        结果发现选对了√<br />
                        炒蛋很嫩，搭配全麦吐司真的很香，松茸的味道也非常突出，里面还加了蘑菇之类的配菜<br />
                        <br />
                        松软的炒蛋和烤的边上很脆的面包，一大早唤醒了我得味蕾<br />
                        「烤三文鱼沙拉」🌟🌟🌟🌟🌟<br />
                        大清早来吃清爽的沙拉🥗很健康！<br />
                        三文鱼烤了但是毫无鱼腥味，特殊的酱汁拌和的蔬菜丝更让人清爽，有种在吃凉菜的感觉哈哈<br />
                        酱汁有日式的风味，好像有点芥末？<br />
                        搭配面包也是很特别的感觉<br />
                        <br />
                        「胡萝卜蛋糕」🌟🌟🌟<br />
                        整体比较甜，蛋糕体太蓬松最后都碎掉了，水平有待提高<br />
                        「娜娜杏仁澳白」🌟🌟🌟<br />
                        杏仁味不太突出，没有喝太多<br />
                        <br />
                        🌟当天是阴天，吃着吃着见到了太阳。<br />
                        暖暖的阳光洒下来，真的一片岁月静好哈哈哈
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Index></Index>, document.querySelector("#main"))
console.log("欢迎来到灵犀助手！")
