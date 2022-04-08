/* import { Urls } from '../../models/shortUrl'; */
const UrlsList = require('../../models/shortUrlList');

const newUrlfunction = async (req, res) => {
    const {username, email, member, premium, password, url } = req.body;
    UrlsList.findOne( {url} ).then((urlregistered) => {
        if (urlregistered) {
            return res.json({ mensaje: "Ya se ha recortado esa url", urlregistered});
        }  
        else {
            let shortUrlcreated2 = Math.random().toString(36).substr(2, 6);
            const shortUrlcreated = 'www.'+shortUrlcreated2+'.com';
            UrlsList.findOne( {shorturl:shortUrlcreated} ).then((isShortUrlcreated) => {
              if (isShortUrlcreated) {
                  return res.json({mensaje: "Ya hay una url igual", shortUrlcreated, isShortUrlcreated});
              }
              else {
                  //en el body se podría pasar un pequeño string de personalización para los premium, en el que se sustituyera yus por su  cadena
                  //o meter aquí un condicional y en caso de que sea member hacer una cosa y si es premiumu otra
                  //aunque lo mejor es si es premium meter una personalizada que venga del fronto de front
                  //y si es solo member quitar el string de pubicidad
                  const newurl = new UrlsList({
                      username: req.body.username,
                      email: req.body.email,
                      member: req.body.member,
                      premium: req.body.premium,
                      password: req.body.password,
                      url: req.body.url,
                      shorturl: shortUrlcreated
                  })
                  newurl.save().then((registro) => {
                  res.json({ mensaje: "Registro creado correctamente", registro });
                  })
                  .catch((error) => console.error(error));
              }
            })
            .catch((error) => console.error(error));
        }  
    })
}


module.exports = newUrlfunction;