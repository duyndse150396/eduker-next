import Head from "next/head";
import AboutArea from "../components/Home/AboutArea";
import HomeBlog from "../components/Home/HomeBlog";
import Campus from "../components/Home/Campus";
import CounterArea from "../components/Home/CounterArea";
import CategoryArea from "../components/Home/CategoryArea";
import CourseArea from "../components/Home/CourseArea";
import Features from "../components/Home/Features";
import Header from "../components/Home/Header";
import HeroArea from "../components/Home/HeroArea";
import HomeCourses from "../components/Home/HomeCourses";
import ResearchArea from "../components/Home/ResearchArea";
import Cta from "../components/Home/Cta";
import Footer from "../components/common/Footer";
import Events from "../components/Events/Events";
import TeamArea from "../components/Home/TeamArea";
import Faq from "../components/Home/Faq";
import BrandArea from "../components/Home/BrandArea";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mentor Mentee Connect</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroArea />
      <CounterArea />
      {/* <Features /> */}
      <CategoryArea />
      <CourseArea />
      {/* <AboutArea /> */}
      {/* <HomeCourses /> */}
      <Events />
      <Campus />
      <TeamArea />
      <ResearchArea />
      {/* <HomeBlog /> */}
      {/* <Cta /> */}
      <BrandArea />
      <Faq />
      <Footer />
    </>
  );
}
