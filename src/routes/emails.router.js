const { getAll, testingEmail, portfolioEmail } = require('../controllers/emails.controllers');
const express = require('express');

const emailRouter = express.Router();

emailRouter.route('/')
  .get(getAll)
  .post(testingEmail)

emailRouter.route('/contact')
  .post(portfolioEmail);

module.exports = emailRouter;