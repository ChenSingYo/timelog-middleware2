function logReqResPeriod (req, res, next) {
  const reqTime = new Date()
  const reqTimeStamp = reqTime.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', hour12: false }).replace(/\//g, '-')
  const reqInfo = req.method + ' from ' + req.originalUrl
  console.log(reqTimeStamp + ' | ' + reqInfo)

  res.on('finish', () => {
    const resTime = new Date()
    const resTimeStamp = resTime.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', hour12: false }).replace(/\//g, '-')
    const runTimePeriod = `${resTimeStamp} | ${reqInfo} | total time: ${resTime - reqTime} ms`
    console.log(runTimePeriod)
  })
  next()
}
module.exports = logReqResPeriod
