import Navbar from '../components/Navbar';
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';
import Letter from '../components/Letter';
import '../assets/css/academics.css';

function Academics() {
  return (
    <>
      <Navbar />

      <div className="grid-container-proj">
        {'PROJECTS &'.split('').map((c, i) => <Letter key={i} char={c} />)}
      </div>

      <div className="grid-container-cert">
        {'CERTIFICATIONS'.split('').map((c, i) => <Letter key={i} char={c} />)}
      </div>

      <div className="projects">
        <div className="studyhive">
          <p>
            <span className="aboutspan">STUDYHIVE: A STUDY ENVIRONMENT</span>
            <br /><br />
            STUDYHIVE IS AN INTERACTIVE STUDY PLATFORM DESIGNED TO IMPROVE ACADEMIC PRODUCTIVITY, STREAMLINE TASK MANAGEMENT, AND FOSTER PEER COLLABORATION. THE SYSTEM ARCHITECTURE IS MODULAR, FOCUSING ON ESSENTIAL FEATURES LIKE PERSONALIZED DASHBOARDS, TASK-BASED COMPONENTS, ORGANIZATIONAL TOOLS , AND COLLABORATIVE SPACES. 
          </p>
          <br />
          <Carousel images={[
            'pictures/sh1.png',
            'pictures/sh2.png',
            'pictures/sh3.png',
            'pictures/sh4.png',
            'pictures/sh5.png',
            'pictures/sh6.png',
            'pictures/sh7.png',
            'pictures/sh8.png',
            'pictures/sh9.png',
            'pictures/sh10.png'
          ]} />
          <br />
          <span className="aboutspan">FEATURES</span>
          <br /><br />
          &gt; Study Buddy Finder. <br />
          &gt; Study Group Creator + Finder. <br />
          &gt; Personalized Dashboard. <br />
          &gt; Notes Organization Repo + AI_Based Summarizer. <br />
          &gt; Tasks and Assignments Tracker. <br />
          &gt; Quiz Set Creator + Finder. <br />
          <br />
          <span className="aboutspan">TECHSTACK</span>
          <br /><br />
          <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
            alt="React" className="tech" />
          <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
            alt="MongoDB" className="tech" />
          <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
            alt="Express" className="tech" />
          <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
            alt="Node" className="tech" />
        </div>

        <div className="rollcredits">
          <p>
            <span className="aboutspan">ROLLCREDITS</span>
            <br /><br />
            A SOCIAL MEDIA PLATFORM TO LOG YOUR MOVIE AND TV SHOW WATCH ACTIVITY AND DISCOVER NEW MEDIA. 
          </p>
          <br />
          <Carousel images={[
            'pictures/rc1.png',
            'pictures/rc2.png',
            'pictures/rc3.png',
            'pictures/rc4.png',
            'pictures/rc5.png',
            'pictures/rc6.png'
          ]} />
          <br />
          <span className="aboutspan">FEATURES</span>
          <br /><br />
          &gt; Discover movies and shows. <br />
          &gt; Log your activity. <br />
          &gt; Rate your watches. <br />
          &gt; Add media to your watchlist. <br />
          <br />
          <span className="aboutspan">TECHSTACK</span>
          <br /><br />
          <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"
            alt="Flutter" className="tech" />
          <img src="https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white"
            alt="Dart" className="tech" />
        </div>

        <div className="amritaclubs">
          <p>
            <span className="aboutspan">AMRITA STUDENT CLUBS WEBSITE</span>
            <br /><br />
            This is a User Interface Design project built using HTML, CSS, and JavaScript, aimed at organizing the
            information of all the student clubs in Amrita University. Each club is featured with a clean card layout and links to learn more.
          </p>
          <br />
          <Carousel images={[
            'pictures/clubs1.jpg',
            'pictures/clubs2.jpg',
            'pictures/clubs3.jpg',
            'pictures/clubs4.jpg',
            'pictures/clubs5.jpg',
            'pictures/clubs6.jpg'
          ]} />
          <br />
          <span className="aboutspan">FEATURES</span>
          <br /><br />
          &gt; Modern UI with hero section, galleries and club cards. <br />
          &gt; Navigation bar with external links to official Amrita pages. <br />
          &gt; Visual presentation with images for each club. <br />
          &gt; Responsive layout. <br />
          <br />
          <span className="aboutspan">TECHSTACK</span>
          <br /><br />
          <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
            alt="HTML" className="tech" />
          <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
            alt="JavaScript" className="tech" />
          <img src="https://img.shields.io/badge/css-%2300A0ED.svg?style=for-the-badge&logo=css3&logoColor=white"
            alt="CSS" className="tech" />
        </div>

        <div className="inception">
          <p>
            <span className="aboutspan">THIS PORTFOLIO!</span>
            <br /><br />
            This personal portfolio website's front-end was developed using ReactJS framework.
            I have also implemented a Firestore NoSQL backend database for the "Guestbook" feature in the contacts page.
          </p>
          <br />
          <Carousel images={[
            'pictures/portfolio1.jpg',
            'pictures/portfolio3.jpg',
            'pictures/portfolio4.jpg',
            'pictures/portfolio2.jpg'
          ]} />
          <br />
          <span className="aboutspan">FEATURES</span>
          <br /><br />
          &gt; Interactive hero grid introducing myself. <br />
          &gt; Backend to store and display guestbook messages. <br />
          &gt; Responsive design. <br />
          <br />
          <span className="aboutspan">TECHSTACK</span>
          <br /><br />
          <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
            alt="HTML" className="tech" /> 
          <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
            alt="JavaScript" className="tech" />
          <img src="https://img.shields.io/badge/css-%2300A0ED.svg?style=for-the-badge&logo=css3&logoColor=white"
            alt="CSS" className="tech" />
          <img src="https://img.shields.io/badge/firebase-%23FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=black"
            alt="Firebase" className="tech" />
          <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
            alt="React" className="tech" />
        </div>
      </div>

      <div className="accordions">
        <h2><span className="aboutspan">ONGOING PROJECTS</span></h2>
        <Accordion title="FEDERATED SOCIAL NETWORKING PLATFORM">A micro-blogging website similar to Mastodon. Built with the intention of joining the Fediverse and contributing to open-source and decentralized social media.</Accordion>
        <Accordion title="MULTI-SOURCE ANALYSIS OF MARINE POLLUTION EVENTS">A research project intended to contribute to Goal 14 of the UN Sustainable Development Goals that encourages people to work towards the improvement of marine ecosystems.</Accordion>
      </div>

      <div className="accordions">
        <h2><span className="aboutspan">COMPLETED CERTIFICATIONS</span></h2>
        <Accordion title="GOOGLE CLOUD COMPUTING FOUNDATIONS" link="https://www.credly.com/badges/9006b938-62f8-46dc-9876-25205ce35a19/public_url" />
        <Accordion title="OPENCV PYTORCH BOOTCAMP" link="https://courses.opencv.org/certificates/925b8015e82b480aa20f4bc89fadcbb2" />
      </div>

      <footer>
        <p>Thank you for visiting!</p>
      </footer>
    </>
  );
}

export default Academics;
