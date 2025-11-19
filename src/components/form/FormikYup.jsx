import {useFormik} from "formik";
import * as yup from "yup";
export function FormikDemo2()
{
    const formik=useFormik({
        initialValues:{
            UserName:'',
            Mobile:'',
            City:'',
            Gender:''},
            validationSchema:yup.object({UserName:yup.string().required('user name required').min(4,'Name is toos hort'),Mobile:yup.string().required('Mobile number is required').matches(/\+91\d{10}/,'invalid Mobile')}),onSubmit:(user)=>{console.log(user)} })
    return(
        <div className="container-fluid">
            <h2>Register Form</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="UserName"/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="Mobile"/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={formik.handleChange} name="City">
                           <option value="-1">Select your city</option>
                            <option>Delhi</option>
                            <option>Hyderabad</option>
                        </select>
                   </dd>
                   <dd className="text-danger">{formik.errors.City}</dd>
                   <dt>Gender</dt>
                   <dd>
                    <input type="radio" onChange={formik.handleChange} name="Gender" value="Male"/><label>Male</label>
                    <input type="radio" onChange={formik.handleChange} name="Gender" value="Female"/><label>Female</label>

                   </dd>
                   <dd className="text-danger">{formik.errors.gender}</dd>

                </dl>
                <button type="submit" disabled={formik.dirty}>Register</button>
            </form>
        </div>
    )
}
 