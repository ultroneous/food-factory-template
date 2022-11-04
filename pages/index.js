import Footer from "@/components/common/Footer";
import CustomerSays from "@/components/Home/CustomerSays";
import MultipleService from "@/components/Home/MultipleService";
import OurDishes from "@/components/Home/OurDishes";
import SystemNavbar from "../components/common/Navbar";
import HeroComponent from "../components/Home/HeroComponent";

export default function Home() {
  return (
    <>
      <SystemNavbar />
      <HeroComponent />
      <OurDishes />
      <MultipleService />
      <CustomerSays />
      <Footer />
    </>
  );
}
