function logReqResPeriod (req, res, next) {
  const reqTime = new Date()
  const fullDate = `${reqTime.getFullYear()}-${reqTime.getMonth() + 1}-${reqTime.getDate()}`
  const fullTime = `${reqTime.getHours()}:${reqTime.getMinutes()}:${reqTime.getSeconds()}`

  console.log(`${fullDate} ${fullTime} | ${req.method} from ${req.originalUrl}`)

  res.on('finish', () => {
    const resTime = new Date()
    const resDuration = resTime - reqTime
    const fullDate = `${resTime.getFullYear()}-${resTime.getMonth() + 1}-${resTime.getDate()}`
    const stamps = `${fullDate} | ${req.method} from ${req.originalUrl} | total time: ${resDuration} ms`
    console.log(stamps)
  })

  next()
}

module.exports = logReqResPeriod
