var express = require('express');
var mongoose= require('mongoose');
var bodyParser=require('body-parser');
var http=require('http');
var db=mongoose.connect('mongodb://localhost:27017/yip');
var app = express();
var passport = require('passport');
var localStrategy=require('passport-local').Strategy;
var cookieParser= require('cookie-parser');
var session = require('express-session');
var Schema= mongoose.Schema;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(session({secret:'this is the secret'}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));






passport.use(new localStrategy(function(username,password,done){
	UserModel.findOne({username: username, password: password},function(err,user){
		if(user){
			return done(null,user);
		}
		return done(null,false,{message: 'unable to login'});
	});
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
 	done(null,user);
});

var auth = function(req,res,next){
	if(!req.isAuthenticated()){
		res.send(401);
	}
	else next();
};



var UserSchema = new Schema({
	username: String,
	password: String,
	posts: [String]
});

var UserModel = mongoose.model('User',UserSchema);




app.post("/login",passport.authenticate('local'),function(req,res){
	res.json(req.user);
});

app.post('/signup',function(req,res){
	UserModel.findOne({username: req.body.username, password: req.body.password},function(err,user){
		if(user){
			res.send("User already exists");
			return;
		}
		else{
			var newUser = new UserModel(req.body);
			newUser.save(function(err,user){
			req.login(user,function(err){
				if(err) return next(err);
				res.json(user);
				});
			});
		}
	});
});


app.post('/logout',function(req,res){
	req.logOut();
	res.send(200)
});


app.get('/loggedin', function(req,res){
	res.send(req.isAuthenticated() ? req.user : '0');
});


app.listen(3000);