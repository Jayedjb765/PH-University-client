import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "0001",
      password: "admin12345",
    },
  });
  const [login] = useLoginMutation();

  const onsubmit = async (data: FieldValues) => {
    const tostId = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const result = await login(userInfo).unwrap();
      const user = verifyToken(result.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: result.data.accessToken }));
      navigate(`/${user.role}/dashboard`);
      toast.success("Log in successfully", { id: tostId, duration: 2000 });
    } catch (err) {
      toast.error("Something went erong", { id: tostId, duration: 2000 });
    }
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
