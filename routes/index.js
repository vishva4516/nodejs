var express = require('express');
var router = express.Router();
var user = require("../api/controller");

router.get('/',user.index);
router.post('/',user.insert);
router.post('/',user.get_data);
router.post('/',user.delete);
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
