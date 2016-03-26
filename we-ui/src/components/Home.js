import React from 'react'
import { Link } from 'react-router'


class Home extends React.Component {
  render() {
    return (
        <div className="page_" style={{paddingBottom:"80px"}}>
            <div className="hd">
                <h1 className="page_title">Cell</h1>
            </div>
            <div className="bd">
                <div className="weui_cells_title">带说明的列表项</div>
                <div className="weui_cells">
                    <div className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">
                            <p>标题文字</p>
                        </div>
                        <div className="weui_cell_ft">说明文字</div>
                    </div>
                </div>
                <div className="weui_cells_title">带图标、说明的列表项</div>
                <div className="weui_cells">
                    <div className="weui_cell">
                        <div className="weui_cell_hd">
                            <img src="/images/icon_nav_button.png" alt="" />
                        </div>
                        <div className="weui_cell_bd weui_cell_primary">
                            <p>标题文字</p>
                        </div>
                        <div className="weui_cell_ft">说明文字</div>
                    </div>
                    <div className="weui_cell">
                        <div className="weui_cell_hd">
                            <img src="/images/icon_nav_button.png" alt="" />
                        </div>
                        <div className="weui_cell_bd weui_cell_primary">
                            <p>标题文字</p>
                        </div>
                        <div className="weui_cell_ft">说明文字</div>
                    </div>
                </div>
                <div className="weui_cells_title">单选列表项</div>
                <div className="weui_cells weui_cells_radio">
                    <label className="weui_cell weui_check_label">
                        <div className="weui_cell_bd weui_cell_primary">
                            <p>cell standard</p>
                        </div>
                        <div className="weui_cell_ft">
                            <input type="radio" className="weui_check" name="radio1" defaultChecked="checked" />
                            <span className="weui_icon_checked"></span>
                        </div>
                    </label>
                    <label className="weui_cell weui_check_label">
                        <div className="weui_cell_bd weui_cell_primary">
                            <p>cell standard</p>
                        </div>
                        <div className="weui_cell_ft">
                            <input type="radio" name="radio1" className="weui_check" />
                            <span className="weui_icon_checked"></span>
                        </div>
                    </label>
                </div>
                <div className="weui_cells_title">复选列表项</div>
                <div className="weui_cells weui_cells_checkbox">
                    <label className="weui_cell weui_check_label">
                        <div className="weui_cell_hd">
                            <input type="checkbox" className="weui_check" name="checkbox1" />
                            <i className="weui_icon_checked"></i>
                        </div>
                        <div className="weui_cell_bd weui_cell_primary">
                            <p>standard is dealt for u.</p>
                        </div>
                    </label>
                    <label className="weui_cell weui_check_label" >
                        <div className="weui_cell_hd">
                            <input type="checkbox" name="checkbox1" className="weui_check" />
                            <i className="weui_icon_checked"></i>
                        </div>
                        <div className="weui_cell_bd weui_cell_primary">
                            <p>standard is dealicient for u.</p>
                        </div>
                    </label>
                </div>

                <div className="weui_cells_title">开关</div>
                <div className="weui_cells weui_cells_form">
                    <div className="weui_cell weui_cell_switch">
                        <div className="weui_cell_hd weui_cell_primary">标题文字</div>
                        <div className="weui_cell_ft">
                            <input className="weui_switch" type="checkbox"/>
                        </div>
                    </div>
                </div> 

                <div className="weui_cells_tips">底部说明文字底部说明文字</div>
                <div className="weui_btn_area">
                    <a className="weui_btn weui_btn_primary" href="javascript:">确定</a>
                </div>

                <div className="weui_cells_title">上传</div>
                <div className="weui_cells weui_cells_form">
                    <div className="weui_cell">
                        <div className="weui_cell_bd weui_cell_primary">
                            <div className="weui_uploader">
                                <div className="weui_uploader_hd weui_cell">
                                    <div className="weui_cell_bd weui_cell_primary">图片上传</div>
                                    <div className="weui_cell_ft">0/2</div>
                                </div>
                                <div className="weui_uploader_bd">
                                    <ul className="weui_uploader_files">
                                        <li className="weui_uploader_file" style={{backgroundImage:"url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"}}></li>
                                        <li className="weui_uploader_file" style={{backgroundImage:"url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"}}></li>
                                        <li className="weui_uploader_file" style={{backgroundImage:"url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"}}></li>
                                        <li className="weui_uploader_file weui_uploader_status" style={{backgroundImage:"url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"}}>
                                            <div className="weui_uploader_status_content">
                                                <i className="weui_icon_warn"></i>
                                            </div>
                                        </li>
                                        <li className="weui_uploader_file weui_uploader_status" style={{backgroundImage:"url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"}}>
                                            <div className="weui_uploader_status_content">50%</div>
                                        </li>
                                    </ul>
                                    <div className="weui_uploader_input_wrp">
                                        <input className="weui_uploader_input" type="file" accept="image/jpg,image/jpeg,image/png,image/gif" multiple  defaultValue=""/>
                                    </div>
                                </div>
                                <div className="weui_cells_title">文本域</div>
                                <div className="weui_cells weui_cells_form">
                                    <div className="weui_cell">
                                        <div className="weui_cell_bd weui_cell_primary">
                                            <textarea className="weui_textarea" placeholder="请输入评论" rows="3" defaultValue="">
                                            </textarea>
                                            <div className="weui_textarea_counter"><span>0</span>/200</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="weui_toptips weui_warn js_tooltips">格式不对</div>
                                <div className="weui_cells_title">表单报错</div>
                                <div className="weui_cells weui_cells_form">
                                    <div className="weui_cell weui_cell_warn">
                                        <div className="weui_cell_hd"><label className="weui_label">卡号</label></div>
                                        <div className="weui_cell_bd weui_cell_primary">
                                            <input className="weui_input" type="number" pattern="[0-9]*" placeholder="请输入卡号"/>
                                        </div>
                                        <div className="weui_cell_ft">
                                            <i className="weui_icon_warn"></i>
                                        </div>
                                    </div>
                                    <div className="weui_cell">
                                        <div className="weui_cell_hd"><label className="weui_label">日期</label></div>
                                        <div className="weui_cell_bd weui_cell_primary">
                                            <input className="weui_input" type="date" />
                                        </div>
                                    </div>
                                    <div className="weui_cell">
                                        <div className="weui_cell_hd"><label  className="weui_label">时间</label></div>
                                        <div className="weui_cell_bd weui_cell_primary">
                                            <input className="weui_input" type="datetime-local"  placeholder=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="weui_cells_title">选择</div>
                                <div className="weui_cells">

                                    <div className="weui_cell weui_cell_select weui_select_before">
                                        <div className="weui_cell_hd">
                                            <select className="weui_select" name="select2">
                                                <option value="1">+86</option>
                                                <option value="2">+80</option>
                                                <option value="3">+84</option>
                                                <option value="4">+87</option>
                                            </select>
                                        </div>
                                        <div className="weui_cell_bd weui_cell_primary">
                                            <input className="weui_input" type="number" pattern="[0-9]*" placeholder="请输入号码"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="weui_cells_title">选择</div>
                                <div className="weui_cells">
                                    <div className="weui_cell weui_cell_select">
                                        <div className="weui_cell_bd weui_cell_primary">
                                            <select className="weui_select" name="select1" defaultValue="2">
                                                <option value="1">微信号</option>
                                                <option value="2">QQ号</option>
                                                <option value="3">Email</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="weui_cell weui_cell_select weui_select_after">
                                        <div className="weui_cell_hd">
                                            国家/地区
                                        </div>
                                        <div className="weui_cell_bd weui_cell_primary">
                                            <select className="weui_select" name="select2">
                                                <option value="1">中国</option>
                                                <option value="2">美国</option>
                                                <option value="3">英国</option>
                                            </select>
                                        </div>
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

export default Home