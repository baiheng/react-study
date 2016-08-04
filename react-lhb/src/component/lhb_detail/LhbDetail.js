import React from 'react'
import { Link } from 'react-router'

import moment from 'moment'

import DatePicker from 'react-datepicker'
import 'lib/react-datepicker/dist/react-datepicker.css'
import { URL } from 'config'


class LhbDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
        moment.locale("zh_CN");
        this.state = {
            startDate: moment(),
            LhbList: []
        }
    }
    handleChangeDate(date){
        this.setState({
            startDate: date
        });
        this.getLhbDetail(date.format("YYYYMMDD"));
    }

    getLhbDetail(date){
        $.ajax({
            url: "/lhb/lhb/detail",
            type: "get",
            dataType: "json",
            data: {
                date: date,
                code: this.props.location.query.code
            },
            success: function(data, textStatus){
                if(data.ret == 0){
                    this.setState({
                        LhbList: data.lhb_detail,
                    });
                }else{
                    console.log(data.msg);
                }
            }.bind(this),
            error: function(XMLHttpRequest, textStatus, errorThrown){
                console.log("服务器出错");
            }
        });
    }

    componentWillMount() {
        this.getLhbDetail(this.state.startDate.format("YYYYMMDD"));
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps){
    }

    shouldComponentUpdate(){
        // console.log("parent should update");
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        // console.log("parent will update");
    }

    componentDidUpdate(prevProps, prevState){
    }

    componentWillUnmount(){
        // console.log("parent did unmount");
    }

    render(){
        let lbhList = this.state.LhbList.map((item, index) => {
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
                + item.b_4_buy_transaction_amount + item.b_5_buy_transaction_amount);
            let sale_transaction_amount = (item.a_1_sale_transaction_amount + item.a_2_sale_transaction_amount
                + item.a_3_sale_transaction_amount + item.a_4_sale_transaction_amount 
                + item.a_5_sale_transaction_amount + item.b_1_sale_transaction_amount
                + item.b_2_sale_transaction_amount + item.b_3_sale_transaction_amount
                + item.b_4_sale_transaction_amount + item.b_5_sale_transaction_amount);

            let b_p = ((buy_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
            let s_p = ((sale_transaction_amount /item.ticket_transaction_amount)*100).toFixed(2);
            return (
                <div className="row" key={index}>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        {item.code}  . {item.ticket_name} [{item.ticket_change_rate}%]  . {item.reason}
                        </div>
                        <div className="panel-body">
                            <table className="table table-hover table-bordered table-condensed bg-white">
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
                                        <td colSpan="2"></td>
                                        <td>{buy_transaction_amount}</td>
                                        <td>{b_p}%</td>
                                        <td>{sale_transaction_amount}</td>
                                        <td>{s_p}%</td>
                                        <td>{buy_transaction_amount - sale_transaction_amount}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="hbox hbox-auto-xs bg-light ">
                <div className="col">
                    <div className="wrapper">
                        <div className="container-fluid">
                            <div className="row m-b-md">
                                <DatePicker 
                                style={{width: '100px'}}
                                dateFormat="YYYY-MM-DD"
                                selected={this.state.startDate}
                                placeholderText=" 输入时间" 
                                onChange={this.handleChangeDate.bind(this)}
                                todayButton={'今天'} />
                            </div>
                            {lbhList}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = LhbDetail