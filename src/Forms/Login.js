import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = (props) => {
    const formik=useFormik({
        initialValues:{
            email:"",
            password: ""
        },
        onSubmit:(data) => {
            console.log(data);
            axios.post('http://localhost:5000/api/login',data)
            .then(res => {
                localStorage.setItem('auth',JSON.stringify(res.data));
                console.log(res);
                props.history.push('/home');
                toast.success("Login Successfully")
            }).catch(err => {
                toast.error(err.response.data)
            })
            

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