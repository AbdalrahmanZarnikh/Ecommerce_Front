import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { resetCode } from "../../redux/slice/auth/authSlice";
import loading from "../../utils/loading.json";
import Lottie from "lottie-react";
import HeadingAuth from "../../components/HeadingAuth/HeadingAuth";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";

const ResetCode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.authSlice);

  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const focusInput = (index) => {
    if (inputsRef.current[index]) {
      inputsRef.current[index].focus();
    }
  };

  const handleChange = (index, e) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      const updatedDigits = [...digits];
      updatedDigits[index] = value;
      setDigits(updatedDigits);

      if (index < 5) {
        focusInput(index + 1);
      } else {
        submitCode(updatedDigits.join(""));
      }
    } else if (value === "") {
      const updatedDigits = [...digits];
      updatedDigits[index] = "";
      setDigits(updatedDigits);
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && digits[index] === "" && index > 0) {
      focusInput(index - 1);
    }
  };

  const submitCode = async (code) => {
    const result = await dispatch(resetCode({ resetCode: code }));

    if (resetCode.fulfilled.match(result)) {
      navigate("/auth/resetPassword");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (digits.every((d) => d !== "")) {
      submitCode(digits.join(""));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-400 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-2xl p-10 w-full max-w-md flex flex-col gap-6"
        dir="ltr"
      >
         
        <HeadingAuth>أدخل رمز التحقق</HeadingAuth>
        <div className="flex justify-center gap-3 ">
          {digits.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(idx, e)}
              onKeyDown={(e) => handleBackspace(idx, e)}
              ref={(el) => (inputsRef.current[idx] = el)}
              className="w-10 h-12 text-center border rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
        </div>

          <ButtonAuth isLoading={isLoading}>ارسال</ButtonAuth>

        <Link to={"/auth/login"} className="text-blue-600">
          {" "}
          العودة الى تسجيل الدخول
        </Link>
      </form>
    </div>
  );
};

export default ResetCode;
