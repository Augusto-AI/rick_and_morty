import React from "react";
import styles from "./Form.module.css";
import validation from "./validation";
import Rick1 from "../assets/Img/Rick1.png"



export default function Form(props) {

    const [userData, setUserData] = React.useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = React.useState({});
    // errors = {}
    // errors = { email: tiene...., password: tiene...}

    const handleChange = event => {
        const {name, value} = event.target; // { name:-, value:- }
        setUserData({
            ...userData,
            [name]: value
        })
        // console.log(userData);
        setErrors(validation({
            ...userData,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData);
    }

    return(
        <div className={styles.button2} >
            <div className={styles.card2} >
            <form className={styles.button2}onSubmit={handleSubmit}>
                <h1>Igresa a tu cuenta</h1>
            <img className={styles.img} src={Rick1} alt="rick1" />
                <input
                    type="text"
                    name="email"
                    className={styles.button2}
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            
                <p className={styles.error}>{errors.email ? errors.email : null}</p>

                <input
                    type="password"
                    name="password"
                    className={styles.button2}
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <p className={styles.error}>{errors.password ? errors.password : null}</p>
                

                <button className={styles.button2} type="submit">Submit</button>

            </form>
            </div>
        </div>
    )
}

/*
1- Cargar lo que el usuario ingresa en "userData" {email, password}
2- Valido lo que hay en userData + lo que está ingresando {}
    Cargo al objeto en "errors"
3- Tomo "errors" y muestro mensajes al usuario
*/