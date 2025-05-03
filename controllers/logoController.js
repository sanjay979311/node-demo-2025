// controllers/logoController.js

const Logo = require('../models/logoModel');

const getLogo = async (req, res) => {

    console.log("this is logo get route")
  try {
   let response = await Logo.find({});
    // console.log("logo err",response)
    return res.json(response);
  } catch (error) {
    console.error('Error fetching logos:', error);
    res.status(500).json({ error: 'Failed to fetch logos' });
  }
};

module.exports = {
  getLogo,
};
