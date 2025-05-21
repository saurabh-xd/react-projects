import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
     const interval = setInterval(() => {
    setCount(prev=>{
      if(prev<100) return prev + 1;
      clearInterval(interval);
      return 100;
    });
  },15);
  return ()=> clearInterval(interval);
},[]);

  return (
    <>
      <div className="box">
        <div className="trophy">
          <Trophy size={48} className="mx-auto mb-4 trophy-icon" />
          <h1>100days of code</h1>
          <h2>challenge complete!</h2>

           <div className="progress-wrapper">
          <div className="progress-bar"></div>
        </div>
        <p className="progress-text">100% Complete</p>

        <div className="big-counter">
  {count} 
  {count === 100 && <div className="completed-text"> days completed! </div>}
</div>

      
        </div>
        
       
      </div>
    </>
  );
}

export default App;
