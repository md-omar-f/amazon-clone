import './App.css';
import Header from "./components/Header";
import Navbar from './components/Navbar';
import Slider from "./components/Slider";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <section className='main-section'>
        <Slider />
        <div className="category-section">
          <Category 
            catHeader="Get fit at home"
            image="cat-img-fit.jpg"
          />
          <Category 
            catHeader="Electronics"
            image="cat-img-electro.jpg"
          />
                  <Category 
            catHeader="Health & Personal Care"
            image="cat-img-care.jpg"
          />
          <Category 
            catHeader="Computers & Accessories"
            image="cat-img-comp.jpg"
          />
                  <Category 
            catHeader="New arrivals in Toys"
            image="cat-img-toys.jpg"
          />
          <Category 
            catHeader="Shop Pet supplies"
            image="cat-img-pets.jpg"
          />
                  <Category 
            catHeader="Shop activity trackers and smartwatches"
            image="cat-img-watches.jpg"
          />
          <Category 
            catHeader="Shop Laptops & Tablets"
            image="cat-img-laptops.jpg"
          />
          <Category 
            catHeader="Get fit at home"
            image="cat-img-fit.jpg"
          />
          <Category 
            catHeader="Electronics"
            image="cat-img-electro.jpg"
          />
                  <Category 
            catHeader="Health & Personal Care"
            image="cat-img-care.jpg"
          />
          <Category 
            catHeader="Computers & Accessories"
            image="cat-img-comp.jpg"
          />
          <Category 
            catHeader="New arrivals in Toys"
            image="cat-img-toys.jpg"
          />
          <Category 
            catHeader="Shop Pet supplies"
            image="cat-img-pets.jpg"
          />
                  <Category 
            catHeader="Shop activity trackers and smartwatches"
            image="cat-img-watches.jpg"
          />
          <Category 
            catHeader="Shop Laptops & Tablets"
            image="cat-img-laptops.jpg"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
