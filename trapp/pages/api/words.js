export default (_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 500
  res.send('This api call is no longer supported')
}

