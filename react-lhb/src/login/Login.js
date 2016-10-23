import React from 'react'


class Login extends React.Component {

    render() {
        return (
            <div style={{marginTop: "200px", width: "300px", right: "50%", position: "absolute", marginRight: "-150px"}}>
                <form className="am-form" action="/lhb/authentication/login"  method="post">
                    <div className="am-form-group">
                        <input type="text" className="am-form-field" placeholder="用户名" name="user_name"/>
                    </div>
                    <div className="am-form-group">
                        <input type="password" className="am-form-field" placeholder="密码" name="pwd" />
                    </div>
                    <button type="submite" className="am-btn am-btn-default am-btn-block">登录</button>
                </form>
            </div>
        )
    }
}


module.exports = Login
