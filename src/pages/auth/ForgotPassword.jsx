import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { forgotPassword } from "../../redux/slice/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

import loading from "../../utils/loading.json";
import Lottie from "lottie-react";
import HeadingAuth from "../../components/HeadingAuth/HeadingAuth";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, info, error } = useSelector((state) => state.authSlice);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await dispatch(forgotPassword(data));

    if (forgotPassword.fulfilled.match(result)) {
      navigate("/auth/resetCode");
    }
  };

  return (
    <div className="flex justify-center items-center p-10 h-screen  bg-blue-400">
      <form
        className="bg-white shadow-2xl h-fit flex justify-center items-start flex-col w-full md:w-1/3 gap-4 rounded-lg p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
          <HeadingAuth>الحصول على رمز التحقق</HeadingAuth>
        <label htmlFor="email">الريد الاكتروني</label>
        <input
          type="email"
          id="email"
          className="w-full p-4 rounded-lg border border-gray-500"
          placeholder="ادخل البريد الاكتروني"
          {...register("email", { required: "the email is required" })}
        />
        {errors && <p className="text-red-500">{errors?.email?.message}</p>}

        {error && <p className="text-red-500">{error}</p>}

        <button
          className="bg-blue-700 w-1/2 text-white p-4 rounded-lg cursor-pointer mx-auto mt-2 hover:bg-blue-400"
          type="submit"
        >
          {isLoading == "Pending" ? (
            <p className="text-gray-200 flex justify-center items-center gap-2">
              <p> جاري الارسال </p>
              <div className="w-10">
                <Lottie animationData={loading} />
              </div>
            </p>
          ) : (
            <p> ارسال </p>
          )}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
