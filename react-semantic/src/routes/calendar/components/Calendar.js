import React from 'react'
import ReactDOM from 'react-dom'
import {OverlayTrigger, Popover} from 'react-bootstrap'

import CalendarItem from './CalendarItem'


function countCalendar(year, month){
    let now = new Date(year=year, month=month-1);
    let start = - now.getDay();
    let month_list = [];
    for(let i=0; i<42; i++){
        let d = new Date();
        d.setDate(now.getDate()+start);
        month_list.push(d);
        start += 1;
    }
    return month_list;
}

function getElementOffset(e){
    var t = e.offsetTop;
    var l = e.offsetLeft;
    var w = e.offsetWidth;
    var h = e.offsetHeight-1;

    // while(e=e.offsetParent) {
    //     t+=e.offsetTop;
    //     l+=e.offsetLeft;
    // }
    return {
        top: t,
        left: l,
        width: w,
        height: h
    }
}

class Calendar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            pointX: 0,
            pointY: 0,
        }
    }
    updateDimensions(){
    }
    componentWillMount(){
        this.props.changeItem("two");
    }
    componentDidMount(){
        // window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    componentWillUnmount(){
        // window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    dbClick(e){
        let s = getElementOffset(e.currentTarget);
        let y = s.top + s.height;
        let x = s.left;
        console.log(s);
        let show = true;
        if(x == this.state.pointX && y == this.state.pointY){
            show = !this.state.show;
        }
        this.setState({
            show: show,
            pointX: x,
            pointY: y,
        })
    }
    render() {
        let month_list = countCalendar(2016, 4);
        let content = [];
        let grey_color = true;
        let row_css = {display: 'flex', display: '-webkit-flex'};
        let item_css = {
            flex: 1,
            overflow: "hidden",
            whiteSpace: "nowrap", 
            textOverflow: "ellipsis",
            wordWrap: "break-word",
            border: '1px solid black',
        };
        for(let i=0; i<6; i++){
            let tmp = [];
            for(let j=0; j<7; j++){
                let day = month_list[j+i*7].getDate();
                if(day == 1){
                    grey_color = !grey_color;
                }
                tmp.push(
                    <div key={j} style={item_css} onDoubleClick={this.dbClick.bind(this)}>
                        <CalendarItem 
                            day={day}
                            date={month_list[j+i*7]} 
                            event_list={
                                [
                                    {
                                        name: "绿景控股绿景控股绿景控股绿景控股绿景控股绿景控股",
                                        time: "18:00",
                                        label: "all",
                                        remark: "abc"
                                    },
                                    {
                                        name: "永安林业",
                                        time: "16:00",
                                        label: "red",
                                        remark: "abcdasf"
                                    },
                                    {
                                        name: "巨轮智能",
                                        time: "15:00",
                                        label: "products",
                                        remark: "asdsdfadfadsfbc"
                                    },
                                    {
                                        name: "永安林业",
                                        time: "16:00",
                                        label: "red",
                                        remark: "abcdasf"
                                    },
                                    {
                                        name: "巨轮智能",
                                        time: "15:00",
                                        label: "products",
                                        remark: "asdsdfadfadsfbc"
                                    }
                                ]
                            } 
                            grey_color={grey_color}  
                        />
                    </div>
                );
            }
            content.push(<div style={row_css} key={i}>{tmp}</div>);
        }
        return (
            <div className="hbox hbox-auto-xs bg-light ">
                <div className="col">
                    <div className="wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div style={{
                                    display: 'flex',
                                    display: '-webkit-flex',
                                    cursor: 'pointer',
                                    flexDirection: 'column',
                                    width: '100%',
                                }}>
                                    <div style={row_css}>
                                        <div style={item_css}>星期日</div>
                                        <div style={item_css}>星期一</div>
                                        <div style={item_css}>星期二</div>
                                        <div style={item_css}>星期三</div>
                                        <div style={item_css}>星期四</div>
                                        <div style={item_css}>星期五</div>
                                        <div style={item_css}>星期六</div>
                                    </div>
                                    {content}
                                </div>
                            </div>

                            <div className="popover bottom" 
                            style={{
                                left: this.state.pointX + 'px', 
                                top: this.state.pointY + 'px',
                                display: this.state.show? 'block': 'none',
                            }}>
                                <div className="arrow"></div>
                                <div className="popover-content">
                                    And here's some <strong>amazing</strong> content. It's very engaging. right?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Calendar