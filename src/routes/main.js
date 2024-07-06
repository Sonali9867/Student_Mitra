const express = require('express')
const app = express()
const { route } = require('express/lib/application')

const Detail = require("../models/Detail")
const Slider = require("../models/Slider");
const Service = require("../models/Service")
const CourseButtons = require("../models/courseButtons")
const Courses = require("../models/Courses")
const Contact = require("../models/Query")
const Countries = require("../models/Countries");
const LoginCollection = require('../models/LoginCollection');
const routes = express.Router()


routes.get("/", async (req,res)=>{
  const details = await Detail.findOne({_id: "65e4507055d676a2ec150e21"})
  const slides = await Slider.find()
  const services = await Service.find()
  const countries = await Countries.find()

  res.render("index",{
    details:details,
    slides:slides,
    services:services,
    countries:countries,
  });
});

routes.get('/courses', async (req,res)=>{
  const details = await Detail.findOne({_id: "65e4507055d676a2ec150e21"})
  const course_buttons = await CourseButtons.find()
  const courses = await Courses.find()
  res.render("courses", {
    details:details,
    course_buttons:course_buttons,
    courses:courses
  });
});

routes.get('/login', async (req,res) => {
  res.render("login", {

  });
});

routes.post('/register', async(req,res) =>{
  const data= {
    name: req.body.name,
    password: req.body.password,
    email: req.body.password
  }

  await LoginCollection.insertMany([data]);

  res.render("index",{

  })
})


routes.get('/contact-us',async(req,res) =>{
  res.render("contact-us", {

  });
});

routes.get('/about',async(req,res) =>{
  res.render("about",{

  });
})

// routes.get('/courses', async (req,res) => {
//   const course_buttons = await CourseButtons.find()
//   res.render("courses", {
    
//   });
// });

routes.post("/process-contact-form",async (request, response) => {
  console.log("Form is submitted.")
  console.log(request.body)
  //save the data to db
  try{
    const data = await Contact.create(request.body);
    console.log(data);
    //response.status(200).send({ message: "Query submitted successfully." });
    response.redirect("/");
    //send a response to the client indicating success
    
  }
  catch(e){
    console.log(e);
    response.status(500).render('errorPage', { errorMessage: "An error occurred. Please try again later." });
  }
})
module.exports = routes