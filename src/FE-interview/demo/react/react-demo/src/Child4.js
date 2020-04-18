import React, { Component } from 'react'
import Child7 from './Child7'
import Child8 from './Child8'

// function Child(props) {
//   console.log(props);
//   return (
//     <>
//       <button onClick={props.onClick}>改标题</button>
//       <h1>{props.name}</h1>
//     </>
//   );
// }

// function areEqual(prevprops, nextprops) {
//   console.log('🚀🚀🚀wimi======>>>', prevprops, nextprops)

//   if (prevprops === nextprops) {
//     return true
//   }
// }

class Child4 extends Component {
  componentWillMount() {
    console.log('🚀🚀🚀wimi======>>>child4  componentWillMount')
  }

  componentDidMount() {
    console.log('🚀🚀🚀wimi======>>>child4  componentDidMount')
  }

  

  render() {
    return <div>{this.props.name}
      <Child7 name='Child7'></Child7>
      <Child8 name='Child8'></Child8>
    </div>
  }
}

export default Child4
