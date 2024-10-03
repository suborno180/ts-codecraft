import SignInForm from '../components/signinForm';

const HOST_URL = process.env.NEXTAUTH_URL

if (!HOST_URL) {
  throw new Error("Please Provide NEXTAUTH_URL in .env variable")
}

const SignInPage = () => {


  return (
    <SignInForm />
  );
};

export default SignInPage;
