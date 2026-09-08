import "./App.css";
import { Link } from "react-router-dom";

const webSeries = [
  {
    id: 1,
    title: "Stranger Things",
    year: "2016",
    rating: "8.7",
    poster:
      "p1.jpg",
    desc: "A group of kids uncover supernatural mysteries."
  },
  {
    id: 2,
    title: "Wednesday",
    year: "2022",
    rating: "8.1",
    poster:
      "p2.png",
    desc: "Wednesday Addams solves a dark mystery."
  },
  {
    id: 3,
    title: "Money Heist",
    year: "2017",
    rating: "8.2",
    poster:
      "p3.jpg",
    desc: "The biggest robbery in history."
  },
  {
    id: 4,
    title: "Dark",
    year: "2017",
    rating: "8.7",
    poster:
      "p4.jpg",
    desc: "A mysterious time-travel thriller."
  },
  {
    id: 5,
    title: "Breaking Bad",
    year: "2008",
    rating: "9.5",
    poster:
      "p5.png",
    desc: "A chemistry teacher becomes a drug kingpin."
  },
  {
    id: 6,
    title: "Peaky Blinders",
    year: "2013",
    rating: "8.8",
    poster:
      "p6.jpg",
    desc: "The Shelby family rules Birmingham."
  },
  {
    id: 7,
    title: "Squid Game",
    year: "2021",
    rating: "8.0",
    poster:
      "p7.jpg",
    desc: "Deadly games for a huge cash prize."
  },
  {
    id: 8,
    title: "The Boys",
    year: "2019",
    rating: "8.7",
    poster:
      "p8.jpg",
    desc: "A dark take on superheroes."
  },
  {
    id: 9,
    title: "The Last of Us",
    year: "2023",
    rating: "8.8",
    poster:
      "p9.jpg",
    desc: "A post-apocalyptic survival journey."
  },
  {
    id: 10,
    title: "The Witcher",
    year: "2019",
    rating: "8.0",
    poster:
      "p10.jpg",
    desc: "A monster hunter battles destiny."
  }
];

function App() {
  return (
    <>
      <header className="hero">
        <nav>
          <h1>NETFLIX</h1>

          <div>
            <input
              type="text"
              placeholder="Search..."
              className="search"
            />

            <Link to="/login">
              <button className="loginBtn">
                Login
              </button>
            </Link>
          </div>
        </nav>

        <div className="heroContent">
          <h2>Top 10 Web Series</h2>
          <p>
            Watch the most trending shows of all
            time
          </p>
        </div>
      </header>

      <section className="section">
        <h2>Top 10 Today</h2>

        <div className="cards">
          {webSeries.map((show, index) => (
            <div className="card" key={show.id}>
              <span className="number">
                {index + 1}
              </span>

              <img
                src={show.poster}
                alt={show.title}
              />

              <div className="info">
                <h3>{show.title}</h3>
                <p>⭐ {show.rating}</p>
                <p>📅 {show.year}</p>
                <p>{show.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}

export default App;