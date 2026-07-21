import '../styles/CSS/HomeDesign.css';
import ideas from '../assets/Images/ideas.avif';

const HomeDesign = () => {
  return (
    <div className='Design_container'>
      <div className='left_container'>
        <h1>
          Human <br /> Stories & ideas
        </h1>
        <h3>A place to read, write, and deepen your understanding</h3>
        <button>Get Started</button>
      </div>
      <div className='Image_container'>
        <img src={ideas} alt="Ideas Illustration" fetchPriority='high' loading='lazy' />
      </div>
    </div>
  );
};

export default HomeDesign;
