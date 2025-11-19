import {Formik,Field,ErrorMessage,Form} from 'formik';
import * as yup from "yup";
export function FormikDemo3()
{
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            
            <Formik initialValues={{UserName:'',Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('User name Required').min(4,'Name is too short'),Mobile:yup.string().required('mobile required').matches(/\+91\d{10}/,'Invalid Mobile')})} onSubmit={(values)=>{console.log(values)}}>
            {

            form=>
            <Form>
                <dl>
                    <dt>UserName</dt>
                    <dd ><Field type="text" name="UserName"/></dd>
                    <dd className="text-danger"><ErrorMessage name="UserName"/></dd>
                    <dt>Mobile</dt>
                    <dd><Field type="text" name="Mobile"/></dd>
                    <dd className="text-danger"><ErrorMessage name="Mobile"/></dd>
                    
                </dl>
                <button disabled={(form.isValid)?false:true} type="submit">Submit</button>
                <div className="mt-4 text-danger" style={{display:(form.isValid)?'none':'block'}}>
                <h4>Please check the following errors:</h4>
                <ul>
                {
                    Object.keys(form.errors).map(key=><li key={key}>{form.errors[key]}</li>)
                }
                </ul>
                </div>
            
                
            </Form>
}
            </Formik>
        </div>
    )
}