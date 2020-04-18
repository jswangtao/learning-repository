import React, { Component } from 'react'
import Child3 from './Child3'
import Child4 from './Child4'

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

class Child1 extends Component {
  componentWillMount() {
    console.log('🚀🚀🚀wimi======>>>child1  componentWillMount')
  }

  componentDidMount() {
    console.log('🚀🚀🚀wimi======>>>child1  componentDidMount')
  }

  

  render() {
    return <div>{this.props.name}
      <Child3 name="Child3"></Child3>
      <Child4 name="Child4"></Child4>

    </div>
  }
}

export default Child1
