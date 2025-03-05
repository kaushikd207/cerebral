import axios from "axios";
export const LoginFetch = async (
  username,
  password,
  setError,
  setLoginValue
) => {
  try {
    const response = await axios.post(
      "http://3.111.196.92:8020/api/v1/login/",
      {
        username,
        email: "string",
        phone_number: "string",
        input_code: 0,
        password,
      }
    );
    if (response?.data?.message !== "Successfully Logged in") {
      setError(response.data.message);
    } else {
      setLoginValue();
      setError("");
    }
  } catch (err) {
    setError("Invalid username or password");
  }
};

export const getCardData = async () => {
  // Prepare the credentials for Basic Authentication
  const username = "trial";
  const password = "assignment123";
  const base64Credentials = btoa(`${username}:${password}`); // base64 encode the username:password

  const data = await axios
    .get("http://3.111.196.92:8020/api/v1/sample_assignment_api_1/", {
      headers: {
        Authorization: `Basic ${base64Credentials}`, // Pass the encoded credentials here
        "Content-Type": "application/json",
      },
    })
    .then((res) => console.log(res.data));
};
