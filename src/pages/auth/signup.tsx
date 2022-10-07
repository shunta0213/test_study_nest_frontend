import { NextPage } from "next";
import SignUpTemplate from "src/components/templates/SignUpTemplate/SingUpTemplate";

const SignIn: NextPage = () => {
  const postData = async (
    username: string,
    firstname: string,
    lastname: string,
    email: string
  ) => {
    try {
      await fetch("http://localhost:5000/users", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          firstname: firstname,
          lastname: lastname,
          email: email,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpTemplate postData={postData} />;
};

export default SignIn;
