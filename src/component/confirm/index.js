import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.less';

let destroy
let confirmEle

export class Confirm extends Component {
    constructor(props) {
        super(props)
        this.state = Object.assign({visible: true}, this.props)
    }

    updateConfig(config) {
        this.setState(Object.assign({}, this.state, {visible: true}, config))
    }

    componentDidMount() {
        this.maskTouchmove()
    }

    componentDidUpdate() {
        this.maskTouchmove()
    }

    /**
     * 处理遮罩, 禁止滚动
     */
    maskTouchmove() {
        if (this.state.visible) {
            window.addEventListener('touchmove', this.preventEvent, { passive: false});
        } else {
            window.removeEventListener('touchmove', this.preventEvent);
        }
    }

    preventEvent(e) {
        e.preventDefault();
    }

    btnHandle(options) {
        let { success } = this.state
        this.setState({ visible: false })
        success && success(options)
    }

    render() {
        let { visible, title, message, leftText, rightText} = this.state

        return (
            <div data-lxmv="b_dianping_nova_citycolumn_confirm_mv" className={ visible ? "confirm-mask-show" : "confirm-mask"}>
                 <div className={"confirm-main"}>
                    <div className={"confirm-title"}>{title}</div>
                    {message && <div className={"confirm-body"}>{message}</div>}
                    <div className={"confirm-actions"}>
                        {!!leftText &&
                            <div
                            data-lxmc="b_dianping_nova_citycolumn_confirm_left_mc"
                            className={"confirm-btn-weight"}
                            onClick={this.btnHandle.bind(this, {area: "left"})}
                            >{leftText}</div>}
                        {!!rightText &&
                            <div
                            data-lxmc="b_dianping_nova_citycolumn_confirm_right_mc"
                            className={"confirm-btn-text"}
                            onClick={this.btnHandle.bind(this, {area: "left"})}
                            >{rightText}</div>}
                    </div>
                </div>
            </div>
        )
    }
}

function instance(config) {
    const div = document.createElement('div')
    div.id = 'seed-confirm'
    document.body.appendChild(div)
    ReactDOM.render(<Confirm {...config} ref={(el) => { confirmEle = el }} />, div)
    return function () {
        ReactDOM.unmountComponentAtNode(div)
        document.body.removeChild(div)
        destroy = confirmEle = null
    }
}

export default function (config) {
    if (destroy) {
        confirmEle.updateConfig(config)
    } else {
        destroy = instance(config)
    }
    return destroy
}
