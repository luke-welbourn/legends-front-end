import YouTube from "react-youtube";
import "./Home.scss";

const Home = () => {
  // YouTube video options
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const videoId = "C3GouGa0noM";

  return (
    <section className="home-container">
      <section className="left-section">
        <section className="youtube-video">
          <YouTube videoId={videoId} opts={opts} />
        </section>
      </section>
      <section className="right-section">
        <h2 className="right-section__header">What is League of Legends?</h2>
        <p>
          League of Legends (LoL) is a widely popular online multiplayer game
          where two teams of five players battle to destroy the enemy's Nexus at
          their base. Players choose from a vast roster of unique champions,
          each with distinct abilities, and work together to secure objectives,
          turrets, and inhibitors on a map called Summoner's Rift. The game
          demands strategic thinking, teamwork, and individual skill, offering a
          dynamic and competitive gaming experience. <br></br>
          <br></br> League of Legends attracts players for its deep strategic
          gameplay, diverse champion roster, and vibrant esports scene. Whether
          you enjoy intense team coordination, tactical battles, or the thrill
          of competing in professional tournaments, LoL offers a compelling and
          ever-evolving gaming journey. With a massive player community,
          frequent updates, and the potential to master a wide range of
          champions and roles, League of Legends provides endless opportunities
          for fun and competition in the world of online gaming.
        </p>
      </section>
    </section>
  );
};

export default Home;
