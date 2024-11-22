const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Jhon"
}

// course.courseInstructor;

const {courseInstructor} = course;
console.log(courseInstructor);

const {courseInstructor: instructor} = course;
console.log(instructor);

// const navbar = ({company}) => {
// }
// navbar(company = "Jhon")

// {
//     "name": "Jhon",
//     "coursename": "js in hindi",
//     "price": "free"
// }