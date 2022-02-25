/* Slider library */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* React router dom */
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/* Welcome Page */
import WelcomePage from './components/welcome_page/WpMain';

/* About Us Updated Pages:*/
import Career from "./components/about_us/Career/Career";
import CareerStudents from "./components/about_us/Career/CareerStudents";
import CareerAboutUs from "./components/about_us/Career/CareerAboutUs";
import CareerFaq from "./components/about_us/Career/CareerFaq";

import DuoAboutUs from "./components/about_us/DuoAboutUs/DuoAboutUs";
import CoursesMain from './components/about_us/Courses/CoursesMain';
import ReSearch from "./components/about_us/ReSearch/ReSearch";
import Efficacy from './components/about_us/Efficacy/EfficacyMain';
import Press from "./components/about_us/Press/Press";

/* Privacy And Terms */
import Privacy from './components/Privacy_and_Terms/Privacy/Privacy';
import CommunityGuide from './components/Privacy_and_Terms/CommunityGuide/CommunityGuideMain';
import Terms from './components/Privacy_and_Terms/Terms/Terms';

/* Products */
import DuoForSchool from './components/products/DuoForSchool/DuoForSchool';
import Stories from './components/products/Stories/Stories';
import Abc from './components/products/Abc/Abc';

/* Learn */
import Learn from "./components/Learn/LearnPage/Learn";
import LearnStories from "./components/Learn/StoriesPage/LearnStories";
import Shop from "./components/Learn/ShopPage/Shop";

/* Testing Counter */
import Counter from "./components/Counter";


/* Action */
import Action from './components/Action/Action';



function App() {
  

  return (
    <div className="App">
      <Router>
          <Switch>


            {/* Counter Examples for testing */}

            <Route path="/Counter">
              {/* 
            */}
              <Counter />
            </Route>


            {/* Home Page */}
            <Route exact path="/">
              {/* 
            */}
              <WelcomePage />
            </Route>


            {/* About Us */}
            <Route path="/efficacy">
              {/* 
            */}
              <Efficacy />
            </Route>

            <Route path="/duoaboutus">
              {/* 
            */}
              <DuoAboutUs />
            </Route>

            <Route path="/coursemain">
              {/* 
            */}
              <CoursesMain />
            </Route>

            <Route path="/research">
              {/* 
            */}
              <ReSearch />
            </Route>




            {/* BUİLDİNG PAGES */}

            <Route path="/press">
              {/* 
            */}
              <Press />
            </Route>

            <Route path="/career">
              {/* 
             */}
              <Career />

            </Route>

            <Route path="/careerstudents">
              {/* 
             */}
              <CareerStudents />

            </Route>

            <Route path="/careeraboutus">
              {/* 
             */}
              <CareerAboutUs />

            </Route>

            <Route path="/careerfaq">
              {/* 
             */}
              <CareerFaq />

            </Route>






            {/* Privacy And Terms */}
            <Route path="/communityguide">
              {/* 
            */}
              <CommunityGuide />
            </Route>

            <Route path="/privacy">
              {/* 
            */}
              <Privacy />
            </Route>

            <Route path="/terms">
              {/* 
            */}
              <Terms />
            </Route>



            {/* Products */}
            <Route path="/abc">
              {/* 
            */}
              <Abc />
            </Route>

            <Route path="/duoforschool">
              {/* 
            */}
              <DuoForSchool />
            </Route>

            <Route path="/stories">
              {/* 
            */}
              <Stories />
            </Route>



            {/* Learn */}
            <Route path="/Learn">
              {/* 
            */}
              <Learn />
            </Route>

            <Route path="/LearnStories">
              {/* 
            */}
              <LearnStories />
            </Route>

            <Route path="/Shop">
              {/* 
            */}
              <Shop />
            </Route>


            {/* Action */}

            <Route path="/Action">
              {/* 
            */}
              <Action />
            </Route>



          </Switch>
          
      </Router>
    </div>
  );
}

export default App;
