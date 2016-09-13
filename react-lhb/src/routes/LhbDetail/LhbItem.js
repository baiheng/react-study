import React from 'react'
import { Link } from 'react-router'

import { URL } from 'config'


class LhbItem extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps){
    }

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(nextProps, nextState){
    }

    componentDidUpdate(prevProps, prevState){
    }

    componentWillUnmount(){
    }

    render(){
        let item = this.props.ticket;
        let b_1_b_p = ((item.b_1_buy_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let b_2_b_p = ((item.b_2_buy_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let b_3_b_p = ((item.b_3_buy_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let b_4_b_p = ((item.b_4_buy_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let b_5_b_p = ((item.b_5_buy_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let b_1_s_p = ((item.b_1_sale_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let b_2_s_p = ((item.b_2_sale_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let b_3_s_p = ((item.b_3_sale_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let b_4_s_p = ((item.b_4_sale_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let b_5_s_p = ((item.b_5_sale_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);

        let a_1_b_p = ((item.a_1_buy_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let a_2_b_p = ((item.a_2_buy_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let a_3_b_p = ((item.a_3_buy_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let a_4_b_p = ((item.a_4_buy_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let a_5_b_p = ((item.a_5_buy_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let a_1_s_p = ((item.a_1_sale_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let a_2_s_p = ((item.a_2_sale_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let a_3_s_p = ((item.a_3_sale_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let a_4_s_p = ((item.a_4_sale_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let a_5_s_p = ((item.a_5_sale_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);

        let buy_transaction_amount = (item.a_1_buy_transaction_amount + item.a_2_buy_transaction_amount
            + item.a_3_buy_transaction_amount + item.a_4_buy_transaction_amount 
            + item.a_5_buy_transaction_amount + item.b_1_buy_transaction_amount
            + item.b_2_buy_transaction_amount + item.b_3_buy_transaction_amount
            + item.b_4_buy_transaction_amount + item.b_5_buy_transaction_amount).toFixed(2);
        let sale_transaction_amount = (item.a_1_sale_transaction_amount + item.a_2_sale_transaction_amount
            + item.a_3_sale_transaction_amount + item.a_4_sale_transaction_amount 
            + item.a_5_sale_transaction_amount + item.b_1_sale_transaction_amount
            + item.b_2_sale_transaction_amount + item.b_3_sale_transaction_amount
            + item.b_4_sale_transaction_amount + item.b_5_sale_transaction_amount).toFixed(2);

        let b_p = ((buy_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        let s_p = ((sale_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                {item.code}  . {item.ticket_name} [{item.ticket_change_rate}%]  . {item.reason}
                <span style={{float: "right"}}>{item.date}</span>
                </div>
                <div className="panel-body">
                    <table className="table table-hover table-bordered table-condensed bg-white text-sm">
                        <tbody>
                            <tr><td colSpan="7">买入金额最大的前5名</td></tr>
                            <tr>
                                <td>序号</td>
                                <td>交易营业部名称</td>
                                <td>买入金额（万）</td>
                                <td>占总成交比例</td>
                                <td>卖出金额（万）</td>
                                <td>占总成交比例</td>
                                <td>净额（万）</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>{item.b_1_exchange_division_name}</td>
                                <td>{item.b_1_buy_transaction_amount}</td>
                                <td>{b_1_b_p}%</td>
                                <td>{item.b_1_sale_transaction_amount}</td>
                                <td>{b_1_s_p}%</td>
                                <td>{(item.b_1_buy_transaction_amount - item.b_1_sale_transaction_amount).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{item.b_2_exchange_division_name}</td>
                                <td>{item.b_2_buy_transaction_amount}</td>
                                <td>{b_2_b_p}%</td>
                                <td>{item.b_2_sale_transaction_amount}</td>
                                <td>{b_2_s_p}%</td>
                                <td>{(item.b_2_buy_transaction_amount - item.b_2_sale_transaction_amount).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{item.b_3_exchange_division_name}</td>
                                <td>{item.b_3_buy_transaction_amount}</td>
                                <td>{b_3_b_p}%</td>
                                <td>{item.b_3_sale_transaction_amount}</td>
                                <td>{b_3_s_p}%</td>
                                <td>{(item.b_3_buy_transaction_amount - item.b_3_sale_transaction_amount).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>{item.b_4_exchange_division_name}</td>
                                <td>{item.b_4_buy_transaction_amount}</td>
                                <td>{b_4_b_p}%</td>
                                <td>{item.b_4_sale_transaction_amount}</td>
                                <td>{b_4_s_p}%</td>
                                <td>{(item.b_4_buy_transaction_amount - item.b_4_sale_transaction_amount).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>{item.b_5_exchange_division_name}</td>
                                <td>{item.b_5_buy_transaction_amount}</td>
                                <td>{b_5_b_p}%</td>
                                <td>{item.b_5_sale_transaction_amount}</td>
                                <td>{b_5_s_p}%</td>
                                <td>{(item.b_5_buy_transaction_amount - item.b_5_sale_transaction_amount).toFixed(2)}</td>
                            </tr>
                            <tr><td colSpan="7">卖出金额最大的前5名</td></tr>
                            <tr>
                                <td>1</td>
                                <td>{item.a_1_exchange_division_name}</td>
                                <td>{item.a_1_buy_transaction_amount}</td>
                                <td>{a_1_b_p}%</td>
                                <td>{item.a_1_sale_transaction_amount}</td>
                                <td>{a_1_s_p}%</td>
                                <td>{(item.a_1_buy_transaction_amount - item.a_1_sale_transaction_amount).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{item.a_2_exchange_division_name}</td>
                                <td>{item.a_2_buy_transaction_amount}</td>
                                <td>{a_2_b_p}%</td>
                                <td>{item.a_2_sale_transaction_amount}</td>
                                <td>{a_2_s_p}%</td>
                                <td>{(item.a_2_buy_transaction_amount - item.a_2_sale_transaction_amount).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{item.a_3_exchange_division_name}</td>
                                <td>{item.a_3_buy_transaction_amount}</td>
                                <td>{a_3_b_p}%</td>
                                <td>{item.a_3_sale_transaction_amount}</td>
                                <td>{a_3_s_p}%</td>
                                <td>{(item.a_3_buy_transaction_amount - item.a_3_sale_transaction_amount).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>{item.a_4_exchange_division_name}</td>
                                <td>{item.a_4_buy_transaction_amount}</td>
                                <td>{a_4_b_p}%</td>
                                <td>{item.a_4_sale_transaction_amount}</td>
                                <td>{a_4_s_p}%</td>
                                <td>{(item.a_4_buy_transaction_amount - item.a_4_sale_transaction_amount).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>{item.a_5_exchange_division_name}</td>
                                <td>{item.a_5_buy_transaction_amount}</td>
                                <td>{a_5_b_p}%</td>
                                <td>{item.a_5_sale_transaction_amount}</td>
                                <td>{a_5_s_p}%</td>
                                <td>{(item.a_5_buy_transaction_amount - item.a_5_sale_transaction_amount).toFixed(2)}</td>
                            </tr>
                            <tr> 
                                <td colSpan="2">合计</td>
                                <td>{buy_transaction_amount}</td>
                                <td>{b_p}%</td>
                                <td>{sale_transaction_amount}</td>
                                <td>{s_p}%</td>
                                <td>{(buy_transaction_amount - sale_transaction_amount).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

LhbItem.defaultProps = {
    ticket: {}
}

module.exports = LhbItem