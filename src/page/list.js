import React, { Component } from "react"
import ReactDOM from 'react-dom';
import VConsole from "vconsole/dist/vconsole.min"
import Header from "../component/header/index"
import ContentCard from "../component/content-card/index"
import ContentTag from "../component/content-tag/index"
import fetch from '../util/fetch'
import { pageData } from "../util/listdata"
import "../style/list.less"

class List extends Component {
    constructor(options) {
        super(options)
        this.isFetch = false
        this.state = {
            pageData
        }
    }

    getData = async (tid) => {
        if (!tid) tid = this.state.pageData.tid
        const { cid, limit} = this.state.pageData
        const param = {cid, tid, limit}
        let tagContent = pageData.contentList.find(item => item.tid == param.tid);
        if (tagContent) {
            if (tagContent.end) return
            param.start = tagContent.start
        } else {
            param.start = 0
            tagContent = {
                tid,
                start: 0,
                data: [],
                end: false
            }
            pageData.contentList.push(tagContent)
        }
        pageData.tid = tid
        this.setState({pageData})
        const post_url = "https://m.dianping.com/content/api/column" //"/content/api/column"
        this.isFetch = true
        const result = await fetch(post_url, param)
        if (result.code == 200) {
            const data = result.data.historyUpdates
            if (data && data.length < limit) {
                tagContent.end = true
            } else {
                tagContent.start += limit
            }
            tagContent.data = tagContent.data.concat(data)
        }
        this.isFetch = false
        this.setState({pageData})
    }

    loadData = () => {
        if (this.isFetch) return;
        let alltop =
            (document.body.scrollTop || document.documentElement.scrollTop) +
            window.innerHeight +
            300;
        if (alltop > document.body.scrollHeight) {
            this.getData();
        }
    };

    changeTag = (tagId) => {
        const { pageData } = this.state
        const { contentList, tid } = pageData
        if (tid == tagId) return
        const tagContent = contentList.find(item => item.tid == tid);
        if (tagContent) {
            pageData.tid = tagId
            this.setState({pageData})
        }
        this.getData(tagId);
    }

    componentDidMount() {
        this.vConsole = new VConsole();
        this.getData()
        window.addEventListener("scroll", this.loadData);
    }

    componentWillUnmount() {
        this.GlobalSV = null;
        this.ColumnSV = null;
        window.removeEventListener("scroll", this.loadData);
    }

    render() {
        const { tagList, contentList, tid } = this.state.pageData
        const tagContent = contentList.find(item => item.tid == tid);
        const isEnd = tagContent ? tagContent.end : false
        return (
            <React.Fragment>
                <Header></Header>
                <div className="taglist">
                    <div className="tagbox">
                        <div id="scrollemt" className="container">
                            <ul className="scroll">
                                {tagList.map((item, index) => {
                                    return <ContentTag key={item.id} clickHandle={this.changeTag} data={item} tid={tid} index={index} ></ContentTag>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="emptybox"></div>
                <div className="contentlist">
                    {
                        tagContent && tagContent.data.map((item, index) => {
                            return  <ContentCard key={item.contentId} data={item}/>
                        })
                    }
                </div>
                <div
                    className="load-wrap"
                    style={{ display: !isEnd ? "block" : "none" }}
                >
                    <div className="loading-img" />
                    <span className="loading-text">正在加载...</span>
                </div>
                <div className="endinfo">没有更多攻略了</div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<List></List>, document.querySelector("#main"))
