import  { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { useDispatch } from "react-redux";

import CategoryCard from "../components/CategoryCard/CategoryCard";

import loading from "../utils/loading.json";
import notFound from "../utils/notfound.json";
import Lottie from "lottie-react";
import ButtonReverse from "../components/ButtonReverse/ButtonReverse";
import Heading from "../components/Heading/Heading";


const Show = ({ title, getThunk }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  useEffect(() => {
    const fn = async () => {
      setIsLoading("Pending");
      const result = await dispatch(getThunk());
      if (getThunk.fulfilled.match(result)) {
        setData(result.payload.data);
        setIsLoading("");
      } else if (getThunk.rejected.match(result)) {
        setIsLoading("Fail");
      }
    };

    fn();
  }, [dispatch]);


  const to=title=="تسوق حسب القسم"?"categories":"brands"
  
  return (
    <Container>
      <ButtonReverse/>
      <Heading> {title} </Heading>
      {data?.length > 0 ? (
        <div className="grid gird-cols-1 md:grid-cols-4 justify-items-center gap-2">
          {data?.map((ele, index) => {
            return (
              <CategoryCard
                key={ele._id}
                name={ele.name}
                image={ele.image?.url}
                id={ele._id}
                to={to}
              />
            );
          })}
        </div>
      ) : (
        <div>
          {isLoading == "Pending" ? (
            <div className="mx-auto mt-20 w-10 text-7xl ">
              <Lottie animationData={loading} />
            </div>
          ) : isLoading == "Fail" ? (
            <div className="mx-auto mt-40 w-20">
              <Lottie animationData={notFound} />
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </Container>
  );
};

export default Show;
