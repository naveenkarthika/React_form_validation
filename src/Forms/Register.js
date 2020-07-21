import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = (props) => {
    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            password: "",
            confirmPassword:""

        },
        onSubmit:(data) => {
            console.log(data);
            axios.post('http://localhost:5000/api/register',data)
            .then(res => {
                console.log(data);
                props.history.push('/login');
                toast.success("Successfully Register");
            }).catch(err => {
                toast.error(err.response.data)
            })
        },
        validationSchema:Yup.object({
            name:Yup.string()
            .required("This field is required")
            .min(5,"Name must be 5 character")
            .max(15,"Name should be below 15 character"),
            email:Yup.string()
            .email()
            .required("This field is required"),
            password:Yup.string()
            .required("This field is required"),
            confirmPassword:Yup.string()
            .required("This field is required")
            .oneOf([Yup.ref("password"),null],"confirmPassword & password must be same")
        })
    })

    return(
        <div className="container">
            <h2>Create your new Account?</h2>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text"className="form-control" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                    {formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                </div>
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
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="text"className="form-control" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPassword} />
                    {formik.errors.confirmPassword ? <div className="text-danger">{formik.errors.confirmPassword}</div> : null}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
export default Register;