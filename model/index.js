/**
 * Created by sunNode on 16/10/12.
 */
var mongoose = require('mongoose')
var db = mongoose.connect('mongodb://139.224.30.16:27017/livetest',function(err){console.log(err)})

// EM: exports.users = mongoose.model('users', require('./user'))
