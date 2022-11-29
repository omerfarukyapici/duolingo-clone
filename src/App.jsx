/* Slider library */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* React router dom */
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/* Welcome Page */
import Welcome from "./pages/Welcome";
import Abc from "./pages/Abc";
import Stories from "./pages/Stories";
import DuoForSchool from "./pages/DuoForSchool";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CommunityGuide from "./pages/CommunityGuide";
import LearnStories from "./pages/LearnStories";
import Shop from "./pages/Shop";
import Learn from "./pages/Learn";

/* About Us Updated Pages:*//* 
import Career from "./components/about_us/Career/Career";
import CareerStudents from "./components/about_us/Career/CareerStudents";
import CareerAboutUs from "./components/about_us/Career/CareerAboutUs";
import CareerFaq from "./components/about_us/Career/CareerFaq";

import DuoAboutUs from "./components/about_us/DuoAboutUs/DuoAboutUs";
import CoursesMain from './components/about_us/Courses/CoursesMain';
import ReSearch from "./components/about_us/ReSearch/ReSearch";
import Efficacy from './components/about_us/Efficacy/EfficacyMain';
import Press from "./components/about_us/Press/Press"; */








/* Action */
/* import Action from './components/Action/Action';*/



function App() {


  return (
    <div className="App">
      <Router>
        <Switch>

          {/* Home Page */}
          <Route exact path="/">
            <Welcome />
          </Route>


          {/* About Us */}
          {/* <Route path="/efficacy">
              <Efficacy />
            </Route>

            <Route path="/duoaboutus">
              <DuoAboutUs />
            </Route>

            <Route path="/coursemain">
              <CoursesMain />
            </Route>

            <Route path="/research">
              <ReSearch />
            </Route> */}




          {/* BUİLDİNG PAGES */}

          {/* <Route path="/press">
              <Press />
            </Route>

            <Route path="/career">
              <Career />
            </Route>

            <Route path="/careerstudents">
              <CareerStudents />
            </Route>

            <Route path="/careeraboutus">
              <CareerAboutUs />
            </Route>

            <Route path="/careerfaq">
              <CareerFaq />
            </Route> */}






          {/* Privacy And Terms */}
          <Route path="/communityguide">
            <CommunityGuide />
          </Route>


          <Route path="/privacy">
            <Privacy />
          </Route>

          <Route path="/terms">
            <Terms />
          </Route>



          {/* Products */}
          <Route path="/abc">
            <Abc />
          </Route>

          <Route path="/duoforschool">
            <DuoForSchool />
          </Route>

          <Route path="/stories">
            <Stories />
          </Route>



          {/* Learn */}
          <Route path="/learnstories">
            <LearnStories />
          </Route>

          <Route path="/Learn">
            <Learn />
          </Route>


          <Route path="/shop">
            <Shop />
          </Route>


          {/* Action */}

          {/* <Route path="/Action">
              <Action />
            </Route> */}



        </Switch>

      </Router>
    </div>
  );
}

export default App;
