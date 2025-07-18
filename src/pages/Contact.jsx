import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addMessage} from "../redux/slice/message/messageSlice"
import loading from "../utils/loading.json"
import Lottie from 'lottie-react';

const Contact = () => {

  const [message,setMessage]=useState("");
  const dispatch=useDispatch();

  const {isLoading} =useSelector((state)=>state.messageSlice)

  const handleClick=()=>{
   dispatch(addMessage({message:message}))
  }
  return (
    <div className="bg-white py-12 px-6 max-w-3xl mx-auto text-right">
      <h2 className="text-2xl font-bold mb-6">اتصل بنا</h2>
        <textarea
          name="message"
          placeholder="اكتب رسالتك هنا..."
          required
          className="w-full border border-gray-300 rounded px-4 py-2 h-32 "
          onChange={(e)=>{
            setMessage(e.target.value)
          }}
        />
        <button
          className="bg-blue-700 w-1/2 text-white p-4 rounded-lg cursor-pointer mx-auto mt-2 hover:bg-blue-400"
          onClick={handleClick}
        >
          {isLoading == "Pending" ? (
            <p className="text-gray-200 flex justify-center items-center gap-2">
              <p> ارسال </p>
              <div className="w-10">
                <Lottie animationData={loading} />
              </div>
            </p>
          ) : (
            <p>  ارسال </p>
          )}
        </button>
    </div>
  );
};

export default Contact;
