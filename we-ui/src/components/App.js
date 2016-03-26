import React from 'react'
import { Link } from 'react-router'

import Home from './Home'


class App extends React.Component {
  render() {
    return (
		<div>
            <div className="weui_tab">
                {this.props.children || <Home />}
            </div>
            <div style={{position:"fixed",left:"0px",right:"0px",bottom:"0px",zIndex:"10"}}>
                <div className="weui_tabbar">
                    <Link to="/" className="weui_tabbar_item weui_bar_item_on">
                        <div className="weui_tabbar_icon">
                            <img src="/images/icon_nav_button.png" alt="" />
                        </div>
                        <p className="weui_tabbar_label">微信</p>
                    </Link>
                    <Link to="first" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <img src="/images/icon_nav_msg.png" alt="" />
                        </div>
                        <p className="weui_tabbar_label">通讯录</p>
                    </Link>
                    <Link to="first" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <img src="/images/icon_nav_article.png" alt="" />
                        </div>
                        <p className="weui_tabbar_label">发现</p>
                    </Link>
                    <Link to="first" className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <img src="/images/icon_nav_cell.png" alt="" />
                        </div>
                        <p className="weui_tabbar_label">我</p>
                    </Link>
                </div>
            </div>
        </div>
    )
  }
}

module.exports = App