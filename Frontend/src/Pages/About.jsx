import { Link } from "react-router-dom";
import "../CSS/About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1 className="about-title">EveryOne has a Story and Ideas to tell</h1>
        <p className="about-intro">
          Connect is a home for human stories and ideas. Here, anyone can share
          knowledge and wisdom with the world—without having to build a mailing
          list or a following first. The internet is noisy and chaotic; Connect
          is quiet yet full of insight. It is simple, beautiful, collaborative,
          and helps you find the right readers for whatever you have to say.
        </p>

        <h2 className="about-subtitle">
          Ultimately, our goal is to deepen our collective understanding of the
          world through the power of writing.
        </h2>
        <p className="about-content">
          We believe that what you read and write matters. Words can divide or
          empower us, inspire or discourage us. In a world where the most
          sensational and surface-level stories often win, we are building a
          system that rewards depth, nuance, and time well spent. A space for
          thoughtful conversation more than drive-by takes, and substance over
          packaging. Over 100 million people connect and share their wisdom on
          Medium every month. They are software developers, amateur novelists,
          product designers, CEOs, and anyone burning with a story they need to
          get out into the world. They write about what they are working on,
          what is keeping them up at night, what they have lived through, and
          what they have learned that the rest of us might want to know too.
          Instead of selling ads or selling your data, we are supported by a
          growing community of over a million Medium members who believe in our
          mission. If you are new here, start reading. Dive deeper into whatever
          matters to you. Find a post that helps you learn something new, or
          reconsider something familiar and then write your story.
        </p>

        <div className="about-actions">
          <Link to="/login">
            <button className="primary-btn">Start Reading</button>
          </Link>
          <Link to='/card'>
            <button className="secondary-btn">Start Writing</button>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
