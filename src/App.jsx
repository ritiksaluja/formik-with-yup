  import { useState } from 'react'
  import {ValidationSchema} from './validations/validation.jsx'
  import { Formik, Form, Field, ErrorMessage } from 'formik';

  import './App.css'

  function App() {

   
  
    const handleSubmit = (values) => {
     
      console.log(values);
    };

    return (
      <div className='home'>
      <div className='form'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phoneNumber:'',
            image: null,
          }}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <Field type="text" name="name" placeholder="Enter your name" />
              <ErrorMessage name="name" component="div" className="error" />

              <Field type="email" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" className="error" />

              <Field type="text" name="phoneNumber" placeholder="Enter your phoneNumber " />
              <ErrorMessage name="phoneNumber" component="div" className="error" />

              <input
                type="file"
                name="image"
                onChange={(event) => {
                  setFieldValue('image', event.currentTarget.files[0]);
                }}
                accept="image/*"
              />
              <ErrorMessage name="image" component="div" className="error" />

              <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    
    )
  }

  export default App
