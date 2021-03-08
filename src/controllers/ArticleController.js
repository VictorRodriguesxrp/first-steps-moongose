const mongoose = require("mongoose");
const articleModel = require('../models/article')

mongoose.connect("mongodb://localhost:27017/aprendendoMongo", {useNewUrlParser : true, useUnifiedTopology: true});

//carregando o Schema no Model
const Article = mongoose.model("Article", articleModel);

module.exports = {
  async index (req, res) {
    try {
      const { _id } = req.query;

      if (_id) {
        const results = await Article.findById({_id});
        return res.json(results);
      } else {
        const results = await Article.find({});
        return res.json(results);
      }  
    } catch(err) {
      console.log(err);
    }
  },
  async create (req, res) {
  // salvando os conteúdo no Model
  //req.body
    try {
      const artigo = new Article(req.body);

      artigo 
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "Artigo criado com sucesso!",
            createdArticle: result
          })
        })

    } catch (err) {
      console.log(err)
      return res.status(500).json({
        error: err
      });
    }
  },
  async update (req, res) {
    try {
      Article.findByIdAndUpdate(req.params._id, req.body)
        .then(() => {
          return res.status(200).json({
            message: "Produto alterado com sucesso"
          })
        })
    } catch (err) {
      console.log(err);
    }
  },
  async delete (req, res) {
    try {
      Article.findByIdAndDelete(req.params)
        .then(() => {
          res.status(200).json({
            "message": "Produto deletado por sucesso!"
          })
        })
    } catch (err) {
      console.log(err);
    }
  }
}














//cadastro
