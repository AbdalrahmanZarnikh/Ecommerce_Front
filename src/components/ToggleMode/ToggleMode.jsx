import "./ToggleMode.css"
import {toggleMode} from "../../redux/slice/user/userSlice"
import { useDispatch } from "react-redux";

const ToggleMode = ({isVisibile=true}) => {
    const dispatch=useDispatch()
 

  return (
    <label class={`ui-switch ${isVisibile  ? " " :"hidden md:block"} `}>
      <input type="checkbox" onClick={(e)=>{
        console.log(e.target.checked)
        dispatch(toggleMode(e.target.checked))
      }}/>
      <div class="slider">
        <div class="circle"></div>
      </div>
    </label>
  );
};

export default ToggleMode;
