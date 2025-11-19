import { useFormik } from "formik";
export function FormikDemo1(){

function ValidateUser(user)//step1.collects user data and return errors
{
var errors = {UserName:'', Mobile:'', City:'', Gender:''};
// User Name
if(user.UserName.length===0)//step2.write all validation functions inside vallidation function
    {
errors.UserName = 'User Name Required';
} else 
    {
if(user.UserName.length<4)
    {
errors.UserName = 'Name too short';
} else 
    {
errors.UserName = '';
}
}
// Mobile
if(user.Mobile.length===0){
errors.Mobile = 'Mobile Required';
} else {
if(user.Mobile.match(/\+91\d{10}/)){
errors.Mobile = '';
} else {
errors.Mobile = 'Invalid Mobile';
}
}
// City
if(user.City==='-1'){
errors.City = 'Please select your city';
} else {
errors.City = '';

}
if(user.Gender==='') {
errors.Gender = 'Please select gender';
} else {
errors.Gender = '';
}
return errors;//end of step1
}

const formik = useFormik({//step3.attach validation function with formik
initialValues: {
UserName: '',
Mobile : '',
City: '',
Gender: ''
},
validate : ValidateUser,
onSubmit: (user) => {
console.log(user);
}
})
return(
<div className="container-fluid">
<h2>Register User</h2>
<form onSubmit={formik.handleSubmit}>
<dl>
<dt>User Name</dt>
<dd><input type="text" onChange={formik.handleChange} name="UserName" /></dd>

<dd className="text-danger">{formik.errors.UserName}</dd>
<dt>Mobile</dt>
<dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>

<dd className="text-danger">{formik.errors.Mobile}</dd>
<dt>Your City</dt>
<dd>
<select name="City" onChange={formik.handleChange}>
<option value="-1">Choose City</option>
<option>Delhi</option>
<option>Hyderabad</option>
</select>
</dd>

<dd className="text-danger">{formik.errors.City}</dd>
<dt>Gender</dt>
<dd>
<input type="radio" onChange={formik.handleChange}

name="Gender" value="Male" /> <label>Male</label>

<input type="radio" onChange={formik.handleChange}

name="Gender" value="Female" /> <label>Female</label>

</dd>
<dd className="text-danger">{formik.errors.Gender}</dd>
</dl>
<button type="submit">Register</button>
</form>
</div>
)
}