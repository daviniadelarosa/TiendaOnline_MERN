const router = require("express").Router();
const pages = require("../controllers/pages.controllers")
 

//Rutas de inicio
router.get("/",pages.home);


 

module.exports = router;