import { Link } from "react-router-dom";

const subTitle = "Popular Category";
const title = "Popular Category For Learn";
const btnText = "Browse All Categories";

const categoryList = [
  {
    li1 : "Understanding Digital Marketing",
    li2 : "Domain & Hosting management",
    li3 : "Mastering WordPress",
    li4 : "Using Canva for Designing",
    li5 : "Social Media Marketing",
    li6 : "Google Local SEO",
    li7 : "OnPage SEO",
    li8 : "Off-Page SEO",
    li9 : "Facebook Ads",
  },
  {
    li1: "Instagram Ads",
    li2: "LP Design for Lead Generation",
    li3: "Google Search Console",
    li4: "Google Analytics (GA4)",
    li5: "Google My Business (Maps)",
    li6: "Google Search Ads",
    li7: "Google Display Ads",
    li8: "Google Video Ads",
    li9: "Google App Marketing",
  },
  {
    li1: "Google Shopping Ads",
    li2: "Google ReMarketing",
    li3: "Audience Tracking & Management",
    li4: "Google Tag Manager",
    li5: "Email Marketing",
    li6: "Blogging & Adsense",
    li7: "Affiliate Marketing",
    li8: "Influencer Marketing",
    li9: "Digital Marketing Strategy",
  },
];

const Category = () => {
  return (
    <div
      className="category-section "
      style={{ paddingTop: "40px", paddingBottom: "40px" }}
    >
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-2 justify-content-between row-cols-xl-3 row-cols-md-3 row-cols-sm-1 row-cols-1">
            {categoryList.map((val, i) => (
              <div className="col" key={i}>
                <ul className="h5" style={{color:"black", listStyleType:"none"}}>
                    <li style={{marginBottom:"6px"}}> ✔️ {val.li1} </li>
                    <li style={{marginBottom:"6px"}}> ✔️ {val.li2} </li>
                    <li style={{marginBottom:"6px"}}> ✔️ {val.li3} </li>
                    <li style={{marginBottom:"6px"}}> ✔️ {val.li4} </li>
                    <li style={{marginBottom:"6px"}}> ✔️ {val.li5} </li>
                    <li style={{marginBottom:"6px"}}> ✔️ {val.li6} </li>
                    <li style={{marginBottom:"6px"}}> ✔️ {val.li7} </li>
                    <li style={{marginBottom:"6px"}}> ✔️ {val.li8} </li>
                    <li style={{marginBottom:"6px"}}> ✔️ {val.li9} </li>
                </ul>
              </div>
            ))}
          </div>
          {/* <div className="text-center mt-5">
                        <Link to="/course" className="lab-btn"><span>{btnText}</span></Link>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
