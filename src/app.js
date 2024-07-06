const express = require("express")  //done
const hbs = require("hbs")
const app = express() //done
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const routes = require('./routes/main')
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const Service = require("./models/Service")
const CourseButtons = require("./models/courseButtons")
const Courses = require("./models/Courses")
const Countries = require("./models/Countries")
const LoginCollection = require("./models/LoginCollection")
const path = require("path")

app.use(bodyParser.urlencoded({
  extended:true
}))
app.use(express.json())
app.use('/static',express.static("public"))
app.use('',routes)

//(template engine)
app.set('view engine', 'hbs') //done
app.set("views","views")
hbs.registerPartials("views/partials")
//db connection

// mongoose.connect("mongodb:27017//localhost/website_tut",()=>{
//   if(err)
//   console.log("error connecting...")
//   else
//   console.log("db connected")
// })

mongoose.connect("mongodb://localhost:27017/website_tut")
  .then(() => {
    console.log("Connected to MongoDB successfully");
    
//     Courses.create([
//       {
//         imageUrl: "static/images/courses/Django/django-1.jpg",
//         courseLink: "https://www.geeksforgeeks.org/python-data-types/?ref=lbp",
//         courseType: "django"
//       },
//       {
//         imageUrl: "static/images/courses/Django/django-2.jpg",
//         courseLink: "https://www.geeksforgeeks.org/django-forms/?ref=lbp",
//         courseType: "django"
//        },
//       {
//         imageUrl: "static/images/courses/Django/django-3.jpg",
//         courseLink: "https://www.geeksforgeeks.org/django-basics/?ref=lbp",
//         courseType: "django"
//       },
//       {
//         imageUrl: "static/images/courses/DSA/dsa-1.jpg",
//         courseLink: "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
//         courseType: "dsa"
//       },
//       {
//         imageUrl: "static/images/courses/DSA/dsa-2.jpg",
//         courseLink: "https://www.geeksforgeeks.org/advanced-data-structures/?ref=lbp",
//         courseType: "dsa"
//       },
//       {
//         imageUrl: "static/images/courses/DSA/dsa-3.jpg",
//         courseLink: "https://www.geeksforgeeks.org/introduction-to-data-structures/?ref=lbp",
//         courseType: "dsa"
//       },
//       {
//         imageUrl: "static/images/courses/DSA/dsa-4.jpg",
//         courseLink: "https://www.geeksforgeeks.org/data-structures/linked-list/?ref=lbp",
//         courseType: "dsa"
//       },
//        {
//         imageUrl: "static/images/courses/DSA/dsa-5.jpg",
//         courseLink: "https://www.geeksforgeeks.org/array-data-structure/?ref=lbp",
//         courseType: "dsa"
//       },
//       {
//         imageUrl: "static/images/courses/ML/ml-1.jpg",
//         courseLink: "https://www.geeksforgeeks.org/machine-learning-algorithms/",
//         courseType: "ml"
//       }, 
//        {
//         imageUrl: "static/images/courses/ML/ml-2.jpg",
//         courseLink: "https://www.geeksforgeeks.org/types-of-machine-learning/",
//         courseType: "ml"
//       }, 
//       {
//         imageUrl: "static/images/courses/ML/ml-3.jpg",
//         courseLink: "https://www.geeksforgeeks.org/what-is-machine-learning/",
//         courseType: "ml"
//       },   
//       {
//         imageUrl: "static/images/courses/ML/ml-4.jpg",
//         courseLink: "https://www.geeksforgeeks.org/types-of-machine-learning/",
//         courseType: "ml"
//       },
//       {
//         imageUrl: "static/images/courses/NodeJS/nodejs-1.jpeg",
//         courseLink: "https://www.geeksforgeeks.org/nodejs/",
//         courseType: "nodejs"
//       },  
//       {
//         imageUrl: "static/images/courses/NodeJS/nodejs-2.jpeg",
//         courseLink: "https://www.geeksforgeeks.org/nodejs/?ref=lbp",
//         courseType: "nodejs"
//       },  
//       {
//         imageUrl: "static/images/courses/NodeJS/nodejs-3.jpeg",
//         courseLink: "https://www.geeksforgeeks.org/node-js-introduction/?ref=lbp",
//         courseType: "nodejs"
//       },  
//       {
//         imageUrl: "static/images/courses/NodeJS/nodejs-4.jpeg",
//         courseLink: "https://www.geeksforgeeks.org/node-js-introduction/#q4",
//         courseType: "nodejs"
//       },
//       {
//         imageUrl: "static/images/courses/Python/python-1.jpg",
//         courseLink: "https://www.geeksforgeeks.org/python-programming-language/",
//         courseType: "python"
//       },
//       {
//         imageUrl: "static/images/courses/Python/python-2.jpg",
//         courseLink: "https://www.geeksforgeeks.org/python-programming-language/?ref=lbp",
//         courseType: "python"
//       },   
//       {
//         imageUrl: "static/images/courses/Python/python-3.jpg",
//         courseLink: "https://www.geeksforgeeks.org/python-dictionary/?ref=lbp",
//         courseType: "python"
//       },   
//       {
//         imageUrl: "static/images/courses/Python/python-4.jpg",
//         courseLink: "https://www.geeksforgeeks.org/python-lists/?ref=lbp",
//         courseType: "python"
//       },   
//       {
//         imageUrl: "static/images/courses/Python/python-5.jpg",
//         courseLink: "https://www.geeksforgeeks.org/python-data-types/?ref=lbp",
//         courseType: "python"
//       },   
//       {
//         imageUrl: "static/images/courses/Python/python-6.jpg",
//         courseLink: "https://www.geeksforgeeks.org/python-programming-language/?ref=lbp",
//         courseType: "python"
//       },          
// ])
    
    // CourseButtons.create([
    //     {
    //       class:"active",
    //       buttonText: "ALL",
    //          data_filter: "all"
    //     },
    //     {
    //       class:"",
    //       buttonText:"PYTHON",
    //          data_filter: "python"
    //     },
    //     {
    //       class:"",
    //       buttonText:"DJANGO",
    //          data_filter: "django"
    //     },
    //     {
    //       class:"",
    //       buttonText:"NODE JS",
    //          data_filter: "nodejs"
    //     },
    //     {
    //       class:"",
    //       buttonText:"DSA",
    //          data_filter: "dsa"
    //     },
    //     {
    //       class:"",
    //       buttonText:"ML",
    //          data_filter: "ml"
    //     }
    //   ])
    // Detail.create({
    //   brandName: "Info Technical Solution",
    //   brandIconUrl: "https://yt3.googleusercontent.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s176-c-k-c0x00ffffff-no-rj",
    //   links:[
    //     {
    //       label:"Home",
    //       url: "/"
    //     },
    //     {
    //       label: "Services",
    //       url: "/services"
    //     },
    //     {
    //       label: "Gallery", 
    //       url: "/gallery"
    //     }, 
    //     {
    //       label: "About",
    //       url: "/about"
    //     },
    //     {
    //       label: "Contact Us",
    //       url: "/contact-us"
    //     }
    //   ],
    // })
  //   Slider.create([
  //     {
  //       title:'Learn Java in very easy manner',
  //       subtitle: 'Java is one of the most popular programming languages',
  //       imageUrl: "/static/images/sliders/s1.png"
  //     },
  //     {
  //       title: 'What is Django in python?',
  //       subTitle: 'Django is most famous web framework of python',
  //       imageUrl: 'static/images/sliders/s2.png'
  //     },
  //     {
  //       title: 'What about node js?',
  //       subTitle: 'Node js is run-time environment',
  //       imageUrl: 'static/images/sliders/s3.png'
  //     }
  //   ])
      // Service.create([
      //   {
      //     icon: 'fab fa-accusoft',
      //     title: 'Provide Best Course',
      //     description: 'We provide best courses that help our students learning and in placements',
      //     linkText: 'Explore',
      //     link: '#'
      //   },
      //   {
      //     icon: 'fas fa-project-diagram',
      //     title: 'Learn building projects',
      //     description: 'Explore real-time project experience.',
      //     linkText: 'Start',
      //     link: '#'
      //   },
      //   {
      //     icon: 'fas fa-unlock',
      //     title: 'Unlock your potential',
      //     description: 'Start solving problems.',
      //     linkText: 'Get Started',
      //     link: '#'
      //   }
      // ])

  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });




  
// })

app.listen(process.env.PORT | 5555,()=>{
  console.log("server started!")
})