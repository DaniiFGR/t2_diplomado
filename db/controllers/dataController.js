
const data = require('../models').data_model;

module.exports = {
  listData: async (req, res) => {
    try {
      const datas = await data.findAll({});
      // res.send(datas);
      res.render('index', { list: datas });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};