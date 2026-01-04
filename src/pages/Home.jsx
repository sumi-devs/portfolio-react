import Navbar from '../components/Navbar';
import Letter from '../components/Letter';
import '../assets/css/portfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />

      <div className="grid-container">
        {'HI GUYS, MY NAME IS SUMITHRA'.split('').map((c, i) => <Letter key={i} char={c} />)}
      </div>

      <div className="grid-container2">
        {'AND WELCOME TO MY PORTFOLIO!'.split('').map((c, i) => <Letter key={i} char={c} />)}
      </div>

      <div className="intro">
        <div className="professional">
          <p>
            I am currently a <span className="aboutspan">Computer Science and Engineering</span> undergraduate student.
            <br /><br />
            My interests lie in <span className="aboutspan">full-stack development and mobile app development</span> — I particularly enjoy designing user-friendly and creative interfaces and bringing ideas to life through front-end work (Psst! Try mousing over the letters above!).
            <br /><br />
            I consider myself a quick and curious learner, always eager to dive deep into new topics and build projects that are both innovative and fun.
            <br /><br />
            I enjoy working on projects that sit at the intersection of design and technology, where thoughtful structure, clean visuals, and intuitive interactions matter as much as functionality.
          </p>
        </div>

        <div className="personal">
          <p>
            Outside the world of computer science, I find joy in <span className="aboutspan">reading books</span> and <span className="aboutspan">watching movies</span>. I'm always on the lookout for a good story, whether it's through pages or on screen.
            <br /><br />
            I particularly enjoy the works of Toni Morrison, Han Kang, Park Chan Wook, Adoor Gopalakrishnan, and David Fincher to name a few. I also love spending time <span className="aboutspan">drawing</span> and <span className="aboutspan">crocheting</span>, activities that let me slow down and create with my hands.
            <br /><br />
            If you have a favorite book or film, I'd love to hear about it — let's share recommendations and discover new favorites together!
          </p>
          <a href="/contact">
            <div className="button">SOCIALS</div>
          </a>
        </div>
      </div>

      <div className="education" data-aos="fade-up">
        <div className="picture">
          <img src="pictures/img1.jpg" alt="" />
        </div>

        <div className="text">
          <h2>EDUCATION</h2>
          <p>
            <br />
            &gt; <span className="school">Amrita Vishwa Vidyapeetham, Coimbatore</span><br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;B.Tech (CSE)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="cgpa">CGPA: 9.02</span>.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Activities:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ASCII Newsletter Editor,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IIC Logistics Team Member,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Srishti Book Club Member,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quizkreig Member<br />
            <br /><br />
            &gt; <span className="school">St. Shantal English Medium School (CBSE), Trivandrum</span><br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;HSC: 90.4%<br />
            &nbsp;&nbsp;&nbsp;&nbsp;SSLC: 97.6%<br />
          </p>
        </div>

        <div className="picture">
          <img src="pictures/img2.jpg" alt="" />
        </div>
      </div>

      <div class="tech-stack">
        <h2>TECHSTACK</h2>

        <br /><br />
        <div className="techs">
          <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
            alt="HTML" className="tech" />
          <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
            alt="JavaScript" className="tech" />
          <img src="https://img.shields.io/badge/css-%2300A0ED.svg?style=for-the-badge&logo=css3&logoColor=white"
            alt="CSS" className="tech" />
          <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
            alt="C" className="tech" />
          <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
            alt="C++" className="tech" />
          <img src="https://img.shields.io/badge/Haskell-5e5086?style=for-the-badge&logo=haskell&logoColor=white"
            alt="Haskell" className="tech" />
          <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
            alt="Java" className="tech" />
          <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
            alt="Python" className="tech" />
          <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
            alt="MySQL" className="tech" />
          <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
            alt="Figma" className="tech" />
          <img src="https://img.shields.io/badge/power_bi-F2C811?style=for-the-badge&logo=powerbi&logoColor=black"
            alt="PowerBi" className="tech" />
          <img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"
            alt="Google Cloud" className="tech" />
          <img src="https://img.shields.io/badge/firebase-%23B34A13.svg?style=for-the-badge&logo=firebase&logoColor=white"
            alt="Firebase" className="tech" />
          <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
            alt="React" className="tech" />
          <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
            alt="MongoDB" className="tech" />
          <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
            alt="Express" className="tech" />
          <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
            alt="Node" className="tech" />
          <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"
            alt="Flutter" className="tech" />
          <img src="https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white"
            alt="Dart" className="tech" />
        </div>

      </div>

      <footer>
        <p>Thank you for visiting!</p>
      </footer>
    </>
  );
}

export default Home;
