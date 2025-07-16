import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { resetPassword } from "../../redux/slice/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

import loading from "../../utils/loading.json";

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
    <div className="flex justify-center items-center p-10 h-screen  bg-blue-400">
      <form
        className="bg-white shadow-2xl h-fit flex justify-center items-start flex-col w-full md:w-1/3 gap-4 rounded-lg p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mx-auto my-10 text-4xl font-bold"> تسجيل دخول جديد</h1>
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

        <button
          className="bg-blue-700 w-1/2 text-white p-4 rounded-lg cursor-pointer mx-auto mt-2 hover:bg-blue-400"
          type="submit"
        >
          {isLoading == "Pending" ? (
            <p className="text-gray-200 flex justify-center items-center gap-2">
              <p>تسجيل دخول </p>
              <div className="w-10">
                <Lottie animationData={loading} />
              </div>
            </p>
          ) : (
            <p> تسجيل دخول</p>
          )}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
