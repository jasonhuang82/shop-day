var express = require('express');
var router = express.Router();

// ROUTES FOR OUR API
// =============================================================================
// var router = express.Router(); // get an instance of the express Router

// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function (req, res) {
//   res.json({
//     message: 'hooray! welcome to our api!'
//   });
// });
// 產品 crud
let datas = [
  {
    id: 1,
    message: 'jason'
  },
  {
    id: 2,
    message: 'Joe'
  }
];

const responseJson = (res,datas) => {
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
// more routes for our API will happen here
router.get('/products', function (req, res) {
  res.json(datas);
});

router.route('/products/:id')
  .get(function (req, res) {
    const findObj = datas.find(items => parseInt(items.id) === parseInt(req.params.id) )
    console.log('====================================');
    // console.log(datas);
    console.log('get success', req.params.id);
    console.log('====================================');
    responseJson(res, findObj);
  })
  .post(function(req, res) {
    datas.push({
      id: req.params.id,
      message: 'The post api for image: ' + req.params.id
    });
    console.log('====================================');
    // console.log(datas);
    console.log('post success');
    console.log('====================================');
    responseJson(res, datas);
  })

  .put(function(req, res) {
    datas = datas.map(items => {
      if (parseInt(items.id) === parseInt(req.params.id)) {
        console.log('====================================');
        // console.log(' req.body', req.body);
        // console.log(' req.body', typeof req.body);
        // console.log(' req.body', req.body.message);
        console.log('put success');
        
        console.log('====================================');
        items.message = req.body.message
      }
      
      return items;
    })
    responseJson(res, datas);
  })

  .delete(function (req, res) {
    datas = datas.filter(items => 1 * items.id !== 1 * req.params.id);
    console.log('====================================');
    console.log('delete success');
    console.log('====================================');
    responseJson(res, datas);
  });

module.exports = router;