const logger = (req, res, next) => {   //next is the middleware function
    const method = req.method
    const url = req.url
    const time = new Date().getDate()
    console.log(method, url, time)
    next()
  }

module.exports = logger