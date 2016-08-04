import React from 'react'
import { Link } from 'react-router'

import moment from 'moment'

import DatePicker from 'react-datepicker'
import 'lib/react-datepicker/dist/react-datepicker.css'
import { URL } from 'config'


class LhbList extends React.Component {
    constructor(props, context) {
        super(props, context);
        moment.locale("zh_CN");
        this.state = {
            startDate: moment(),
            hsLhbList: [],
            ssLhbList: [],
        }
    }
    handleChangeDate(date){
        this.setState({
            startDate: date
        });
        this.getLhbList(date.format("YYYYMMDD"));
    }

    getLhbList(date){
        $.ajax({
            url: "/lhb/lhb/list?date=" + date,
            type: "get",
            dataType: "json",
            success: function(data, textStatus){
                var hs = [];
                var ss = [];
                if(data.ret == 0){
                    for(var i in data.lhb_list){
                        if(data.lhb_list[i].code[0] == "6"){
                            hs.push(data.lhb_list[i]);
                        }else{
                            ss.push(data.lhb_list[i]);
                        }
                    };
                    this.setState({
                        hsLhbList: hs,
                        ssLhbList: ss
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
        this.getLhbList(this.state.startDate.format("YYYYMMDD"));
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
        let hsData = this.state.hsLhbList.map((item, index) => {
            return (
                <div className="col-md-2" key={index}>
                    <Link to={{ pathname: '/lhb/lhb_detail.html', query: { id: item.id } }} className="text-info text-info-dker" target="_blank">
                    {item.ticket_name} <span className="text-danger-lter">[{item.ticket_change_rate}%]</span>
                    </Link>
                </div>
            );
        });
        let ssData = this.state.ssLhbList.map((item, index) => {
            return (
                <div className="col-md-2" key={index}>
                    <Link to="/" className="text-info text-info-dker" target="_blank">
                    {item.ticket_name} <span className="text-danger-lter">[{item.ticket_change_rate}%]</span>
                    </Link>
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
                            <div className="row">
                                <div className="panel panel-default">
                                    <div className="panel-heading">沪市</div>
                                    <div className="panel-body">
                                        <div className="row">{hsData}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="panel panel-default">
                                    <div className="panel-heading">深市</div>
                                    <div className="panel-body">
                                        <div className="row">{ssData}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = LhbList