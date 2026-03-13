import Navbar from '../components/Navbar';
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';
import Letter from '../components/Letter';
import '../assets/css/academics.css';

function Academics() {
  return (
    <>
      <Navbar />

      <section data-floor="3" data-floor-label="Projects">
        <div className="grid-container-proj">
          {'PROJECTS &'.split('').map((c, i) => <Letter key={i} char={c} />)}
        </div>

        <div className="grid-container-cert">
          {'CERTIFICATIONS'.split('').map((c, i) => <Letter key={i} char={c} />)}
        </div>

        <div className="accordions">
          <Accordion title="Federated Social Media">
            <div className="project-accordion-grid">
              <div className="project-left">
                <Carousel images={[
                  'pictures/fs1.png',
                  'pictures/fs2.png',
                  'pictures/fs3.png',
                  'pictures/fs4.png',
                  'pictures/fs5.png',
                  'pictures/fs6.png',
                  'pictures/fs7.png'
                ]} />
                <div className="techstack-mini">
                  <span className="aboutspan">Techstack</span><br /><br />
                  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" className="tech" />
                  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node" className="tech" />
                  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" className="tech" />
                  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" className="tech" />
                </div>
              </div>
              <div className="project-right">
                <p>
                  This <span className="aboutspan">Federated Social Media platform</span> is a sophisticated, decentralized application designed to empower users with full control over their digital footprint. By leveraging a <span className="aboutspan">peer-to-peer architecture</span>, the system eliminates the need for a central authority, effectively mitigating risks associated with data mining and centralized censorship.
                  <br /><br />
                  Built using the <span className="aboutspan">MERN stack</span> (MongoDB, Express, React, Node.js), it incorporates real-time features powered by <span className="aboutspan">Socket.io</span> for seamless user interactions. The platform implements protocols inspired by <span className="aboutspan">ActivityPub</span> to facilitate cross-server communication, allowing independent nodes to discover and interact with one another through a robust <span className="aboutspan">Trusted Server Mesh</span>.
                </p>
                <div className="project-links">
                  <a href="https://heartfelt-cocada-80540c.netlify.app/landing" target="_blank" rel="noopener noreferrer" className="project-btn">LIVE DEMO</a>
                  <a href="https://github.com/sumi-devs/federated-socmed" target="_blank" rel="noopener noreferrer" className="project-btn">GITHUB</a>
                </div>
              </div>
            </div>
          </Accordion>

          <Accordion title="StudyHive: A Study Environment">
            <div className="project-accordion-grid">
              <div className="project-left">
                <Carousel images={[
                  'pictures/sh1.png', 'pictures/sh2.png', 'pictures/sh3.png', 'pictures/sh4.png',
                  'pictures/sh5.png', 'pictures/sh6.png', 'pictures/sh7.png', 'pictures/sh8.png',
                  'pictures/sh9.png', 'pictures/sh10.png'
                ]} />
                <div className="techstack-mini">
                  <span className="aboutspan">Techstack</span><br /><br />
                  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" className="tech" />
                  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" className="tech" />
                  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" className="tech" />
                  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node" className="tech" />
                </div>
              </div>
              <div className="project-right">
                <p>
                  <span className="aboutspan">StudyHive</span> is an all-encompassing productivity ecosystem meticulously crafted to address the multifaceted needs of modern students. It transitions beyond a simple task manager by fostering a <span className="aboutspan">collaborative learning environment</span> where users can connect via a dedicated "Study Buddy Finder" and shared study groups.
                  <br /><br />
                  The application integrates specialized productivity tools, including a <span className="aboutspan">Pomodoro tracker</span> and an <span className="aboutspan">AI-Based Notes Summarizer</span> to distill complex information into actionable insights. By centralizing assignments, quizzes, and collaborative repositories, StudyHive provides a streamlined, <span className="aboutspan">user-centric dashboard</span> that significantly enhances academic focus and efficiency.
                </p>
                <div className="project-links">
                  <a href="https://github.com/sumi-devs/studyhive" target="_blank" rel="noopener noreferrer" className="project-btn">GITHUB</a>
                </div>
              </div>
            </div>
          </Accordion>

          <Accordion title="RollCredits">
            <div className="project-accordion-grid">
              <div className="project-left">
                <Carousel images={[
                  'pictures/rc1.png', 'pictures/rc2.png', 'pictures/rc3.png', 'pictures/rc4.png',
                  'pictures/rc5.png', 'pictures/rc6.png'
                ]} />
                <div className="techstack-mini">
                  <span className="aboutspan">Techstack</span><br /><br />
                  <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter" className="tech" />
                  <img src="https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white" alt="Dart" className="tech" />
                  <img src="https://img.shields.io/badge/firebase-%23B34A13.svg?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase" className="tech" />
                </div>
              </div>
              <div className="project-right">
                <p>
                  <span className="aboutspan">RollCredits</span> is a highly polished mobile application designed for film enthusiasts to document and share their cinematic journeys. Built with <span className="aboutspan">Flutter and Firebase</span>, the app offers a cross-platform experience that allows users to log their watch history, curate personalized wishlists, and engage with a global community of cinephiles.
                  <br /><br />
                  The app features a deep integration with media databases to provide <span className="aboutspan">real-time discovery</span> and detailed insights into movies and television shows. With a focus on <span className="aboutspan">intuitive UI/UX</span> and synchronized cloud storage, RollCredits provides a seamless way for users to track their progress, rate their experiences, and explore new genres through <span className="aboutspan">socially-driven recommendations</span>.
                </p>
                <div className="project-links">
                  <a href="https://github.com/sumi-devs/rollcredits" target="_blank" rel="noopener noreferrer" className="project-btn">GITHUB</a>
                </div>
              </div>
            </div>
          </Accordion>

          <Accordion title="Amrita Student Clubs Website">
            <div className="project-accordion-grid">
              <div className="project-left">
                <Carousel images={[
                  'pictures/clubs1.jpg', 'pictures/clubs2.jpg', 'pictures/clubs3.jpg', 
                  'pictures/clubs4.jpg', 'pictures/clubs5.jpg', 'pictures/clubs6.jpg'
                ]} />
                <div className="techstack-mini">
                  <span className="aboutspan">Techstack</span><br /><br />
                  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" className="tech" />
                  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" className="tech" />
                  <img src="https://img.shields.io/badge/css-%2300A0ED.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" className="tech" />
                </div>
              </div>
              <div className="project-right">
                <p>
                  The <span className="aboutspan">Amrita Student Clubs Website</span> is a centralized digital portal designed to unify and showcase the vibrant extracurricular ecosystem of Amrita University. This project focuses on <span className="aboutspan">information architecture</span> and interactive design, providing a streamlined platform for students to navigate through various academic, cultural, and technical clubs.
                  <br /><br />
                  Developed using <span className="aboutspan">Vanilla JavaScript</span> and modern CSS techniques, the website emphasizes <span className="aboutspan">high-performance responsiveness</span> and accessibility. It effectively bridges the communication gap between student organizations and the campus community by providing a clear, visually engaging directory of events, membership details, and club objectives.
                </p>
                <div className="project-links">
                  <a href="https://github.com/sanjanav2102/AMRITA-student-clubs-website/tree/c5819f452e90e41c1d4e382eac290057e90122d7" target="_blank" rel="noopener noreferrer" className="project-btn">GITHUB</a>
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </section>

      <section data-floor="2" data-floor-label="Ongoing">
        <div className="accordions">
          <h2><span className="aboutspan">Ongoing Projects</span></h2>
          <Accordion title="Multi-source analysis of marine pollution events">A research project intended to contribute to Goal 14 of the UN Sustainable Development Goals.</Accordion>
        </div>
      </section>

      <section data-floor="1" data-floor-label="Certifications">
        <div className="accordions">
          <h2><span className="aboutspan">Completed Certifications</span></h2>
          <Accordion title="Google Cloud Computing Foundations" link="https://www.credly.com/badges/9006b938-62f8-46dc-9876-25205ce35a19/public_url" />
          <Accordion title="OpenCV PyTorch Bootcamp" link="https://courses.opencv.org/certificates/925b8015e82b480aa20f4bc89fadcbb2" />
        </div>
      </section>

      <footer>
        <p>Thank you for visiting!</p>
      </footer>
    </>
  );
}

export default Academics;
