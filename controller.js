const router = require('express').Router();
const Service = require('./service');
const httpResponse = require('./http-response');

const service = new Service();

const users = [];

router.post('/user', (request, response) => {
  service.saveUser(request).then(result => {
    console.log('here');
    httpResponse.successHandler(response, result, 'User added successfully');
  }).catch(error => {
    httpResponse.errorHandler(response, error, 'Error during user add.')
  })
})

module.exports = router;