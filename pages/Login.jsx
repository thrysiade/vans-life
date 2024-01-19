
import { useLoaderData, 
  Form, 
  redirect, 
  useActionData, 
  useNavigation 
} from "react-router-dom";
import { loginUser } from "../api";

const Login = () => {
  const message = useLoaderData();
  const error = useActionData();
  const navigation = useNavigation();

  return (
    <div className="login-container">
      {message && <p className="red">{message}</p>}
      {error && <p className="red">{error.message}</p> }
      <h1>Sign in to your account</h1>
      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button 
        disabled={navigation.state === 'submitting'}
        >
        {navigation.state === 'submitting' ? "Logging in.." : "Log in"}
        </button>
      </Form>
    </div>
  );
};

export default Login;

export function loader({ request }) {
  // const url = new URL(request.url).searchParams.get("message");
  // return url;
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
  // console.log(pathname)

  try{
    const data = await loginUser({ email, password });
    // console.log(data);
    localStorage.setItem("loggedin", true);
    return redirect(pathname);
  } catch(err) {
    return err
  }

}
