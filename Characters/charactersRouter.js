const { Router } = require('express');
const rp = require('request-promise');
const atob = require('atob');
const router = new Router();
const Promise = require('bluebird')
const _ = require('lodash')

router.get('/films/:id/characters', async (req, res, next) => {

   const sortoption = req.query.sort
   const url = atob(req.params.id);
   
   try{
    const filmDetail = await rp({url, json:true})
    const charactersPromise = filmDetail.characters.map(url => rp({url, json:true}))
    const characters = await Promise.map(charactersPromise, character => _.pick(character, ['name', 'height', 'gender']))

    sortoption === 'desc' ? res.status(200).send(characters.sort(function(a, b){
        return b.height-a.height
    })) : res.status(200).send(characters.sort(function(a,b){ 
        return a.height-b.height
    }))
   }catch(e) {
    res.status(500).send(e.message)
   }
   
   
})

module.exports =  router;

