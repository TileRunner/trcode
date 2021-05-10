export default (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(process.env.NEXT_PUBLIC_CODER_MESSAGE);
}
  