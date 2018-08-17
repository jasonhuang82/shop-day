var express = require('express');
var fs = require('fs');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var crypto = require('crypto');
var router = express.Router();

// 加密
const shaHash = text => {
  var shasum = crypto.createHash('sha1').update(text);
  return shasum.digest('hex');
};
// 建立 token
const createTokenObj = (token, userId) => ({
  token,
  userId,
  time: Date.now(),
});
const responseJson = (res, datas) => {
  if (datas)
    res.json({
      ...datas,
      state: 200
    });
  else
    res.json({
      state: 404
    })
}
// 會員驗證
let limitTime = 5; // 5 minute;
let tokenTable = [
  // {
  //   userId: 1,
  //   time: Date.now() 字串  - 相減現在時間用 limit 時間做過期時間,
  //   token: ''
  // }
];
let userDatas = [{
    id: 1,
    userName: 'jason',
    passWord: 111
  },
  {
    id: 2,
    userName: 'Joe',
    passWord: 222
  },
  {
    id: 3,
    userName: 'Snoop',
    passWord: 333
  },
  {
    id: 4,
    userName: 'Gina',
    passWord: 444
  },
  {
    id: 5,
    userName: 'Miya',
    passWord: 555
  }
];

// 資料表酷勁
const dbUrl = name => path.join(__dirname, '../data_base') + '/userDatas.json';
// node 讀檔
const readJson = dataBaseName => {
  return new Promise(function (resolve) {
    fs.readFile(dbUrl(dataBaseName), 'utf8', function (err, data) {
      if (err) {
        throw err;
      } else {
        let jsonFileData = data.toString();
        jsonFileData = JSON.parse(jsonFileData);
        console.log('====================================');
        console.log('readFile: 成功,', jsonFileData);
        console.log('====================================');
        resolve(jsonFileData);
      }
    });
  })
};
// node 寫檔
const writeJson = (dataBaseName, callBack) => {
  //现将json文件读出来
  fs.readFile(`${path.join(__dirname, '../data_base')}/${dataBaseName}.json`, 'utf8', function (err, data) {
    if (err) {
      return console.error(err);
    }
    // var person = data.toString(); //将二进制的数据转换为字符串
    // person = JSON.parse(person); //将字符串转换为json对象
    // person.data.push(params); //将传来的对象push进数组对象中
    // person.total = person.data.length; //定义一下总条数，为以后的分页打基础
    // console.log(person.data);
    // var str = JSON.stringify(person); //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
    let jsonFileData = data.toString();
    jsonFileData = JSON.parse(jsonFileData);
    jsonFileData = callBack(jsonFileData); // 修改過後的 json
    let str = JSON.stringify(jsonFileData);
    fs.writeFile(`../data_base/${dataBaseName}.json`, str, function (err) {
      if (err) {
        console.error(err);
      }
      console.log('----------新增成功-------------');
    })
  })
}

// more routes for our API will happen here
// 會員API
router.post('/', function (req, res) {
  // 讀檔測試
  // readJson('userDatas')
  // .then(res => {
  //   console.log('res',res);
  // })
  let cookiesSessionKey = req.body.hasOwnProperty('cookiesSessionKey') ? req.body.cookiesSessionKey : undefined;
  let token = req.session[cookiesSessionKey];
  console.log('cookiesSessionKey', cookiesSessionKey);
  console.log('req.session', req.session);

  if (
    cookiesSessionKey !== '' &&
    cookiesSessionKey !== 'undefined' &&
    cookiesSessionKey !== undefined &&
    cookiesSessionKey &&
    token !== undefined
  ) {

    // 使用 token 登入
    // 因為目前沒資料庫所以存檔時，node 把快取清空所以，第一次如果陣列長度為0，就先push做為第一個 token 暫解
    if (tokenTable.length === 0) {
      tokenTable.push(createTokenObj(token, 1))
    }

    let userId = tokenTable.find(item => item.token.toString() === token.toString()).userId;
    let userName = userDatas.find(item => item.id.toString() === userId.toString()).userName;
    console.log('====================================');
    console.log('tokenTable', tokenTable);

    console.log('userName', userName);
    console.log('====================================');
    if (userId) {
      responseJson(res, {
        userName
      })
    } else {
      responseJson(res, null)
    }
    // let token = req.body.hasOwnProperty('token') ? req.body.token: undefined;



    // if (token !== '' && token !== 'undefined' && token !== undefined && token ) {
    //   // 使用 token 登入
    //   // 因為目前沒資料庫所以存檔時，node 把快取清空所以，第一次如果陣列長度為0，就先push做為第一個 token 暫解
    //   if (tokenTable.length === 0 ){
    //     tokenTable.push(createTokenObj(token,1))
    //   }

    //   let userId = tokenTable.find(item => item.token.toString() === token.toString()).userId;
    //   let userName = userDatas.find(item => item.id.toString() === userId.toString()).userName;
    //   if (userId) {
    //     responseJson(res, {
    //       userName
    //     })
    //   } 
    //   else {
    //     responseJson(res, null)
    //   }
  } else {
    // 使用會員登入
    let {
      userName,
      passWord
    } = req.body;
    let isMember = userDatas.some(member =>
      (member.userName === userName && member.passWord.toString() === passWord)
    );
    if (isMember) {
      let userId = parseInt(
        userDatas.find(member => (
          member.userName === userName && member.passWord.toString() === passWord.toString()
        )).id, 0);
      // token = Math.ceil(Date.now() + (Math.random() * 1000));
      const COOKIE_SHOP_DAY = 'COOKIE_SHOP_DAY';
      let sessionKey = shaHash(COOKIE_SHOP_DAY);
      // let sessionKey = shaHash(Date.now() + userName);

      token = shaHash(Date.now() + userName + passWord);
      req.session[sessionKey] = token;
      // req.cookies[COOKIE_SHOP_DAY] = sessionKey;
      console.log('====================================');
      console.log('sessionKey', req.session);

      console.log('====================================');
      tokenTable.push(createTokenObj(token, userId));
      responseJson(res, {
        token,
        userName,
        cookies: {
          key: COOKIE_SHOP_DAY,
          value: sessionKey
        }
      })
    } else {
      responseJson(res, null)
    }
  }
});



module.exports = router;