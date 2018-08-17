import './style.scss';
import React,{Component} from 'react';
import cx from 'classnames';
import axios from 'axios';

// 設定 cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// 取得 cookie
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
const COOKIE_SHOP_DAY = 'COOKIE_SHOP_DAY';
export default class MemberVail extends Component {
  static defalutProps = {

  }
  // componentDidMount() {
    // await fetch('http://localhost:5000/api/products/1', {
    //   method: 'GET', // *GET, POST, PUT, DELETE, etc.
    // })
    // .then(res => res.json())
    // .then(res => console.log('GET',res))
    // .catch(err=> console.error(err))
    // await fetch(`http://localhost:5000/api/products/${+new Date()}`, {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   })
    //   .then(res => res.json())
    //   .then(res => console.log('POST', res))
    //   .catch(err => console.error(err))


    // await fetch(`http://localhost:5000/api/products/1`, {
    //     method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    //     body: JSON.stringify({
    //       message: 'change Text'
    //     }),
    //     headers: {
    //       'content-type': 'application/json'
    //     },
    //   })
    //   .then(res => res.json())
    //   .then(res => console.log('put',res))
    //   .catch(err => console.error(err))

    // await fetch(`http://localhost:5000/api/products/1`, {
    //     method: 'DELETE'
    //   })
    //   .then(res => res.json())
    //   .then(res => console.log('DELETE', res))
    //   .catch(err => console.error(err))
  // }
  state = {
    userName: '',
    passWord: '',
    shopToken: '',
    memberUserName: '',
    errorMsg: '',
    shopCookies: {
      key: '',
      value: ''
    }
  }

  componentDidMount = async() => {
    const url = `http://localhost:5000/api/member`;
    
    const cookiesSessionKey = getCookie(COOKIE_SHOP_DAY);
    // await this.setState({ shopToken });
    console.log('====================================');
    console.log('cookiesSessionKey', cookiesSessionKey);
    console.log('====================================');
    if (cookiesSessionKey !== 'undefined') {
      // 有快取token用 token 登入，沒有就用帳密
      axios.post(url, {
        cookiesSessionKey
      })
        .then(res => {
          console.log('====================================');
          console.log('login success', res.data);
          console.log('====================================');
          if (res.data.state === 200) {
            this.setState({
              memberUserName: res.data.userName,
              shopCookies:{
                ...res.data.cookies
              }
            })
          }
        })
        .catch(err => console.log('catch :', err))
    }
    // const SHOP_DAY_TOKEN = 'SHOP_DAY_TOKEN';
    // const shopToken = localStorage[SHOP_DAY_TOKEN];
    // await this.setState({ shopToken });
    // console.log('====================================');
    
    // console.log('shopToken', shopToken);
    // console.log('====================================');
    // if (shopToken !== 'undefined') {
    //   // 有快取token用 token 登入，沒有就用帳密
    //   axios.post(url, {
    //     token: shopToken
    //   })
    //     .then(res => {
    //       console.log('====================================');
    //       console.log('login success',res.data);
    //       // if (res.data.state === 200) {
    //       //   localStorage[SHOP_DAY_TOKEN] = res.data.token;
    //       // }
    //       console.log('====================================');
    //       if(res.data.state === 200) {
    //         this.setState({ 
    //           memberUser: {
    //             name: res.data.userName
    //           }
    //         })
    //       }
    //     })
    //     .catch(err =>  console.log('catch :', err) )
    // }
  }

  componentDidUpdate = () => {

  }

  login = () => {
    // axios.get();

    // axios.put
    // axios.delete()
    const url = `http://localhost:5000/api/member`;
    const SHOP_DAY_TOKEN = 'SHOP_DAY_TOKEN';
    const shopToken = localStorage[SHOP_DAY_TOKEN];
    
    if (shopToken){
      // 有快取token用 token 登入，沒有就用帳密
    }
    axios.post(url,{
      userName: this.state.userName,
      passWord: this.state.passWord
    })
    .then(res => {
      console.log('====================================');
      console.log('res data',res.data);

      switch (res.data.state) {
        case 200:
          localStorage[SHOP_DAY_TOKEN] = res.data.token;
          console.log('res.data.cookies', res.data.cookies);
          
          setCookie(res.data.cookies.key, res.data.cookies.value, 300000);
          this.setState({
            shopToken: localStorage[SHOP_DAY_TOKEN],
            memberUserName:  res.data.userName,
            shopCookies: {
              ...res.data.cookies
            }
          });

          setCookie(res.data.cookies.key, res.data.cookies.value, 5000);
          break;
        case 404:
          this.setState({ errorMsg: '帳號或密碼輸入不正確'});
          break;
        default:
          this.setState({ errorMsg: '帳號或密碼輸入不正確' });
          break;
      }
      console.log('====================================');
    })
    .catch(err => {
      console.log('catch :',err);
    })
  }

  render() { 
    return  (
      <div className="MemberVail">
        {!this.state.shopToken
          ?(
            <div>
              <div>
                <label htmlFor="">帳號</label>
                <input type="text"
                  value={this.state.userName}
                  onChange={e => this.setState({ userName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="">密碼</label>
                <input type="text"
                  value={this.state.passWord}
                  onChange={e => this.setState({ passWord: e.target.value })}
                />
              </div>
              <button onClick={this.login}>登入</button>
              
            </div>
          )
          :(
            <div>
              <div>token:{this.state.shopToken}</div>
              <div>會員名稱: {this.state.memberUserName}</div>
            </div>
          )
        }
        <button onClick={e => {
          setCookie(COOKIE_SHOP_DAY);
          this.setState({
            shopToken: '',
            userName: '',
            passWord: '',
          });
        }}>
          clear cookie
        </button>
        <h4 hidden={this.state.errorMsg === ''}>{this.state.errorMsg}</h4>
      </div>
    );
  }
}
