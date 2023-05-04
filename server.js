const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const middlewares = jsonServer.defaults()

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// const port = process.env.PORT || 'https://burger-queen-api-mock-nib4.vercel.app/';

const rules = auth.rewriter(JSON.parse(fs.readFileSync(path.join(__dirname, 'routes.json'))));

// /!\ Bind the router db to the app
app.db = router.db

// You must apply the auth middleware before the router
app.use(middlewares);
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port, () => {
    console.log(`JSON Server is running in ${port}`);
});

const tmpdir = process.env.TMPDIR || 'https://burger-queen-api-mock-nib4.vercel.app/tmp'; // Obtener la ruta de la carpeta temporal o utilizar una ruta predeterminada como /tmp

fs.writeFile(`${tmpdir}/nombre_del_archivo.txt`, 'contenido_del_archivo', function (err) {
  if (err) throw err;
  console.log('Archivo creado!');
});