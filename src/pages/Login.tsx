import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Button } from "antd";
import { useForm } from "react-hook-form";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "0001",
      password: "admin12345",
    },
  });
  const [login, { error }] = useLoginMutation();

  const onsubmit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const result = await login(userInfo).unwrap();
    const user = verifyToken(result.data.accessToken);

    dispatch(setUser({ user: user, token: result.data.accessToken }));
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label htmlFor="id"> ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password"> Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
