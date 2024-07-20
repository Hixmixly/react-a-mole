import { useEffect } from "react";
import MoleHill from '../images/molehill.png'; 

const EmptySlot = (props) => {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 1000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randSeconds);

    return () => clearTimeout(timer);
  }, [props]); 

  return (
    <div>
      <img 
        style={{ width: '30vw' }} 
        src={MoleHill} 
        alt="Empty Mole Hill"
      />
    </div>
  );
};

export default EmptySlot;
