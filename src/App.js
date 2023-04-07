import AboutCompany from "./Components/AboutCompany/AboutCompany";
import AboutOt from "./Components/AboutOt/AboutOt";
import CoursDescribe from "./Components/CourseDescribe/CoursDescribe";
import Helpers from "./Components/Helpers/Helpers";
import InproveYourself from "./Components/InproveYourself/InproveYourself";
import MainSite from "./Components/MainSite/MainSite";
import Layout from "./Layout/Layout";
import Form from "./Components/Form/Form";


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
      Formulage={<Form />}
      />
    </div>
  );
}

export default App;
