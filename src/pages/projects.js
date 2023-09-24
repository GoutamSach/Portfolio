import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Animatedtext from "./components/Animatedtext";
import project1 from "../../public/images/projects/movix.png";
import google_clone from "../../public/images/projects/googleClone.JPG";
import Airbnb_clone from "../../public/images/projects/Airbnb-Clone.png";
import TransitionEffects from "./components/TransitionEffects";
import ProjectCard from "./components/ProjectCard";

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
              title="&nbsp;&nbsp;html5,&nbsp; css3, &nbsp;JavaScript, &nbsp;React JS, &nbsp;Tailwind CSS, &nbsp;Redux, &nbsp;React Router,&nbsp;MUI,  &nbsp;API,&nbsp;React Player, &nbsp;React lazy load "
              summary1="A feature-rich movie information website that shows the Trending, Popular, and Top Rated movies and TV shown in daily and weekly categories for the latest releases. You can get ratings, release dates, watch times, Casts, descriptions, Stream live trailers, Official videos, banners, and even much more."
              summary2="
              It also gives recommendations for similar movies you might be interested in. It is powered by TMDB API and deployed on vercel and is fully responsive.  "
              image={project1}
              link="https://movix-react-app.vercel.app/"
              github="https://github.com/GoutamSach/movix_react-app"
              type="Movix Web App "
            />

            {/* googleClone.................... */}

            <ProjectCard
              title="&nbsp;&nbsp;html5,&nbsp; css3, &nbsp;JavaScript, &nbsp;React JS, &nbsp;Tailwind CSS, &nbsp;Redux, &nbsp;React Router,&nbsp;MUI, &nbsp;API "
              summary1="Google clone is a fully responsive web app that can deliver real-time search results taking input from users. It can also display images per user's input. It can navigate between pages and can deliver millions of results within milliseconds. "
              summary2="It is a realtime web app which is powered by Google's custom search API deployed on Netlify. "
              image={google_clone}
              link="https://search-engine-clone-app.netlify.app/"
              github="https://github.com/GoutamSach/google_clone"
              type=" Google Clone "
            />

            {/* airbnb_clone  */}
            <ProjectCard
              title="&nbsp;&nbsp;html5,&nbsp; css3, &nbsp;JavaScript, &nbsp;React JS,&nbsp;Next JS, &nbsp;Tailwind CSS, &nbsp;Redux, &nbsp;React Router,&nbsp;MUI, &nbsp;API "
              summary1="Airbnb clone is a fully responsive web app showcasing strong front-end skills. It is developed with NEXT and Tailwind. Search by choosing the preferred location for your stay and, the number of guest and make a selection for dates and it will deliver some predefined results to you. "
              image={Airbnb_clone}
              link="https://airbnb-deploy-eight.vercel.app/"
              github="https://github.com/GoutamSach/airbnb__deploy"
              type=" Airbnb Clone "
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default projects;
