const express = require("express");
const router = express.Router();
const Faculties = require('../models/faculties');

//Request get all faculties 
router.get("/", (req, res) => {
    Faculties.find()
        .then(facultie => res.json(facultie))
        .catch(err => res.status(400).json("Error : "));
});

//Request all new Faculties 
router.post("/add", (req, res) => {
    const newFaculties = new Faculties({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        year:req.body.year,      
        designation:req.body.designation,
        
    });

 newFaculties.save().then(()=>res.json("The new member is saved successfully! "))
 .catch(err => res.status(400).json(err));

});

module.exports = router;
