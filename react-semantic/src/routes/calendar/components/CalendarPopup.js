import React from 'react'


function deepCopy(source) { 
    var result={};
    for (var key in source) {
        result[key] = typeof source[key]==='object' ? deepCopy(source[key]): source[key];
   } 
   return result; 
}

function formatDate(date, fmt){
    // ("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423  
    // ("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18  
    var o = {   
        "M+" : date.getMonth()+1,                 //月份   
        "d+" : date.getDate(),                    //日   
        "h+" : date.getHours(),                   //小时   
        "m+" : date.getMinutes(),                 //分   
        "s+" : date.getSeconds(),                 //秒   
        "q+" : Math.floor((date.getMonth()+3)/3), //季度   
        "S"  : date.getMilliseconds()             //毫秒   
    };   
    if(/(y+)/.test(fmt))   
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
    for(var k in o)   
        if(new RegExp("("+ k +")").test(fmt))   
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
    return fmt;   
}

class CalendarPopup extends React.Component {
    constructor(props, context) {
        super(props, context);
        let select = 0;
        let event_list = this.props.event_list;
        let form = {
                name: event_list.length == 0? "" : event_list[select].name,
                date: event_list.length == 0? "" : formatDate(this.props.date, "yyyy-MM-dd"),
                time: event_list.length == 0? "" : event_list[select].time,
                label: event_list.length == 0? "" : event_list[select].label,
                remark: event_list.length == 0? "" : event_list[select].remark,
            }
        this.state = {
            select: select,
            create: false,
            can_save: false,
            form: form,
        }
    }    
    componentWillUpdate(nextProps, nextState){
    }
    componentDidMount(){
    }    
    componentWillUnmount(){
    }
    clickCreateEvent(){
        this.setState({
            select: -1,
            create: true,
            can_save: true,
            form: {
                name: "",
                date: formatDate(this.props.date, "yyyy-MM-dd"),
                time: formatDate(new Date, "hh:mm"),
                label: "",
                remark: "",
            }
        })
    }
    clickEventList(index){
        let event_item = this.props.event_list[index];
        this.setState({
            select: index,
            create: false,
            can_save: false,
            form: {
                name: event_item.name,
                date: formatDate(this.props.date, "yyyy-MM-dd"),
                time: event_item.time,
                label: event_item.label,
                remark: event_item.remark,
            }
        })
    }
    changeName(e){
        let new_state = deepCopy(this.state);
        new_state.form.name = e.target.value;
        new_state.can_save = true;
        this.setState(new_state);
    }
    changeDate(e){
        let new_state = deepCopy(this.state);
        new_state.form.date = e.target.value;
        new_state.can_save = true;
        this.setState(new_state);
    }
    changeTime(e){
        let new_state = deepCopy(this.state);
        new_state.form.time = e.target.value;
        new_state.can_save = true;
        this.setState(new_state);
    }
    changeLabel(e){
        let new_state = deepCopy(this.state);
        new_state.form.label = e.target.value;
        new_state.can_save = true;
        this.setState(new_state);
    }
    changeRemark(e){
        let new_state = deepCopy(this.state);
        new_state.form.remark = e.target.value;
        new_state.can_save = true;
        this.setState(new_state);
    }
    render() {
        let foot_button = [];
        if(!this.state.create){
            foot_button.push(
                <button className="ui mini red basic button" style={{
                    padding: '8px 15px',
                }} key="del">删除</button>
            )
        }
        if(this.state.can_save){
            foot_button.push(
                <button className="ui mini blue basic button" style={{
                    padding: '8px 15px', float: 'right'
                }} key="save">保存</button>
            )
        }else{
            foot_button.push(
                <button className="ui mini blue basic button" style={{
                    padding: '8px 15px', float: 'right'
                }} disabled key="save">保存</button>
            )
        }
        foot_button.push(
            <button className="ui mini teal basic button" style={{
                padding: '8px 15px', float: 'right'
            }} key="cancel" onClick={this.props.hidePopup}>取消</button>
        )
        return (
                <div style={{width: "400px", height: "400px"}}>
                    <div>
                        <div style={{
                                overflowX: "auto", 
                                width: "180px", 
                                height: "355px", 
                                position: "absolute", 
                                backgroundColor: "white",
                                color: "#5F888A",
                            }}>
                            <div style={{paddingRight: "10px",  paddingLeft: "10px", backgroundColor: "#D8D8DC", color: "black"}}
                                onClick={this.clickCreateEvent.bind(this)}>
                                <i className="fa fa-plus" style={{marginRight: "10px"}}></i>添加事项
                            </div>
                            {
                                this.props.event_list.map((val, index) =>{
                                    return (
                                        <div key={index} onClick={this.clickEventList.bind(this, index)}
                                        style={{
                                            paddingRight: "10px", 
                                            paddingLeft: "10px",
                                            backgroundColor: index == this.state.select ? "#F4F4F5" : "white"
                                        }}>
                                            <span style={{float: "left", marginRight: "5px"}}>&bull;</span>
                                            <div style={{float: "right"}}>{val.time}</div>
                                            <div>{val.name}</div>
                                        </div>)
                                })
                            }
                        </div>
                        <div style={{ left: "210px", height: "350px", position: "absolute"}}>
                            <div className="ui form">
                                <div className="field">
                                    <label>事件</label>
                                    <input type="text" value={this.state.form.name} onChange={this.changeName.bind(this)}/>
                                </div>
                                <div className="field">
                                    <label>日期</label>
                                    <input type="date" value={this.state.form.date} onChange={this.changeDate.bind(this)}/>
                                </div>
                                <div className="fields">
                                <div className="field">
                                    <label>时间</label>
                                    <input type="time" value={this.state.form.time} onChange={this.changeTime.bind(this)}/>
                                </div>
                                <div className="field">
                                    <label>标签</label>
                                    <select className="ui dropdown" value={this.state.form.label} 
                                        onChange={this.changeLabel.bind(this)}>
                                        <option value="all">All</option>
                                        <option value="red">Articles</option>
                                        <option value="products">Products</option>
                                    </select>
                                </div>
                                </div>
                                <div className="field">
                                    <label>备注</label>
                                    <textarea rows="5" value={this.state.form.remark} onChange={this.changeRemark.bind(this)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        position: "absolute", 
                        width: "100%", 
                        bottom: "0px", 
                        left: "0px", 
                        padding: "10px", 
                        borderTop: "1px solid #d9d9d9"}}>
                        {foot_button}
                    </div>
                </div>
        )
    }
}

CalendarPopup.defaultProps = {
    event_list: [],
    date: "",
}

module.exports = CalendarPopup