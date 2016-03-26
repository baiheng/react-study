import React from 'react'
import { Link } from 'react-router'


class Head extends React.Component {
  render() {
    return (
        <header className="am-topbar">
            <h1 className="am-topbar-brand">
                <a href="#">React UI</a>
            </h1>

            <div className="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
                <ul className="am-nav am-nav-pills am-topbar-nav">
                    <li className="am-active"><Link to="/">首页</Link></li>
                    <li><Link to="first">项目</Link></li>
                    <li className="am-dropdown" data-am-dropdown>
                        <a className="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
                            下拉 <span className="am-icon-caret-down"></span>
                        </a>
                        <ul className="am-dropdown-content">
                        <li className="am-dropdown-header">标题</li>
                        <li><a href="#">1. 去月球</a></li>
                        <li className="am-active"><a href="#">2. 去火星</a></li>
                        <li><a href="#">3. 还是回地球</a></li>
                        <li className="am-disabled"><a href="#">4. 下地狱</a></li>
                        <li className="am-divider"></li>
                        <li><a href="#">5. 桥头一回首</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
  }
}

module.exports = Head