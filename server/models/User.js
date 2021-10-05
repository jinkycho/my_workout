const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//Salt를 이용해서 비밀번호 암호화
const saltRounds = 10
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength:50
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        minlength:5
    },
    role : {
        type: Number,
        default: 0 //normal user
    }
})

//Mongoose method
//저장하기 전 기능
userSchema.pre('save', function( next){
    var user = this;

    if(user.isModified('password')) {
        //비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function (err, salt) {
            //에러 발생 시
            if (err) return next(err)

            //myPlaintextPassword -> 암호화 되기 전의 비밀번호
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    }else{
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb){

    //plainPassword == 암호화된 비밀번호 체크/ 비밀번호를 복호화 X plain 비밀번호를 암호화한 후 비교
    bcrypt.compare(plainPassword,this.password, function(err, isMatch){
      if (err) return cb(err);
          cb(null, isMatch);

    })
}

userSchema.methods.generateToken = function(cb){
    var user = this;

    // jsonwebtoken을 이용해서 token을 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    //user._id + 'secretToken' = token
    //'secretToken' => user._id
    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    })
}


userSchema.statics.findByToken = function(token, cb){
    var user = this;

    // 토큰을 decode 한다.
    jwt.verify(token, 'secretToken', function(err, decoded){
        //유저 아이디를 이용해서 유저를 찾은 다음에
        //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인

        user.findOne({"_id" : decoded, "token" : token}, function(err, user ){
            if (err) return cb(err);
            cb(null, user);
        })
    })
}
const User = mongoose.model('User', userSchema)

module.exports = {User}