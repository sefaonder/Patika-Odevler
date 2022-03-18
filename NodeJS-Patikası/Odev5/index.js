/** @format */

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<h2>Index sayfasina hosgeldiniz</h2>");
  } else if (url === "/hakkimda") {
    res.write("<h2>Hakkimda sayfasina hosgeliniz</h2>");
  } else if (url === "/iletisim") {
    res.write("<h2>İletisim sayfasina hosgeliniz</h2>");
  } else {
    res.write("<h2>404 not found</h2>");
  }
  res.end();
});
const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu ${port} de başlatıldı`);
});
