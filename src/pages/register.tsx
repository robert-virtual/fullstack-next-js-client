import React from 'react';
import { Form, Formik } from "formik";
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
interface Props {

}

/*
function FormikExample() {
    function validateName(value) {
      let error
      if (!value) {
        error = "Name is required"
      } else if (value.toLowerCase() !== "naruto") {
        error = "Jeez! You're not a fan 😱"
      }
      return error
    }
  
    
  }
*/

const Register:React.FC<Props> = ()=> {

    return (
       <Formik onSubmit={console.log} 
       initialValues={{
        name:"",
        email:"",
        password:""
       }}>
           {() => (
               <Form>
                   <h2>Crear Cuenta</h2>
                   <FormControl>
                        <FormLabel htmlFor="name">Nombre completo</FormLabel>  
                        <Input type="text" placeholder="Juan Perez" id="name" />
                        <FormErrorMessage>Campo Requerido</FormErrorMessage>
                   </FormControl>
                   <input type="email" placeholder="email" />
                   <input type="password" placeholder="clave" />
                   <input type="password" placeholder="confirme clave" />
                   <input type="submit" value="Crear cuenta" />
               </Form>
           )}
       </Formik>
    )

}

export default Register