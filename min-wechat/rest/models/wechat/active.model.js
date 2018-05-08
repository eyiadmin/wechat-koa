const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const activeSchema=new Schema({
activeName:{type:String,required:true},   //活动名称
activeAddr:{type:string,required:true},   //活动地址
activeHeadImg:{type:string,required:true},//活动图片
createUser:{type:string,required:true},  //创建者昵称
createUserId:{type:string,required:true}, //创建者openId
createUserHeadImg:{type:string,required:true}, //创建者头像
activerTime:{type:string,required:true},    //活动时间
createTime:{type:string,required:true},     //创建时间
longitude:{type:string} ,                   //经度
latitude:{type:string}                      // 纬度
});