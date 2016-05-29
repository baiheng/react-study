import React from 'react'
import moment from 'moment'

import DatePicker from 'lib/react-datepicker'
import 'lib/react-datepicker/dist/react-datepicker.css'

import Select, {Option, OptGroup} from 'rc-select'
import 'lib/select/assets/index.css'

class Form extends React.Component {
    constructor(props, context) {
        super(props, context);
        moment.locale("zh_CN");
        this.state = {
            startDate: null,
            selectValue: [],
        }
    }
    handleChangeDate(date){
        this.setState({
            startDate: date
        });
    }
    handleSelect(value){
        this.setState({
            selectValue: value
        });
        // console.log(this.state.startDate.format("YYYY-MM-DD"));
        // console.log(this.state.selectValue);
    }
    componentDidMount(){
        this.props.changeItem("one");
    }
    render() {
        return (
            <div className="hbox hbox-auto-xs bg-light ">
                <div className="col">
                    <div className="wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">form</div>
                                        <div className="panel-body">
                                            <form>
                                                <div className="form-group">
                                                    <label>Email address</label>
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <label >Password</label>
                                                    <input type="password" className="form-control" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <label >File input</label>
                                                    <input type="file" />
                                                    <p className="help-block">Example block-level help text here.</p>
                                                </div>
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" /> Check me out
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="panel-footer bg-light lter text-right">
                                            <button type="submit" className="btn btn-default">Submit</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">form</div>
                                        <div className="panel-body">
                                            <form>
                                                <div className="form-group">
                                                    <label className="i-switch m-t-xs m-r">
                                                        <input type="checkbox" defaultChecked/>
                                                        <i></i>
                                                    </label>
                                                    <label className="i-switch bg-danger m-t-xs m-r">
                                                        <input type="checkbox" defaultChecked/>
                                                        <i></i>
                                                    </label>
                                                    <label className="i-switch bg-warning m-t-xs m-r">
                                                        <input type="checkbox" defaultChecked/>
                                                        <i></i>
                                                    </label>
                                                    <label className="i-switch bg-dark m-t-xs m-r">
                                                        <input type="checkbox" defaultChecked/>
                                                        <i></i>
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <label className="i-switch i-switch-md bg-info m-t-xs m-r">
                                                        <input type="checkbox" defaultChecked/>
                                                        <i></i>
                                                    </label>
                                                    <label className="i-switch i-switch-lg bg-primary m-t-xs m-r">
                                                        <input type="checkbox" defaultChecked/>
                                                        <i></i>
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <label >Password</label>
                                                    <div className="input-group">
                                                        <div className="input-group-addon">$</div>
                                                        <input type="text" className="form-control"  placeholder="Amount" />
                                                        <div className="input-group-addon">.00</div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <DatePicker 
                                                    style={{width: '100px'}}
                                                    dateFormat="YYYY-MM-DD"
                                                    selected={this.state.startDate}
                                                    placeholderText=" 输入时间" 
                                                    onChange={this.handleChangeDate.bind(this)}
                                                    todayButton={'今天'} />
                                                </div>
                                                <div className="form-group">
                                                    <p class="form-control-static">http://react-component.github.io/select/</p>
                                                </div>
                                                <div className="form-group">
                                                    <Select 
                                                        style={{ width: '200px' }}
                                                        value={this.state.selectValue}
                                                        onChange={this.handleSelect.bind(this)}
                                                        notFoundContent="没有找到"
                                                        placeholder="选择"
                                                        multiple
                                                        >
                                                        <Option value="jack">jasdck</Option>
                                                        <Option value="lucy">lucy</Option>
                                                        <Option value="yiminghe">yiminghe</Option>
                                                    </Select>
                                                </div>
                                                <div className="form-group">
                                                    <Select 
                                                        style={{ width: '100px' }}
                                                        notFoundContent="没有找到"
                                                        placeholder="选择"
                                                        optionFilterProp="desc"
                                                        dropdownMenuStyle={{
                                                            maxHeight: '50px'
                                                        }}
                                                        >
                                                        <Option value="jack" desc="a">jasdck</Option>
                                                        <Option value="lucy" desc="b">lucy</Option>
                                                        <Option value="yiminghe" desc="c">yiminghe</Option>
                                                    </Select>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="panel-footer bg-light lter text-right">
                                            <button type="submit" className="btn btn-default">Submit</button>
                                        </div>
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

module.exports = Form