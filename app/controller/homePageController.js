const Games = require('../models/games');

const homePageController = {
    
    home: async (req,res) => {
        try {
            const games = await Games.findAll()
            console.log(games);
            res.render('home', { games });
        
        } catch(err) {
            console.log(err);
            res.status(500).send('Server Error');
        }
    }





}

module.exports = homePageController;