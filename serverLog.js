function serverLog(req, res, next) {
  const method = req.method
  const url = req.originalUrl
  const reqTime = Date.now()

  res.on('finish', () => {
    const resTime = Date.now()

    const diffTime = resTime - reqTime

    const currentReqTime = new Date(reqTime).toLocaleString('zh', { timeZone: 'Asia/Taipei', hour12: false })

    console.log(`${currentReqTime} | ${method} form ${url} total-time: ${diffTime} ms`)
  })
  next()
}

module.exports = serverLog