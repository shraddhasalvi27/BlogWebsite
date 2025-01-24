import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About</h1>
      <p>
        This is{" "}
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
          {profile?.user?.name}
        </strong>{" "}
        I am Shraddha Salavi, a passionate web developer with a strong desire to
        create user-friendly and impactful digital solutions. My journey in tech
        has been driven by the goal of overcoming personal challenges,
        constantly improving my skills, and making a meaningful contribution
        through my work.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Technical Expertise:
      </h2>
      <p>
        I have a strong grasp of React.js and use it to build responsive,
        intuitive user interfaces. Additionally, I’m proficient in HTML5, CSS3,
        and modern design principles to ensure seamless and engaging experiences
        for users. My expertise includes working with Node.js, Express, and
        MongoDB to develop scalable and efficient server-side applications. I am
        experienced in managing databases and designing RESTful APIs. I use
        Thunder Client or Postman for efficient and thorough API testing.
      </p>
      <h2 className="font-semibold text-blue-800 text-xl">
        Professional Highlights:
      </h2>
      <p>
        Successfully developed and deployed numerous full-stack applications,
        demonstrating strong problem-solving skills and a keen eye for detail.
        Collaborated with cross-functional teams to deliver high-quality
        software solutions within tight deadlines. Continuously learning and
        adapting to emerging technologies and industry trends to stay ahead in
        the fast-evolving tech landscape.
      </p>
      <br />
      <h2 className="font-semibold text-blue-800 text-xl">
        Personal Interests and Inspiration:
      </h2>
      <p>
        I am deeply invested in enhancing my web development skills and
        exploring emerging fields like web3 technologies to stay ahead in my
        career. My little brother is my biggest source of
        encouragement and support. His unwavering belief in me motivates me to
        keep pushing forward. After a long day, I enjoy
        relaxing by spending time with family, indulging in entertainment,
        exploring new skills, and having a delicious homemade dinner.
         One of my proudest moments was buying my first laptop with
        a scholarship I earned in 7th grade. It symbolized my dedication and
        marked the beginning of my journey in technology.
      </p>
    </div>
  );
}

export default About;