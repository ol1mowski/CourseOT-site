import AboutCompany from "./Components/AboutCompany/AboutCompany";
import AboutOt from "./Components/AboutOt/AboutOt";
import CoursDescribe from "./Components/CourseDescribe/CoursDescribe";
import Helpers from "./Components/Helpers/Helpers";
import InproveYourself from "./Components/InproveYourself/InproveYourself";
import MainSite from "./Components/MainSite/MainSite";
import Layout from "./Layout/Layout";


function App() {
  return (
    <div>
      <Layout 
      Main={<MainSite />}  
      Description={<AboutOt />}
      basics={<CoursDescribe />}
      inproveYourself={<InproveYourself />}
      Helpers={<Helpers />}
      AboutCompany={<AboutCompany />}
      />
    </div>
  );
}

export default App;
