import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const formik=useFormik({
        initialValues:{
            email:"",
            password: ""
        },
        onSubmit:(userInput) => {
            console.log(userInput);
        },
        validationSchema:Yup.object({
            email:Yup.string()
            .email()
            .required("This field is required"),
            password:Yup.string()
            .required("This field is required"),
        })
    })

    return(
        <div className="container">
            <h2>User Login</h2>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text"className="form-control" name="email" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text"className="form-control" name="password" onChange={formik.handleChange} value={formik.values.password} />
                    {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}
export default Login;