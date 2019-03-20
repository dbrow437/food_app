const express = require('express');
const passport = require('passpport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

//clientID 35305814190-1c3vr6fm2a4g5sestmnpbi71te96f5cf.apps.googleusercontent.com
//clientSecret Ir9xhxk0YscoE6lPs_79e7NG
passport.use(new GoogleStrategy());



app.listen(5000);