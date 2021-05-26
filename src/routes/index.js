const { Router }  = require('express');
//Requiero metodo llamado Router para las nuevass rutas del servidor 
const router = Router();

router.get('/test',(req,res) => {
    const data = {
        "name": "Google",
        "Website":"Google.com"
    };
    res.json(data);
});

module.exports = router;
