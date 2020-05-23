const { Router } = require('express');
const {baseUrl} = require('../constants');
const rp = require('request-promise');
const router = new Router();
const btoa = require('btoa');


router.get('/films', async (req, res, next) => {
    const film = req.query.searchterm
    const url = `${baseUrl}/films/?search=${film}`
    try{
        const films = await rp({url, json:true})
        return res.status(200).send(films.results.map(film => {
            return {
                    "id": btoa(film.url),
                    "title":film.title
                    }
        }))
    }catch(e){
        res.status(500).send(e.message)
    }
   
})

module.exports =  router;
