import img_card1 from '..//img/1.png';
import img_card2 from '..//img/2.png';
import img_card3 from '..//img/3.png';
import img_card4 from '..//img/4.png';

export const Cards = () => {
  return (
    <section className="cards">
      <div className="container">
        <img src={img_card1} alt="" />
        <div className="twoImg"><img src={img_card2} alt="" />
          <img src={img_card3} alt="" />
        </div>
        <img src={img_card4} alt="" />
      </div>
    </section>
  )
}