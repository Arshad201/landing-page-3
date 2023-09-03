import "./Brands.css";
import brand1 from '../../assets/images/brand1.svg';
import brand2 from '../../assets/images/brand2.svg';
import brand3 from '../../assets/images/brand3.svg';
import brand4 from '../../assets/images/brand4.svg';
import brand5 from '../../assets/images/brand5.svg';

const Brands = () => {
  return (
    <section className='brands common-container'>
      <div className="brands-wrapper">
        <h2 className="brands-heading">Our Famous Clients</h2>
        <div className="brand-image-container">
            <div>
                <img src={brand1} alt="" />
            </div>
            <div>
                <img src={brand2} alt="" />
            </div>
            <div>
                <img src={brand3} alt="" />
            </div>
            <div>
                <img src={brand4} alt="" />
            </div>
            <div>
                <img src={brand5} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
