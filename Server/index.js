const express = require('express');
const passport = require('passpport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());



app.listen(5000);