const express = require("express");
const route = express.Router();
const Post = require("../models/post.model");


posts=[
  { _id: "1", titre: "ubuntu", contenu: "systeme d exploitation" },
  { _id: "2", titre: "tinycore1", contenu: "systeme d exploitation" },
  { _id: "3", titre: "tinycore2", contenu: "systeme d exploitation" },
  { _id: "4",titre: "vpc", contenu: "systeme d exploitation" },
];

// GET
route.get("/", (req, res) => {

  Post.find({})
  .then((listposts) => {
    console.log(listposts);
    res.status(200).json(listposts);
  })
  .catch((err) => {
    res.status(404).json({ message: "posts not found!" });
    console.log("post non trouvé !");
  });

});



// GET/:id
route.get("/:id", (req, res) => {


  Post.findById(req.params.id)
    .then((monApp) => {
      console.log(monApp);
      res.status(200).json(monApp);
    })
    .catch((err) => {
      res.status(404).json({ message: "post not found!" });
      console.log("post non trouvé !");
    });


});

// POST
route.post("/", (req, res) => {
  Post.create({ "titre": req.body.titre, "contenu": req.body.contenu })
    .then((monApp) => {
        console.log(monApp);
        res.status(200).json(monApp);
      }
    );
});

// PUT
route.put("/:id", (req, res) => {


  Post.updateOne({_id:req.params.id},{titre:req.body.titre,contenu: req.body.contenu})
      .then((mes) => {
        console.log(mes);
        res.status(200).json(mes);
      })
      .catch((err) => {
        res.status(404).json({ message: "post not found!" });
        console.log("post non trouvé !");
      });

  });

// DELETE
route.delete("/posts/:id", (req, res) => {


  Post.deleteOne({_id:req.params.id})
      .then((mes) => {
        console.log(mes);
        res.status(200).json(mes);
      })
      .catch((err) => {
        res.status(404).json({ message: "post not found!" });
        console.log("delete ok!");
      });


  });

module.exports = route;
