import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../redux/slice/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";

import loading from "../../utils/loading.json";
import HeadingAuth from "../../components/HeadingAuth/HeadingAuth";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";

const Login = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const { isLoading, info, error } = useSelector((state) => state.authSlice);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await dispatch(login(data));

    if (login.fulfilled.match(result)) {
      naviagte("/");
    }
  };

  return (
    <div className="flex justify-center items-center p-10 h-screen dark:bg-zinc-800  bg-blue-400">
      <form
        className="bg-white shadow-2xl h-fit flex justify-center items-start flex-col w-full md:w-1/3 gap-4 rounded-lg p-10 dark:bg-zinc-700 dark:text-white  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <HeadingAuth>تسجيل الدخول</HeadingAuth>
        <label htmlFor="email">البريد الاكتروني</label>
        <input
          type="email"
          id="email"
          className="w-full p-4 rounded-lg border border-gray-500"
          placeholder="ادخل البريد الاكتروني"
          {...register("email", { required: "the email is required" })}
        />
        {errors && <p className="text-red-500">{errors?.email?.message}</p>}
        <label htmlFor="password">كلمة المرور</label>
        <input
          type="password"
          id="password"
          className="w-full p-4 rounded-lg border border-gray-500"
          placeholder=" ادخل كلمة المرور "
          {...register("password", {
            minLength: { value: 8, message: "Too short password" },
          })}
        />
        <Link to={"/auth/forgotPassword"} className="text-blue-600">
          {" "}
          هل نسيت كلمة المرور ؟
        </Link>
        {errors && <p className="text-red-500">{errors?.password?.message}</p>}

        <ButtonAuth isLoading={isLoading}>تسجيل دخول </ButtonAuth>
        <div className="mx-auto">
          ليس لديك حساب ؟{" "}
          <Link to={"/auth/signup"} className="text-blue-600 ">
            {" "}
            انشاء حساب
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
