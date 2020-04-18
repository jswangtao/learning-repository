import React, { Component } from 'react'
import Child5 from './Child5'
import Child6 from './Child6'

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

class Child3 extends Component {
  componentWillMount() {
    console.log('🚀🚀🚀wimi======>>>child3  componentWillMount')
  }

  componentDidMount() {
    console.log('🚀🚀🚀wimi======>>>child3  componentDidMount')
  }

  render() {
    return (
      <div>
        {this.props.name}
        <Child5 name="child5"></Child5>
        <Child6 name="child6"></Child6>
      </div>
    )
  }
}

export default Child3
