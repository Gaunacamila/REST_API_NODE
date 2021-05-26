const { Router } = require("express");
const router = Router();

const movies = require('../sample.json');
console.log('movies')


router.get('/',(req,res) => {
    res.json(movies);
});

router.post('/',(req,res)=> {
    const { title,clasificación,año
    } = req.body;
    if (title && clasificación && año) {
        const newMovie = {...req.body}
         movies.push();
    }else{ 
        res.send('Wrong Request'); }
    res.send('received');
});

module.exports = router;