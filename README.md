<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# Features of Our Programming Language Courses Website
## 1. Platform: 
- [x] It is a learnig based website where you can buy multiple programming language course as per your need.
## 2. Video Tutorials:
- [x] You can access dynamic video tutorials and lessons for a visual and impresive learning experience.
## 3. Impressive User Experience:
- [x] We provide you a responsive layout of our website by which you can easily access our website from any device. We also tried to create a user friendly interface in the website. 

<br>
<br>

# Discussing how I managed the states which I used in my assingnment project:

## I used one state in the Cards component.
* ### State: `const [courses, setCourses] = useState([]);`
    This state returns an empty array initially and set it to 'courses'. Then I used useEffect to fetch fake data which I created in the public folder. After fetching the data the 'setCourses' function updates the 'courses' with the fetching data. I used the array.map method on the 'courses' and created a component for each element of the array.

<br>

## I used four states in my Home component. All the states are passed as props to the Cart component.
* ### State 1 : `const [selectedCourses, setSelectedCourses] = useState([]);`
    This state returns an empty array by default whick is 'selectedCourses'. But when a user clicks the select button, the array gets a value. The updated array is assigned to the **'selectedCourses'** by the function 'setSelectedCourses'. When I get the updated 'selectedCourses' in the Cart component then I used forEach loop and get the title of each course object, which is displayed at the cart section of the website.
* ### State-2: `const [newCredit, setnNewCredit] = useState(0);`
    This state returns a value which is 0 by default. Here the 'newCredit' is initially zero. But when a user hits the select button it updates the credit value and assigns it to 'newCredit' by 'setNewCredit' function. I declared a variable called 'totalCredit'. It's value is the clicked course's credit initially. When user clicks multiple select button, I used a forEach loop and get the clicked course's credit updates the 'totalCredit'. And the updated 'totalCredit' value is assigned to 'newCredit' by 'setNewCredit' function. After getting the 'newCredit' in Cart component I used it there to display the total credit in the website. And also set a sweet alert when the value crosses 20.
* ### State-3: `const [newPrice, setNewPrice] = useState(0);`
    I managed this state similarly as the state-2.
* ### State-4: `const [newremainingCredit, setNewRemainingCredit] = useState(20);`
    This state returns a value 20 by default. Which is assigned to 'newRemainingCredit'. I declared a variable `let remainingCredit = 20 - course.credit;`. That means when a user clicks the select button the 'remaininCredit' value gets substracted by the value of 'course.credit' and for multiple clicks I used a forEach loop where it updates the 'remainingCredit'. Then the 'newRemainingCredit' gets updated by 'setNewRemainigCredit' function. After getting the 'newRemainingCredit' in the Cart Component, I used it there to display the remaining credit in the website.
