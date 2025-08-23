// React And Hooks
import React, { useEffect, useState } from "react";

//Hook-Form
import { useForm } from "react-hook-form";

import "../../Forms.css";

// Styles
import { useNavigate } from "react-router-dom";

// Thunks

// Redux
import { useDispatch, useSelector } from "react-redux";
// React-Hot-Toast
import { getLoggedUserData, updateLoggedUserData, updatePassword } from "../../redux/slice/user/userSlice";

import loading from "../../utils/loading.json"
import Lottie from "lottie-react";

const Info = () => {
  const dispatch = useDispatch();

  const [passwordEdit, setPasswordEdit] = useState(false);
  const [infoEdit, setInfoEdit] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fn = async () => {
      const result = await dispatch(getLoggedUserData());
      if (getLoggedUserData.fulfilled.match(result)) {
        setName(result.payload.data.name);
        setEmail(result.payload.data.email);
      }
    };
    fn();
  }, [dispatch]);

  // Hook-Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name,
      email,
    },
  });

  useEffect(() => {
    reset({ name, email });
  }, [name, email, reset]);

  // Function To Handle Submit
  const onSubmit = (data) => {

    if(passwordEdit){
      dispatch(updatePassword(data));
    }
    else if(infoEdit){
      dispatch(updateLoggedUserData(data));

    }
  };

  const {isLoading}=useSelector((state)=>state.userSlice)

  return (
    <>
      <div className="flex justify-around items-center mb-10 gap-2 ">
        <button
          onClick={() => {
            setPasswordEdit(!passwordEdit);
          }}
          className={` rounded-lg p-2 text-white transition-all duration-300 cursor-pointer ${
            !passwordEdit
              ? "bg-orange-600 hover:bg-blue-300"
              : "bg-red-600 hover:bg-red-300"
          } ${infoEdit && "bg-gray-500"}  text-sm`}
          disabled={infoEdit}
        >
          {!passwordEdit ? "تعديل كلمة المرور" : "الغاء"}
        </button>
        <button
          onClick={() => {
            setInfoEdit(!infoEdit);
          }}
          className={` rounded-lg p-2 text-white transition-all duration-300 cursor-pointer ${
            !infoEdit
              ? "bg-orange-600 hover:bg-blue-300"
              : "bg-red-600 hover:bg-red-300"
          } ${passwordEdit && "bg-gray-500"} text-sm`}
          disabled={passwordEdit}
        >
          {!infoEdit ? "تعديل الاسم و البريد الاكتروني" : "الغاء"}
        </button>
      </div>
      <form
        className="student-form-form flex flex-col "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Form Fields */}

        <div className={`form-group`}>
          <label htmlFor="Name" className={`${passwordEdit && "hidden"} dark:text-white`}>
            الاسم
          </label>
          <input
            id="Name"
            type="text"
            placeholder={`${email ? "ادخل الاسم":"الرجاء الانتظار ...."}`}
            {...register("name")}
            className={`${passwordEdit && !infoEdit && "hidden"} `}
          />
          {errors.name && (
            <span className="text-red-400">{errors.name.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="ُEmail" className={`${passwordEdit && "hidden"} dark:text-white `}>
            البريد الالكتروني
          </label>
          <input
            id="Email"
            type="text"
            placeholder={`${email ? "ادخل بريد الكتروني":"الرجاء الانتظار ...."}`}
            {...register("email")}
            className={`${passwordEdit && !infoEdit && "hidden"}`}
          />
          {errors.email && (
            <span className="text-red-400">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label
            htmlFor="Password"
            className={`${!passwordEdit && infoEdit && "hidden"} dark:text-white`}
          >
            كلمة المرور
          </label>
          <input
            id="Password"
            type="password"
            placeholder="ادخل كلمة مرور ..."
            {...register("password")}
            className={`${!passwordEdit && infoEdit && "hidden"} `}
          />
          {errors.password && (
            <span className="text-red-400">{errors.password.message}</span>
          )}
        </div>

        <button
          className={`${
            !passwordEdit && !infoEdit && "hidden"
          } bg-orange-700 p-4 text-white cursor-pointer hover:bg-orange-300 rounded-lg  `}
          type="submit"
        >
          {isLoading==="Pending" ? <div className="w-10 mx-auto"><Lottie animationData={loading} /></div>:"تعديل"}
        </button>
      </form>
    </>
  );
};

export default Info;
