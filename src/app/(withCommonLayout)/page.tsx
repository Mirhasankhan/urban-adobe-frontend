import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Contact from "@/components/home/Contact";
import HomeListings from "@/components/home/Listings";
import Location from "@/components/home/Location";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeListings></HomeListings>
      <Categories></Categories>
      <Contact></Contact>
      {/* <About></About> */}
      <Location></Location>
    </div>
  );
};

export default HomePage;
