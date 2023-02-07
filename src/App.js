
import { useState , useEffect} from 'react';
//import './App.css';

function App() {
  const [data, setdata] = useState([]);
  const [cur , setcur ] = useState([]);

  

  const getApi = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) =>  {
    ;
     setdata(json)
     }
    )
  }
  useEffect (() => {
getApi();
  })
  
 
const showtext = () => {
  const a = Math.floor(Math.random() * data.length);
  return (setcur(data[a]));

};





  return (
    <div className="App flex flex-col bg-gray-500 text-center h-full">
    
    {/*<div className="justify-center items-center mx-auto">
{data.map(({id,title,body}) => { return (<div className='items-center mt-10 max-w-lg text-md text-white text-center' key={id}>
    <h1 className='text-xl '>{title}</h1>
    <p>{body}</p>
  </div>)
  })};
<button onClick={getApi} className='text-white bg-red-600 p-3 my-9 '>GetApi</button>
<p></p>
</div>*/}

   <div className='items-center h-screen'>
    <div className='items-center max-w-lg texts-center mx-auto mt-12'>
    <h1 className='h-32 text-white  p-24 text-lg border-b-2 italic'>{cur.title}</h1>
    <p className='h-64 p-24 text-md '>{cur.body}</p>
    <button onClick={showtext} className="text-white bg-red-600 p-3 my-5  ">click</button>
    </div>
   </div>
    
  </div>
  );
}

export default App;
