import "./TeamMember.css";
import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";
import member3 from "../../assets/images/member3.jpg";
import member4 from "../../assets/images/member4.jpg";

const TeamMember = () => {
  return (
    <section className='team-member common-container'>
      <div className="team-wrapper">
        <div className="heading-text-container">
            <h2 className="heading-version-1">Team Members</h2>
            <p className="paragraph-version-01">Combine text with sounds, pictures, graphics and video clips.</p>
        </div>
        <div className="team-card-cantainer">
            <div className="team-card">
                <img src={member1} alt="" />
                <h3 className="team-card-title">Bernarr Dominik</h3>
                <p className="item-version-01">Founder</p>
            </div>
            <div className="team-card">
                <img src={member2} alt="" />
                <h3 className="team-card-title">Fabiana Capmany</h3>
                <p className="item-version-01">Account Manager</p>
            </div>
            <div className="team-card">
                <img src={member3} alt="" />
                <h3 className="team-card-title">Alicia Stanger</h3>
                <p className="item-version-01">Designer</p>
            </div>
            <div className="team-card">
                <img src={member4} alt="" />
                <h3 className="team-card-title">Anton Brownstein</h3>
                <p className="item-version-01">Developer</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TeamMember
