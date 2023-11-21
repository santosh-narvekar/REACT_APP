import { Form, Link, redirect } from "react-router-dom"
import FormInput from "../components/FormInput"
import SubmitBtn from "../components/SubmitBtn"
import { customFetch } from "../utils";
import { toast } from "react-toastify";

// registering user
export const action = async (action)=>{
  const {request} = action;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data)
  try{
    const response = await customFetch.post('/auth/local/register',data);
    toast.success('account created successfully');
    return redirect('/login');
  }catch(error){
    console.log(error);
    const errorMessage = error?.response?.data?.error?.message || 'Please double check your credentials';
    toast.error(errorMessage)
    return null;
  }
}

const Register = () => {
  return (
    <section
    className="h-screen grid place-items-center"
    >
      <Form method="POST"
      className="card w-96 p-8 bg-base-100 shadow-lg flex-col gap-y-4
      ">
        <h4 className="text-center text-3xl font-bold ">Register</h4>

        <FormInput
        type="text"
        label="username"
        name="username"
        defaultValue="james 122333 smith"
        />
        <FormInput
        type="email"
        label="email"
        name="email"
        defaultValue="james12233@gmail.com"
        />
        <FormInput
        type="password"
        label="password"
        name="password"
        defaultValue='secret'
        />
        <div className="mt-4">
          <SubmitBtn
          text='register'
          />
        </div>

        
      <p className="text-center">
        Already a member?
        
      <Link to='/login'
      className="ml-2 link link-hover link-primary capitalize">login</Link>
      </p>
      
      </Form>
    </section>
  )
}

export default Register
