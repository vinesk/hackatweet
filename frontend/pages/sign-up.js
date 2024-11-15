import Head from "next/head";
import SignUp from "../src/components/SignUp";

function SignUpPage() {
  return (
    <>
      <Head>
        <title>Sign-up / Hackatweet</title>
      </Head>
      <SignUp />
    </>
  );
}

export default SignUpPage;
