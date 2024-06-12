import { useEffect, useState } from "react"
import { CardForWomanSt } from "../components/CardForWomanSt"
import axios from "axios"
import './ManSaction.scss'


export const ManSaction = () => {

  const [womProdGet, womProdSet] = useState([])

  const getWomanProducts = async () => {
    try {
      const resp = await axios(`https://fakestoreapi.com/products/category/men's%20clothing`)
      console.log(resp)
      womProdSet(resp.data)
    } catch (error) {
      console.error("Ошибка при получении данных: ", error)
    }
  }

  useEffect(() => {
    getWomanProducts()
  }, [])

  return (
    <section className="WomenSaction">
      <div className="container">
        <p className="WomenS__title">MEN'S FASHION</p>
        <p className="WomenS__discrip">Shop our new arrivals from established brands</p>

        <div className="WomenCards">
          {
            womProdGet?.map(el => (
              <CardForWomanSt
              key={el?.id}
                imgLink={el?.image}
                brand={'igure'}
                discrip={el?.title}
                oldPrice={'$229.00'}
                newPrice={el?.price}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}