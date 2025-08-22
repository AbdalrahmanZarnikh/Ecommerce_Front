import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { resetPassword } from "../../redux/slice/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

import loading from "../../utils/loading.json";
import HeadingAuth from "../../components/HeadingAuth/HeadingAuth";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, info, error } = useSelector((state) => state.authSlice);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await dispatch(resetPassword(data));

    if (resetPassword.fulfilled.match(result)) {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center p-10 h-screen dark:bg-zinc-800  bg-blue-400">
      <form
        className="bg-white shadow-2xl h-fit flex justify-center items-start flex-col w-full md:w-1/3 gap-4 rounded-lg p-10 dark:bg-zinc-700 dark:text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
         <HeadingAuth>تسجيل دخول جديد</HeadingAuth>
        <label htmlFor="email">الريد الاكتروني</label>
        <input
          type="email"
          id="email"
          className="w-full p-4 rounded-lg border border-gray-500"
          placeholder="ادخل البريد الاكتروني"
          {...register("email", { required: "the email is required" })}
        />
        {errors && <p className="text-red-500">{errors?.email?.message}</p>}
        <label htmlFor="password">كلمة المرور الجديدة </label>
        <input
          type="password"
          id="password"
          className="w-full p-4 rounded-lg border border-gray-500"
          placeholder=" ادخل كلمة المرور "
          {...register("newPassword", {
            minLength: { value: 8, message: "Too short password" },
          })}
        />
        {errors && <p className="text-red-500">{errors?.password?.message}</p>}

        <ButtonAuth isLoading={isLoading}>تسجيل الدخول</ButtonAuth>
      </form>
    </div>
  );
};

export default ResetPassword;
