import { useEffect, useState } from "react";
import { CardForWomanSt } from '../components/CardForWomanSt';
import axios from "axios";

export const WomenSaction = () => {
  const [womProdGet, womProdSet] = useState([]);

  const getWomanProducts = async () => {
    try {
      const resp = await axios.get(
        `https://fakestoreapi.com/products/category/women's%20clothing`
      );
      console.log(resp);
      womProdSet(resp.data);
    } catch (error) {
      console.error("Ошибка при получении данных: ", error);
    }
  };

  useEffect(() => {
    getWomanProducts();
  }, []);

  return (
    <section className="WomenSaction">
      <div className="container">
        <p className="WomenS__title">Women's Fashion</p>
        <p className="WomenS__discrip">
          Shop our new arrivals from established brands
        </p>

        <div className="WomenCards">
          {womProdGet?.slice(0, 4).map((el, index) => (
            <CardForWomanSt
              key={index}
              imgLink={el.image}
              brand={el.title}
              discrip={el.description}
              oldPrice={`$${el.price}`}
              newPrice={`$${(el.price * 0.8).toFixed(2)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomenSaction;