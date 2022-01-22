const path = require('path');

const express = require('express');
const session = require('session');
const csrf = require('csurf');

const sessionConfig = require('./config/session');
const db = require('./data/database');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog');
const authMiddleware = require('./middlewares/auth-middleware');
const addCSRFTokenMiddleware = require('./middlewares/csrf-token-middleware');


