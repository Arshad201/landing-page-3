import "./HowWeWork.css";
import video from "../../assets/video/video.mp4";
import playBtn from "../../assets/icons/play.svg";

const HowWeWork = () => {
  return (
    <section className='how-we-work common-container'>
      <div className="howWeWork-wrapper">
        <div className="video-container">
            <video src={video} controls ></video>
            <img src={playBtn} alt="" />
        </div>
        <div className="text-content">
            <h2 className="heading-version-2">How We Work</h2>
            <p className="item-version-01">Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips.</p>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
