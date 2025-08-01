import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import updateReview from '../../redux/slice/review/act/updateReview';
import loading from "../../utils/loading.json";
import Lottie from 'lottie-react';

const ReviewUpdateForm = ({id , ratings ,title , reGetProduct, setreGetProduct , setOpenUpdateReviewId}) => {
  const [rating, setRating] = useState(ratings);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState(title);
  const [add , setAdd] = useState(false);
  const ratingLabels = {
  1: 'سيء',
  2: 'مقبول',
  3: 'جيد',
  4: 'جيد جدًا',
  5: 'ممتاز',
};

const dispatch = useDispatch();
const params = useParams();
  const handleSubmit = async(e) => {
    e.preventDefault();
      if(!localStorage.getItem("token")){
        toast.error("قم بتسجيل الدخول اولا")
        return ;
      }

    if (!comment.trim() || rating === 0) {
      toast.error('يرجى كتابة تعليق واختيار تقييم.');
      return;
    }
setAdd(true);
await dispatch(updateReview({id, ratings: rating, title:comment }));
setAdd(false);
setOpenUpdateReviewId(null);
setreGetProduct(!reGetProduct);
    // إعادة تعيين النموذج
    setRating(0);
    setHover(0);
    setComment('');
    
  };

  return (
    <div className="w-full md:w-2/3  mt-10 bg-white border border-gray-200 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">💬 عدّل تقييمك وتعليقك</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* ⭐ التقييم بالنجوم */}
        <div className="flex flex-col items-start gap-1">
          <div className="flex gap-2 text-4xl">
            {[1, 2, 3, 4, 5].map((val) => (
              <span
                key={val}
                onClick={() => setRating(val)}
                onMouseEnter={() => setHover(val)}
                onMouseLeave={() => setHover(0)}
                className={`cursor-pointer transition-all duration-200 ${
                  (hover || rating) >= val
                    ? 'text-yellow-400 scale-110'
                    : 'text-gray-300'
                }`}
                title={ratingLabels[val]}
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-1 h-5 transition-all duration-200">
            {ratingLabels[hover || rating] || ''}
          </p>
        </div>

        {/* 💬 حقل التعليق */}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none text-gray-700"
        />

        {/* زر الإرسال */}
        <button type="submit" className="bg-blue-700 w-1/2 text-white p-4 rounded-lg cursor-pointer mx-auto mt-2 hover:bg-blue-400">
         {add ? <div className="w-10 mx-auto"><Lottie animationData={loading}/></div>: "تعديل"} 
        </button>
      </form>
    </div>
  )
}

export default ReviewUpdateForm;