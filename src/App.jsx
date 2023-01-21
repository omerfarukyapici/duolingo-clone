import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
import ReSearch from "./pages/ReSearch";
import Press from "./pages/Press";
import Efficacy from "./pages/Efficacy";
import Courses from "./pages/Courses";
import Career from "./pages/Career";
import CareerStudent from "./pages/CareerStudent";
import CareerAboutUs from "./pages/CareerAboutUs";
import CareerFaqs from "./pages/CareerFaqs";
import DuoAboutUs from "./pages/DuoAboutUs";
import Action from "./pages/Action";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Welcome /></Route>
          <Route path="/research"><ReSearch /></Route>
          <Route path="/efficacy"> <Efficacy /></Route>
          <Route path="/courses"><Courses /></Route>
          <Route path="/duoaboutus"><DuoAboutUs /></Route>
          <Route path="/press"><Press /></Route>
          <Route path="/career"><Career /></Route>
          <Route path="/careerstudents"> <CareerStudent /></Route>
          <Route path="/careeraboutus"><CareerAboutUs /></Route>
          <Route path="/careerfaq"><CareerFaqs /></Route>
          <Route path="/communityguide"><CommunityGuide /></Route>
          <Route path="/privacy"><Privacy /></Route>
          <Route path="/terms"><Terms /></Route>
          <Route path="/abc"><Abc /></Route>
          <Route path="/duoforschool"><DuoForSchool /></Route>
          <Route path="/stories"><Stories /></Route>
          <Route path="/learnstories"><LearnStories /></Route>
          <Route path="/Learn"><Learn /></Route>
          <Route path="/shop"><Shop /></Route>
          <Route path="/Action"><Action /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
