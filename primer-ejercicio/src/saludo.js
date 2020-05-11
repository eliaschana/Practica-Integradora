import React, {Component} from 'react'

class Saludo extends Component
{

    render(){
        const{nombre,apellido,edad}= this.props;

        return(

             <div>
            <h1> hola soy {nombre} {apellido}, y tengo {edad} anio </h1>
      
            </div>
        );
            
    }

}
export default Saludo