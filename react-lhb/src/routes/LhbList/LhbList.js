import React from 'react'
import { Link } from 'react-router'

import { URL } from 'config'


class LhbList extends React.Component {
    constructor(props, context) {
        super(props, context);
        moment.locale("zh_CN");
        if(this.props.location.query.date){
            var date = moment(this.props.location.query.date);
        }else{
            var date = moment();
        }
        this.state = {
            date: date,
            hsLhbList: [],
            ssLhbList: [],
        }
    }
    handleChangeDate(date){
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
                        ssLhbList: ss,
                        date: moment(data.date),
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
        this.getLhbList(this.state.date.format("YYYYMMDD"));
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
        function genTicketList(item, index){
            return (
                <div className="col-md-2" key={index}>
                    <Link to={{ 
                        pathname: '/pages/lhb_detail', 
                        query: { 
                            code: item.code,
                            date: this.state.date.format("YYYYMMDD")
                        } 
                    }} 
                    className="text-info text-info-dker" target="_blank">
                    {item.ticket_name} <span className="text-danger-lter">[{item.ticket_change_rate}%]</span>
                    </Link>
                </div>
            );
        };
        let hsData = this.state.hsLhbList.map(genTicketList.bind(this));
        let ssData = this.state.ssLhbList.map(genTicketList.bind(this));
        return (
            <div className="hbox hbox-auto-xs bg-light ">
                <div className="col">
                    <div className="wrapper">
                        <div className="container-fluid">
                            <div className="row m-b-md">
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