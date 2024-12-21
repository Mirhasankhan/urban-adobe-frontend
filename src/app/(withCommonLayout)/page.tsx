import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import HomeListings from "@/components/home/Listings";
import Location from "@/components/home/Location";
import WhyUs from "@/components/home/WhyUs";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeListings></HomeListings>
      <Categories></Categories>
      <div className="hidden md:block">
        <WhyUs></WhyUs>
      </div>
      {/* <Contact></Contact> */}
      {/* <About></About> */}
      <Location></Location>
    </div>
  );
};

export default HomePage;
