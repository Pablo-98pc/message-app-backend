const User = require('../../models/users4');
const getAll = async (req, res) => {
    
      try {
      User.findAll().then((usuario) => {
        if (!usuario) {
          return res.json({
            mensaje: "No hay usuarios",
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
  };
  
module.exports = getAll;
