import { NextPage } from "next";
import Swal from 'sweetalert2'
import style from '../../styles/alert.module.css';



const ingresoIdentificacion = ({description}) => {

const alertsuit = () => {

    console.log(description);
    Swal.fire({
        html: `<h1>Terminos y Condiciones </h1>
        <p>${description}</p>
        
        
        `
      })



}


    return(

        <div>

    <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Tipo de identificación</label>
          <select className="form-select" aria-label="Disabled select example">
            <option selected>documento</option>
            <option value="1">Cádula</option>
            <option value="2">Cédula nacional</option>
            <option value="3">Pasaporte</option>
        </select>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Número de documento</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="check-term-conditions" htmlFor="exampleCheck1">He leido y acepto los   <a onClick={alertsuit} className={style.alert}> términos y condiciones</a></label>
        </div>
        <button type="submit" className="btn btn-primary border-radius:100% ">Submit</button>



        </form>
          


        </div>



    )

 





}

ingresoIdentificacion.getInitialProps = () => {

    return fetch("http://localhost:8080/term_and_condition").then(data => data.json()).then(response => {
    console.log('en la peticion',response);
       
    const {description} = response
    
        return {description}
    
    })
    
    
    }

export default ingresoIdentificacion;


