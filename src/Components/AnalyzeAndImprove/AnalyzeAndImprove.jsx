import "./AnalyzeAndImprove.css";
import UiImage from "../../assets/images/ui2.jpg";
import check from "../../assets/icons/check.svg";

const AnalyzeAndImprove = () => {
  return (
    <section className='aAndImprove common-container'>
    <div className="aAndImprove-wrapper">
      <div className="aAndImprove-content">
        <h2 className="heading-version-1">Analyze <br/>& Improve</h2>
        <p className="item-version-01">Web designer is responsible for creating the design and layout of a website or web pages. It and can mean working on a brand new website.</p>
        <ul className="list-container">
            <li>
                <img src={check} alt="" />
                <span className="item-version-01">Well Planned Architecture</span>
            </li>
            <li>
                <img src={check} alt="" />
                <span className="item-version-01">Accessible to All Users</span>
            </li>
            <li>
                <img src={check} alt="" />
                <span className="item-version-01">Mobile Compatibility</span>
            </li>
        </ul>
      </div>
      <div className="aAndImprove-image-wrapper">
          <img src={UiImage} alt="aAndImprove" />
      </div>
    </div>
  </section>
  )
}

export default AnalyzeAndImprove
