const { Router } = require('express');
const rp = require('request-promise');
const atob = require('atob');
const router = new Router();
const Promise = require('bluebird');
const _ = require('lodash');

function compare(a,b){
  return b.height - a.height;
}

router.get('/films/:id/characters', async (req, res, next) => {

   const sortoption = req.query.sort;
   const url = atob(req.params.id);
   
   try{
    const filmDetail = await rp({url, json:true});
    const charactersPromise = filmDetail.characters.map(url => rp({url, json:true}));
    const characters = await Promise.map(charactersPromise, character => _.pick(character, ['name', 'height', 'gender']));
    const sortedcharacter = characters.sort(compare);
    sortoption === 'desc' ? res.status(200).send(sortedcharacter) : res.status(200).send(sortedcharacter.reverse());
   }catch(e) {
    res.status(500).send(e.message)
   }
   
   
})

module.exports =  router;

