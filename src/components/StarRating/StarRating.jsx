import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating ,quantity }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color="rgb(244 158 13)" size={15}/>);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="rgb(244 158 13)" size={15}/>);
    } else {
      stars.push(<FaRegStar key={i} color="rgb(244 158 13)" size={15}/>);
    }
  }

  return <div className='flex gap-[4px] items-center mb-4 dark:text-white'>{stars} {rating} 
    {quantity? <span className="text-gray-500">({quantity} تقييم)</span> : ""}
   
</div>;
};

export default StarRating;