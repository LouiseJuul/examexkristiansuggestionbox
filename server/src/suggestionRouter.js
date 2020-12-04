module.exports = (suggestionDB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  router.get('/', async (req, res) => {
    const suggestions = await suggestionDB.getSuggestions(); 
    res.json(suggestions);
  });

  router.get('/:id', async (req, res) => {
    const suggestion = await suggestionDB.getSuggestion(req.params.id);
    res.json(suggestion);
  });

  router.post('/', async (req, res) => {
    // TODO: Implement!
    res.json({msg: "Not implemented :("});
  });

  return router;
}
