import { useMutation } from "@apollo/client";

import { LOGIN_MUTATION } from "../gql/login";
import useAuth from "./useValidate";

function useLogin() {
  //  const [identifier, setIdentifier] = useState('');
  //   const [password, setPassword] = useState('');
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  //const auth = useAuth();

  const handleLogin = async (identifier, password) => {
    const response = await login({ variables: { identifier, password } });
    if (response.data.login) {
      //    auth.login(response.data.login);
      // You would also handle the JWT token storage here
      console.log(response.data.login);
    }
  };
  return { handleLogin };
}

export default useLogin;
