/* import { Urls } from '../../models/shortUrl'; */
const Urls = require('../../models/shortUrl');

const newUrlfunction = async (req, res) => {
  console.log(req.body);
  const shortUrlcreated2 = Math.random().toString(36).substr(2, 6);
  //en el body se podría pasar un pequeño string de personalización para los premium, en el que se sustituyera yus por su  cadena
  const shortUrlcreated = 'www.'+shortUrlcreated2+'.com';
  console.log(shortUrlcreated);
  const newurl = new Urls ({
    username: req.body.username,
    email: req.body.email,
    member: req.body.member,
    premium: req.body.premium,
    password: req.body.password,
    url: req.body.url,
    shorturl: shortUrlcreated,
  })
  console.log(newurl);
  newurl
  .save()
  .then((usuario) => {
    res.json({ mensaje: "Registro creado correctamente", usuario });
  })
  .catch((error) => console.error(error));

}
module.exports = newUrlfunction;