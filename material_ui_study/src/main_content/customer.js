import React, { PropTypes, Component } from 'react'


export default class Customer extends Component {
    render() {
        return (
            <table className="am-table am-table-bordered am-table-hover">
                <thead>
                    <tr>
                        <th>网站名称</th>
                        <th>网址</th>
                        <th>创建时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Smith</td>
                        <td>Unemployed</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Stephanie Sanders</td>
                        <td>Employed</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Steve Brown</td>
                        <td>Employed</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
