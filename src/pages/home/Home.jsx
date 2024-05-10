import Banner from "../../components/Banner";
import QuerieCard from "../../components/QuerieCard";
import SectionIntro from "../../components/SectionIntro";
import TinyBanner from "./TinyBanner";

const Home = () => {
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
          <QuerieCard></QuerieCard>
          <QuerieCard></QuerieCard>
          <QuerieCard></QuerieCard>
        </div>
      </section>
    </main>
  );
};

export default Home;
