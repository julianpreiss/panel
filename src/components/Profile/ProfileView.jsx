import React from 'react'
import {useState , useEffect} from 'react'
import './ProfileView.css'


function ProfileView(props) {

    const [values, setValues] = useState({
        id: "",
        name: "",
        last_name: "",
        email: "",
        user_name: "",
        date_birth: "",
        phone: "",
    });


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user + 'con ID: ' + user._id) 
        fetch('http://localhost:8001/api/users/id?id=' + user._id)
        .then(function(res){
            return res.json()
        })
        .then((user) => {
            setValues({
                id: user._id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                user_name: user.user_name,
                date_birth: user.date_birth,
                phone: user.phone,
            })
            console.log(user._id)
        })
    }, [])

    const handleInputChange = (event) => {
        console.log(event.target.value)
        event.preventDefault()
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    
    const actualizarDatos = (event) => {
        const user = JSON.parse(localStorage.getItem('user'))
        event.preventDefault()
        fetch('http://localhost:8001/api/users/id?id=' + user._id , {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(function(res){
            return res.json()
        })
        .then((user) => {
            console.log(user)
        })
    }



    return (
      <div className="ProfileView">
        <div className="ProfileView-container">
            <div className="ProfileView-container-left">
                <div className="ProfileView-container-left-img">
                    <h2>Hola {values.name} {values.last_name}!</h2>
                    <form action="POST" className="formulario-usuario" onSubmit={actualizarDatos}>
                        <label>Nombre</label>
                        <input type="text" value={values.name} name="name" onChange={handleInputChange} />
                        <label>Apellido</label>
                        <input type="text" value={values.last_name} name="last_name" onChange={handleInputChange} />
                        <label>Email</label>
                        <input type="email" value={values.email} name="email" onChange={handleInputChange}/>
                        <label>Nombre de usuario</label>
                        <input type="text" value={values.user_name} name="user_name" onChange={handleInputChange}/>
                        <label>Fecha de nacimiento</label>
                        <input type="date" value={values.date_birth} name ="date_birth" onChange={handleInputChange}/>
                        <label>Teléfono</label>
                        <input type="text" value={values.phone} name="phone" onChange={handleInputChange}/>
                        <button type="submit" className='btn-usala'>Actualizar Perfil</button>
                    </form>
                    
                </div>
            </div>
        </div>
      </div>
    );
}

export default ProfileView;