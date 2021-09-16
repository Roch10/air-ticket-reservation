class Service {
  saveUser(request) {
    return new Promise((resolve, reject) => {
      resolve("user added");
    })
  }
}


module.exports = Service;