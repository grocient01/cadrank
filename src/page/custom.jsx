import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import About from "../component/section/about";
import Achievement from "../component/section/achievement";
import Banner from "../component/section/banner";
import Blog from "../component/section/blog";
import Category from "../component/section/category";
import Course from "../component/section/course";
import Instructor from "../component/section/instructor";
import Sponsor from "../component/section/sponsor";
import Student from "../component/section/student";
import Feature from "../component/section/feature";
import Skill from "../component/section/skill";
import CategoryTwo from "../component/section/category-2";
import InstructorPage from "./instructor";
import Register from "../component/section/register";


const Custom = () => {
    return (
        <Fragment>
            <Header />
            <Banner />
            <Sponsor />
            <Category />
            {/* <Feature/> */}
            <Skill/>
            {/* <Course /> */}
            {/* <About /> */}
            <InstructorPage/>
            {/* <Instructor /> */}
            {/* <Student /> */}
            {/* <Blog /> */}
            <CategoryTwo/>
            <Register/>
            <Achievement />
            <Footer />
        </Fragment>
    );
}
 
export default Custom;