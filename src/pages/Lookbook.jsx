import { useEffect, useRef, useState } from "react"

export const Lookbook = () => {
    const [timer, setTimer] = useState()
    let sec = 0
    const nameRef = useRef(null)
    const mailRef = useRef(null)
    const pswRef = useRef(null)

    useEffect(() => {
        const interval = setInterval(() => {
            sec++
            setTimer(sec)
        }, 1000);
        return () => {
            clearInterval(interval)
            sec = 0
        }
    }, [])

    const send = () => {
        const name = nameRef.current?.value
        const mail = mailRef.current?.value
        const psw = pswRef.current?.value

        const data = {
            name: name,
            mail: mail,
            psw: psw
        }
        console.log(data)
    }

    return (
        <div className="form">
            <div className="container">
                <input ref={nameRef} type="text" placeholder="Введите имя" />
                <input ref={mailRef} type="E-mail" placeholder="Введите @mail" />
                <input ref={pswRef} type="password" placeholder="Введите пароль" />
                <button type="btn" onClick={send}>Зарегистрироваться</button>
                <p>{timer}</p>
            </div>
        </div>
    )
}