import "./App.css"; 
import "./index.css"; 
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Title from "./Components/Title/Title";
import CardsTwo from "./Components/CardsTwo/CardsTwo";
import ImageSection from "./Components/ImageSection/ImageSection";
import CardsThree from "./Components/CardsThree/CardsThree";
import BestDeal from "./Components/BestDeal/BestDeal";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
  <div>
    <NavBar/>
<Header/>
<Title  bigtitle="How it Works" smalltitle="Lorem ipsum dolor sit amet, consectetur adipiscing eli"/>  
<CardsTwo/>
<ImageSection/>
<Title  bigtitle="Most Trending" smalltitle="Lorem ipsum dolor sit amet, consectetur adipiscing eli"/>  
<CardsThree/>
<Title  bigtitle="Best Real Estate Deals" smalltitle="Lorem ipsum dolor sit amet, consectetur adipiscing eli"/>
<BestDeal/>  
<Contact/>
<Footer/>
</div>
  )
}

export default App;
