import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import DigitalCard from "../../components/DigitalCard";
import QuerieCard from "../../components/QuerieCard";
import SectionIntro from "../../components/SectionIntro";
import TinyBanner from "./TinyBanner";
import Upcomming from "./Upcomming";

const Home = () => {

const queriesData = useLoaderData();
// console.log(queriesData)

  return (
    <main>
      <Banner></Banner>
      <TinyBanner></TinyBanner>
      <section>
        <SectionIntro
          title={{
            heading: "Recent Queries",
            paragraph:
              "Recent This Oueries Most Puploer And Really very expensive So you Can Try ",
          }}
        ></SectionIntro>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
         {queriesData?.slice(0,6).map((querie , id) => <QuerieCard key={id} querie={querie}></QuerieCard>)}
        </div>
      </section>
      <section>
      <SectionIntro
          title={{
            heading: "digital transformation",
            paragraph:
              "Get the right product information to the right places at the right time ",
          }}
        ></SectionIntro>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10">
            <DigitalCard info={{img:"https://www.stibosystems.com/hubfs/2020wot/_icons/icon_arrow_consolidate_2c.png", title:"Data Sourcing"}}></DigitalCard>
            <DigitalCard info={{img:"https://www.stibosystems.com/hubfs/2020wot/_icons/icon_circle_out_arrow_2c.png", title:"Data integration"}}></DigitalCard>
            <DigitalCard info={{img:"https://www.stibosystems.com/hubfs/2020wot/_icons/icon_paper_plane_2c.png", title:"Data modeling"}}></DigitalCard>
            <DigitalCard info={{img:"https://www.stibosystems.com/hubfs/2020wot/_icons/icon_check_circle_2c.png", title:"Content quality "}}></DigitalCard>
            <DigitalCard info={{img:"https://www.stibosystems.com/hubfs/2020wot/_icons/icon_data_2c.png", title:"Data sharing "}}></DigitalCard>
            <DigitalCard info={{img:"https://www.stibosystems.com/hubfs/2020wot/_icons/icon_arrow_consolidate_2c.png", title:"Data Sourcing"}}></DigitalCard>
        </div>
      </section>
      <section>
      <SectionIntro
          title={{
            heading: "Upcomming Featured",
            paragraph:
              "These will come within a few days",
          }}
        ></SectionIntro>
        <div className="mt-10">
            <Upcomming></Upcomming>
        </div>
      </section>
    </main>
  );
};

export default Home;
