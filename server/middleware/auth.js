const { User } = require('../models/User');

let auth = (req, res, next) => {

    //인증 처리를 하는곳
    // 클라이언트 쿠키에서 토큰을 가져온다. Cookie-parser 이용
    let token = req.cookies.x_auth;

    // 토큰을 복호화 한 후 유저를 찾는다.
    // 유저가 있으면 인증 Okay
    // 유저가 없으면 인증 No
    User.findByToken(token, (err, user) =>{
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true })
        
        req.token = token;
        req.user = user;
        next();
    })
}

//다른 파일에서도 사용할 수 있게 export
module.exports = { auth };