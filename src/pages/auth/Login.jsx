import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../redux/slice/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const naviagte=useNavigate();

  const { isLoading, info, error } = useSelector((state) => state.authSlice);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await dispatch(login(data));

    if (login.fulfilled.match(result)) {
      console.log("البيانات الجديدة:", result.payload);
      naviagte("/")
    }
  };


  return (
    <div className="flex justify-center items-center p-10 h-screen  bg-blue-400">
      <form
        className="bg-white shadow-2xl h-fit flex justify-center items-start flex-col w-full md:w-1/3 gap-4 rounded-lg p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mx-auto my-10 text-4xl font-bold">  تسجيل الدخول</h1>
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
          <Link to={"/auth/forgotPassword"} className="text-blue-600"> هل نسيت كلمة المرور ؟</Link>
        {errors && <p className="text-red-500">{errors?.password?.message}</p>}
   
        <button
          className="bg-blue-700 w-1/2 text-white p-4 rounded-lg cursor-pointer mx-auto mt-2"
          type="submit"
        >
           {isLoading == "Pending" ? (
            <p className="text-gray-200">تسجيل دخول  ...</p>
          ) : (
            <p> تسجيل دخول</p>
          )}
        </button>
        <div className="mx-auto">
         ليس لديك حساب  ؟{" "}
          <Link to={"/auth/signup"} className="text-blue-600">
            {" "}
             انشاء حساب
          </Link>
        </div>
      </form>

    </div>
  );
};

export default Login;
