import { useState } from 'react'; 
import './App.css';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("Hello from useEffect");
  }, [count]);
  // the empty dependency array above "[]", means the hook runs ONCE after render and then stops 
  // once you place count as a parameter for this array, it tells the useEffect to watch for count to change state
  // and re-render afterwards 
  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
};

export default App
