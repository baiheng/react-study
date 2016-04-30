import React from 'react'
import ReactDOM from 'react-dom'
import {OverlayTrigger, Popover} from 'react-bootstrap'

import CalendarPopup from './CalendarPopup'


class CalendarItem extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount(){
    }    
    componentWillUnmount(){
    }
    hidePopup(){
        // $(ReactDOM.findDOMNode(this.refs.calendar_item_id)).popup('hide');
    }
    showPopup(){
        // $(ReactDOM.findDOMNode(this.refs.calendar_item_id)).popup('show');
    }
    render() {
        let no_wrap = {
            overflow: "hidden",
            whiteSpace: "nowrap", 
            textOverflow: "ellipsis",
            wordWrap: "break-word",
        };
        let show_item_length = this.props.show_item_length;
        let event_len = this.props.event_list.length > show_item_length? show_item_length: this.props.event_list.length;
        let event_list = [];
        for(let i=0; i<show_item_length; i++){
            if(i<event_len){
                event_list.push(
                    <div title={this.props.event_list[i].name} key={i}>
                        <div style={no_wrap}>
                            <span style={{marginRight: '5px'}}>&bull;</span>
                            <span style={{float: 'right'}}>{this.props.event_list[i].time}</span>
                            {this.props.event_list[i].name}
                        </div>
                    </div>
                );
            }
        }
        let event_foot = "";
        if(this.props.event_list.length == (show_item_length + 1)){
            event_foot = (
                <div title={this.props.event_list[show_item_length].name} key={show_item_length}>
                    <div style={no_wrap}>
                        <span style={{marginRight: '5px'}}>&bull;</span>
                        <span style={{float:'right'}}>{this.props.event_list[show_item_length].time}</span>
                        {this.props.event_list[show_item_length].name}
                    </div>
                </div>
                );
        }else if(this.props.event_list.length > show_item_length){
            event_foot = (
                <a style={{color: 'darkgray',paddingLeft: '8px'}}>
                    查看更多（{this.props.event_list.length - show_item_length}）
                </a>
                )
        }

        return (
            <div style={{
                fontSize: '12px', 
                color: this.props.grey_color? 'darkgray': 'black'}}
                ref="calendar_item_id"
                onDoubleClick={this.showPopup.bind(this)}>
                <div style={{textAlign: "right", fontSize: "18px", fontWeight: "bolder",padding: '8px'}}>
                    {this.props.day}
                </div>
                <div style={{minHeight: '80px'}}>
                    {event_list}
                    {event_foot}
                </div>
            </div>
        )
    }
}

CalendarItem.defaultProps = {
    show_item_length: 3,
    day: 1,
    event_list: [],
    grey_color: false,
}

module.exports = CalendarItem

// <div className="ui flowing custom popup transition hidden" ref="popup_id"
//                     style={{
//                         backgroundColor: "#F4F4F5"
//                     }}>
//                     <CalendarPopup event_list={this.props.event_list} date={this.props.date} 
//                     hidePopup={this.hidePopup.bind(this)}/>
//                 </div>