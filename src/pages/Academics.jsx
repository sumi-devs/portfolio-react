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
        {'PROJECTS&'.split('').map((c, i) => <Letter key={i} char={c} />)}
      </div>

      <div className="grid-container-cert">
        {'CERTIFICATIONS'.split('').map((c, i) => <Letter key={i} char={c} />)}
      </div>

      <div className="projects">
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
            This personal portfolio website's front-end was developed using HTML, CSS, and JavaScript.
            I have also implemented a Firestore NoSQL backend database for the "Guestbook" feature in the contacts page.
          </p>
          <br />
          <Carousel images={[
            'pictures/portfolio5.jpg',
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
        <Accordion title="FLOWER CLASSIFIER">A flower classification system designed to automatically identify different flower species from images. Leveraging CNNs, it learns patterns in shape and color to achieve high accuracy.</Accordion>
        <Accordion title="STORYGRAPH CLONE">A personal book-tracking website where users can log books, add reviews, and track reading progress. Includes authentication and a clean dashboard.</Accordion>
        <Accordion title="STUDYHIVE">A web app to organize study sessions, tasks, and collaborate with peers. Includes group scheduling, shared resources, and to-do lists.</Accordion>
        <Accordion title="IMAGE COLORIZATION">A project using deep learning to automatically colorize black-and-white images, adding realism based on learned color patterns.</Accordion>
      </div>

      <div className="accordions">
        <h2><span className="aboutspan">COMPLETED CERTIFICATIONS</span></h2>
        <Accordion title="GOOGLE CLOUD COMPUTING FOUNDATIONS" link="https://www.credly.com/badges/9006b938-62f8-46dc-9876-25205ce35a19/public_url" />
      </div>

      <div className="accordions">
        <h2><span className="aboutspan">ONGOING CERTIFICATIONS</span></h2>
        <Accordion title="NPTEL COMPUTER VISION" link="https://onlinecourses.nptel.ac.in/noc25_cs143" />
        <Accordion title="OCI AI FOUNDATIONS" link="https://mylearn.oracle.com/ou/learning-path/become-a-oci-ai-foundations-associate-2025/147781" />
        <Accordion title="ORACLE APEX CLOUD PROFESSIONAL" link="https://mylearn.oracle.com/ou/learning-path/become-an-oracle-apex-developer-professional-2025/146080" />
      </div>

      <footer>
        <p>Thank you for visiting!</p>
      </footer>
    </>
  );
}

export default Academics;
