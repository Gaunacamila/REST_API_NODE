const { Router } = require("express");
const router = Router();

const movies = require('../sample.json');
console.log('movies')


router.get('/',(req,res) => {
    res.json(movies);
});

router.post('/',(req,res)=> {
    const { Title,Director,year, raiting
    } = req.body;
    if (Title && Director && year && raiting) {
        const id = movies.length + 1;
        const newMovie = {...req.body,id};
         movies.push(newMovie);
         res.json(movies);
    }else{ 
        res.send('ta mal'); }
});

module.exports = router;