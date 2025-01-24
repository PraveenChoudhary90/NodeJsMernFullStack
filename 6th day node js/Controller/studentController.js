

const homepage = ("/home",(req,res)=>{
    console.log("this is student home page");
})


const aboutpage = ("/aboutstu",(req,res)=>{
    console.log("this is student about page");
})

const coursepage=("/course",(req,res)=>{
    console.log("this is student course page");
})
const ourfees = ("/ourfees",(req,res)=>{
    console.log("this is student ourfees page");
})

module.exports = {
    homepage,
    aboutpage,
    coursepage,
    ourfees
}


