import React, { useState, Component,useCallback ,useMemo} from 'react'
import './App.css'
import Child from './Child'



function App() {
  const [num, setNum] = useState(0);

  function expensiveFn() {
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += i;
    }
    console.log(result)
    return result;
  }

  const base = useMemo(expensiveFn, []);

  return (
    <div className="App">
      <h1>count：{num}</h1>
      <button onClick={() => setNum(num + base)}>+1</button>
    </div>
  );
}


// function App() {
//   const [title, setTitle] = useState("这是一个 title");
//   const [subtitle, setSubtitle] = useState("我是一个副标题");

//   const callback = () => {
//     setTitle("标题改变了");
//   };

//   // 通过 useCallback 进行记忆 callback，并将记忆的 callback 传递给 Child
//   const memoizedCallback = useCallback(callback, [])

//   return (
//     <div className="App">
//       <h1>{title}</h1>
//       <h2>{subtitle}</h2>
//       <button onClick={() => setSubtitle("副标题改变了")}>改副标题</button>
//       <Child onClick={memoizedCallback} name="桃桃" />
//     </div>
//   );
// }



// class App extends Component {
//   componentWillMount() {
//     console.log('🚀🚀🚀wimi======>>>app  componentWillMount')
//   }

//   componentDidMount() {
//     console.log('🚀🚀🚀wimi======>>>app  componentDidMount')
//   }

//   render() {
//     return (
//       <div>
//         <h1>parent</h1>
//         <Child name="wimi"></Child>
//       </div>
//     )
//   }
// }



export default App
