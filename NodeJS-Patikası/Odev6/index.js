/** @format */

const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
  const url = ctx.URL;
  if (url.pathname === "/") {
    ctx.body = "<h1>Index sayfasina hosgeldiniz</h1>";
  } else if (url.pathname === "/hakkimda") {
    ctx.body = "<h1>Hakkimda sayfasina hosgeldiniz</h1>";
  } else if (url.pathname === "/iletisim") {
    ctx.body = "<h1>Iletisim sayfasina hosgeldiniz</h1>";
  } else {
    ctx.body = "<h1>404 Not Found</h1>";
  }
});

app.listen(3001);
