const User = require('../../models/users4');
const getUserProfile2 = async (req, res) => {
    const { userid } = req.params;
    if (userid.length === 24) {
      try {
      User.findById(userid).then((usuario) => {
      /* User.find().then((usuario) => { *///las dos peticiones funcionan, si por ejemplo el campo nombre no exite devolvera solo 
        if (!usuario) {// un usuario,y si poneomms el find a secas, devolvera todos e ignnorara el parametro si no lo encuntra
          return res.json({
            mensaje: "No se encontro ningun usuario con esa ID",
          });
        } else {
            console.log('encontrado');
            console.log(usuario);
            console.log(typeof(usuario));
          res.json(usuario);
        }
      });
    }    
    catch (error) {
        console.log(err);
      }    
      } 
 else {
      res.json({ mensaje: "Estas enviando una contraseña incorrecta" });
    }
  };
  
module.exports = getUserProfile2;
