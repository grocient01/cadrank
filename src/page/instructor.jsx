import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Achievement from "../component/section/achievement";
import Student from "../component/section/student";

const subTitle = "Teach on edulon";
const title = "Discover Your Potential. Make A Global Impact.";
const btnText = "Browse All Categories";

let categoryItemList = [
    {
        imgUrl: 'assets/images/category/icon/15.jpg',
        imgAlt: 'category',
        title: '1000+',
        desc: 'Students are working  in world top MNCs ',
    },
    {
        imgUrl: 'assets/images/category/icon/16.jpg',
        imgAlt: 'category',
        title: '15k to 45k/month',
        desc: 'Initial Salary of any Candidate in this field',
    },
    {
        imgUrl: 'assets/images/category/icon/17.jpg',
        imgAlt: 'category',
        title: 'Help Shape Future',
        desc: 'Like graphic design, business anaytics coding ',
    },
    {
        imgUrl: 'assets/images/category/icon/17.jpg',
        imgAlt: 'category',
        title: 'Help Shape Future',
        desc: 'Like graphic design, business anaytics coding',
    },
]



const InstructorPage = () => {
    return (
        <Fragment>
            
            
            <div className="category-section  section-bg style-3" style={{paddingTop:"38px", paddingBottom:"38px"}}>
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">{subTitle}</span>
                        <h2 className="title">{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center row-cols-lg-4 row-cols-sm-2 row-cols-1">
                            {categoryItemList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="category-item text-center">
                                        <div className="category-inner" style={{padding:"8px"}}>
                                            {/* <div className="category-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div> */}
                                            <div className="category-content">
                                                <Link to="/signup"><h4 className="text-danger">{val.title}</h4></Link>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default InstructorPage;