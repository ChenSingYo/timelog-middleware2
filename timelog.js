function timeStamp (time) {
  const fullDate = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
  const fullTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
  const timeStamp = fullDate + ' ' + fullTime
  return timeStamp
}

function logReqResPeriod (req, res, next) {
  const reqTime = new Date()
  const reqTimeStamp = timeStamp(reqTime)
  const reqInfo = req.method + ' from ' + req.originalUrl
  console.log(reqTimeStamp + ' | ' + reqInfo)

  res.on('finish', () => {
    const resTime = new Date()
    const runTimePeriod = `${timeStamp(resTime)} | ${reqInfo} | total time: ${resTime - reqTime} ms`
    console.log(runTimePeriod)
  })
  next()
}
module.exports = logReqResPeriod
