import Head from "next/head";
import SignIn from "../src/components/SignIn";

function SignInPage() {
  return (
    <>
      <Head>
        <title>Sign-in / Hackatweet</title>
      </Head>
      <SignIn />
    </>
  );
}

export default SignInPage;
