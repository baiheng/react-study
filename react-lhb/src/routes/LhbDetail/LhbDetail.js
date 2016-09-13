import React from 'react'
import { Link } from 'react-router'

import { URL } from 'config'
import LhbItem from './LhbItem'

class LhbDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            lhbList: [],
            dateList: [],
        }
    }

    getLhbDetail(date, code){
        $.ajax({
            url: "/lhb/lhb/detail",
            type: "get",
            dataType: "json",
            data: {
                date: date,
                code: code
            },
            success: function(data, textStatus){
                if(data.ret == 0){
                    var lhb_detail = this.state.lhbList;
                    data.lhb_detail.map((item) => {
                        lhb_detail.push(item);
                    });
                    this.setState({
                        lhbList: lhb_detail,
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

    getLhbDateList(code){
        $.ajax({
            url: "/lhb/lhb/date_list",
            type: "get",
            dataType: "json",
            data: {
                code: code
            },
            success: function(data, textStatus){
                if(data.ret == 0){
                    this.setState({
                        dateList: data.lhb_date_list,
                    });
                    let index = 0;
                    for(let i in data.lhb_date_list){
                        if(data.lhb_date_list[i] == this.props.location.query.date){
                            index = i;
                            break;
                        }
                    };
                    for(let i=index;i < data.lhb_date_list.length && i < index+4; i++){
                        this.getLhbDetail(data.lhb_date_list[i], this.props.location.query.code);
                    }
                }else{
                    console.log(data.msg);
                }
            }.bind(this),
            error: function(XMLHttpRequest, textStatus, errorThrown){
                console.log("服务器出错");
            }
        });
    }

    handleClickDate(date, code){
        for(let i in this.state.lhbList){
            if(this.state.lhbList[i].date == date){
                return
            }
        }
        this.getLhbDetail(date, code);
    }

    componentWillMount() {
        this.getLhbDateList(this.props.location.query.code);
    }

    componentDidMount() {
        // console.log("did mount");
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
        let lbhList = this.state.lhbList.map((item, index) => {
            return (
                <div className="col-md-6" key={index}>
                    <LhbItem ticket={item} />
                </div>
            );
        });
        let dateList = this.state.dateList.map((item, index) => {
            return (
                <div className="col-md-1" key={index}>
                    <a 
                    onClick={this.handleClickDate.bind(this, item.date, this.props.location.query.code)} 
                    className="text-info text-info-dker">
                        {item.date}
                    </a>
                </div>
            );
        });
        return (
            <div className="hbox hbox-auto-xs bg-light ">
                <div className="col">
                    <div className="wrapper">
                        <div className="container-fluid">
                            <div className="row m-b-md">{dateList}</div>
                            <div className="row">{lbhList}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = LhbDetail