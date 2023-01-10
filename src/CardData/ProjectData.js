import Blog from '../Photo/blog.jpg';
import Abhidha from '../Photo/abhidha-webapp-django.png';
import Albums from '../Photo/private-albums.png';
import Technos from '../Photo/technos-demo-react.png';

const ProjectData = [
    {
        id:1,
        title:'Meesho Clone',
        descrip:'this the the best blog content in the world so mus tvisut it.',
        pimage:Blog,
        urls:'http://localhost:3000/',
        category:'react'
    },
    {
        id:2,
        title:'Abhidha Comminity',
        descrip:'Educational and service-based Django web application,Feature - login system, email system, and currently working on a payment gateway,',
        pimage:Abhidha,
        urls:'https://abhidha.com/',
        category:'Django'
    },
    {
        id:3,
        title:'Private Albums',
        descrip:'Full-stack Django application where the user adds their private photos.Technologies Used: Html , css , javascript ,bootstrap ,python (django) , Mysql..',
        pimage:Albums,
        urls:'https://privatealbum.pythonanywhere.com/',
        category:'Django'
    },
    {
        id:4,
        title:'First React',
        descrip:'This is my first reactjs website. Used Technologies : Html , Css , JavaScript , Bootstrap ,Reactjs',
        pimage:Technos,
        urls:'https://technos-demosite.vercel.app/',
        category:'react'
    },
]
export default ProjectData