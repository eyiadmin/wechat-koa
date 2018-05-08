import{wechatController} from '../controllers/wechat.export';
const router = require('koa-router')();

router.get('/rest/v1/login',wechatController.login);

module.exports=router;