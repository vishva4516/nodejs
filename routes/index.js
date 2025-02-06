var express = require('express');
var router = express.Router();
var user = require("../api/controller");

router.get('/',user.index);
router.post('/',user.insert);
router.get('/get',user.get_data);
router.get('/delete/:id',user.delete);
router.get('/update/:id',user.get_update);
router.post('/update/:id',user.update);
router.post('/login',user.login);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
