import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Animatedtext from "./components/Animatedtext";
import TransitionEffects from "./components/TransitionEffects";
import ProjectCard from "./components/ProjectCard";

import movix from "../../public/images/projects/movix.jpg";
import google_clone from "../../public/images/projects/googleClone.png";
import Airbnb_clone from "../../public/images/projects/Airbnb-Clone.jpg";
import gmail_clone from "../../public/images/projects/gmail_clone.png";
import Linkedin_clone from "../../public/images/projects/linkedin_clone.png";
import snapchat_clone from "../../public/images/projects/snapchat_clone.png";

function projects() {
  return (
    <>
      <TransitionEffects />
      <Navbar />
      <div className="   mb-16">
        <main className="xl:px-32 md:px-16 px-6   flex w-full  items-center justify-center flex-col">
          <div className=" md:mt-16  mt-8">
            <Animatedtext text="Projects" />
          </div>
          <div className="  flex items-center flex-col  justify-center ">
            {/* movix.................... */}
            <ProjectCard
              title="  html5,  css3,  JavaScript,  React JS,  Tailwind CSS,  Redux,  React Router, MUI,   API, React Player,  React lazy load "
              summary1="A feature-rich movie information website that shows the Trending, Popular, and Top Rated movies and TV shown in daily and weekly categories for the latest releases. You can get ratings, release dates, watch times, Casts, descriptions, Stream live trailers, Official videos, banners, and even much more."
              summary2="
              It also gives recommendations for similar movies you might be interested in. It is powered by TMDB API and deployed on vercel and is fully responsive.  "
              image={movix}
              link="https://movix-react-app.vercel.app/"
              github="https://github.com/GoutamSach/movix_react-app"
              type="Movix Web App "
            />
            {/* googleClone.................... */}
            <ProjectCard
              title="  html5,  css3,  JavaScript,  React JS,  Tailwind CSS,  Redux,  React Router, MUI,  API "
              summary1="Google clone is a fully responsive demo web app that can deliver real-time search results taking input from users. It can also display images per users input. It can navigate between pages and can deliver millions of results within milliseconds. "
              summary2="It is a realtime web app which is powered by Google custom search API deployed on Netlify. "
              image={google_clone}
              link="https://search-engine-clone-app.netlify.app/"
              github="https://github.com/GoutamSach/google_clone"
              type=" Google Clone "
            />
            {/* airbnb_clone  */}
            <ProjectCard
              title="  html5,  css3,  JavaScript,  React JS, Next JS,  Tailwind CSS,  Redux,  React Router, MUI,  API "
              summary1="Airbnb clone is a fully responsive  demo web app showcasing strong front-end skills. It is developed with NEXT and Tailwind. Search by choosing the preferred location for your stay and, the number of guest and make a selection for dates and it will deliver some predefined results to you. It is a cool app which deployed on Vercel. "
              image={Airbnb_clone}
              link="https://airbnb-deploy-eight.vercel.app/"
              github="https://github.com/GoutamSach/airbnb__deploy"
              type=" Airbnb Clone "
            />
            {/* Snapchat_clone */}
            <ProjectCard
              title="  html5,  css3,  JavaScript,  React JS,  Tailwind CSS,  Redux,  React Router, Firebase & Firestore, MUI,  API "
              summary1="Snapchat Clone is a  demo web app showcasing strong front-end skills. Users can sign up using their Google account and can capture and share their moments. It uses a real-time database from Firebase to send and receive posts. It is a cool app that uses Firebase for hosting."
              image={snapchat_clone}
              link="https://snapchat-clone-3358c.web.app/"
              github="https://github.com/GoutamSach/snapchat"
              type=" SnapChat Clone "
            />
            {/* gmail_clone */}
            <ProjectCard
              title="  html5,  css3,  JavaScript,  React JS,  Tailwind CSS,  Redux,  React Router, Firebase & Firestore, MUI,  API "
              summary1="Gmail clone is a demo web app showcasing strong front-end skills. It uses a real-time database from Firebase to send and receive emails. Users can Send and Read emails in no time. Users can sign up and start sending emails. It is embedded with a sign-in with a Google account option. It is a cool app which deployed on Firebase."
              image={gmail_clone}
              link="https://clone-5500d.web.app/"
              github="https://github.com/GoutamSach/gmail-clone"
              type=" Gmail Clone "
            />
            {/* linkedIn_Clone */}
            <ProjectCard
              title="  html5,  css3,  JavaScript,  React JS,  Tailwind CSS,  Redux,  React Router, Firebase & Firestore, MUI,  API "
              summary1="LinkedIn Clone is a  demo web app showcasing strong front-end skills. It is using a realtime database from firebase to manage its backend. Users can sign up and log in using email and password. Users can read feeds and the stuff others post on the app and can share their posts with others as well. Posts are updated on a realtime basis making it more interesting. It is deployed in firebase."
              image={Linkedin_clone}
              link="https://linkedin-clone-acae4.web.app/"
              github="https://github.com/GoutamSach/linkedin"
              type=" LinkedIn Clone "
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default projects;
