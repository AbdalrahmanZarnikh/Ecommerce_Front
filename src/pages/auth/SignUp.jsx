import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { signup } from "../../redux/slice/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";

import loading from "../../utils/loading.json";


const SignUp = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const { isLoading, info, error } = useSelector((state) => state.authSlice);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await dispatch(signup(data));

    if (signup.fulfilled.match(result)) {
      console.log("البيانات الجديدة:", result.payload);
      naviagte("/");
    }
  };

  return (
    <div className="flex justify-center items-center p-10   bg-blue-400">
      <form
        className="bg-white shadow-2xl h-fit flex justify-center items-start flex-col w-full md:w-1/3 gap-4 rounded-lg p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mx-auto my-10 text-4xl font-bold">انشاء حساب جديد</h1>
        <label htmlFor="name">الاسم</label>
        <input
          type="text"
          id="name"
          className="w-full p-4 rounded-lg border border-gray-500"
          placeholder="ادخل الاسم "
          {...register("name", { required: "the name is required" })}
        />
        {errors && <p className="text-red-500">{errors?.name?.message}</p>}
        <label htmlFor="email">الريد الاكتروني</label>
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
        {errors && <p className="text-red-500">{errors?.password?.message}</p>}
        <label htmlFor="confirmPassword"> تأكيد كلمة المرور</label>
        <input
          type="password"
          id="confirmPassword"
          className="w-full p-4 rounded-lg border border-gray-500"
          placeholder="أعد كتابة كلمة المرور"
          {...register("confirmPassword", {
            required: "the confirmPassword is required",
          })}
        />
        {errors && (
          <p className="text-red-500">{errors?.confirmPassword?.message}</p>
        )}
        <button
          className="bg-blue-700 w-1/2 text-white p-4 rounded-lg cursor-pointer mx-auto mt-2 hover:bg-blue-400"
          type="submit"
        >
          {isLoading == "Pending" ? (
            <p className="text-gray-200 flex justify-center items-center gap-2">
              <p>انشاء حساب </p>
              <div className="w-10">
                <Lottie animationData={loading} />
              </div>
            </p>
          ) : (
            <p>انشاء حساب</p>
          )}
        </button>
        <div className="mx-auto">
          لديك حساب بالفعل ؟{" "}
          <Link to={"/auth/login"} className="text-blue-600">
            {" "}
            تسجيل الدخول
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
