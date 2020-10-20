import React from 'react';
import Logo from '../assets/logo-reactjs.png';
import { createBrowserHistory as history} from 'history';
import './LoginForm.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }
        this.handleInputUsername = this.handleInputUsername.bind(this);
        this.handleInputPassword = this.handleInputPassword.bind(this);
        this.onPress = this.onPress.bind(this);
    }

    onPress(e){
        e.preventDefault();
        if(this.state.username === "admin" && this.state.password === "1"){
            alert('Login success!!')
            this.props.history.push('/home');
            console.log('success' + this.state.username + '\n' + this.state.password);
        }else{
            alert('username or password not corrected')
            console.log('fail' + this.state.username + '\n' + this.state.password);
        }
    }

    handleInputUsername(e){
        this.setState({
            username: e.target.value,
        })
      }

      handleInputPassword(e){
        this.setState({
            password: e.target.value,
        })
      }

    render(){
        return(
            <div className="login">
                <form onSubmit={this.onPress}>
                    <img src={Logo} alt='logo' id='logo'/>
                    <br/>
                    <label>Username: </label>
                    <input type='text' value={this.state.username} onChange={this.handleInputUsername} placeholder="Input username..."/>
                    <br/>
                    <label>Password: </label>
                    <input type='password' value={this.state.password} onChange={this.handleInputPassword} placeholder="Input password..."/>
                    <br/>
                    <button type="submit" name="Login" className="filter-press">
                        Login
                    </button>
                </form>
            </div>
        )
    };
}

export default Login;