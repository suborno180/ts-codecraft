import SignupUpForm from "../components/SignupUpForm";

const SignupPage = () => {

  const HOST_URL = String(process.env.NEXTAUTH_URL)

  if (!HOST_URL) {
    throw new Error("Please provide NEXTAUTH_URL='' in .env file. ")
  }

  return (
    <SignupUpForm hostUrl={HOST_URL} />
  );
};

export default SignupPage;