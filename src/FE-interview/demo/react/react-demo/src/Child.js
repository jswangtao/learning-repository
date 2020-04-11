import React, { Component } from 'react'

function Child(props) {
  console.log(props);
  return (
    <>
      <button onClick={props.onClick}>改标题</button>
      <h1>{props.name}</h1>
    </>
  );
}

// function areEqual(prevprops, nextprops) {
//   console.log('🚀🚀🚀wimi======>>>', prevprops, nextprops)

//   if (prevprops === nextprops) {
//     return true
//   }
// }

// class Child extends Component {
//   // componentWillMount() {
//   //   console.log('🚀🚀🚀wimi======>>>child  componentWillMount')
//   // }

//   // componentDidMount() {
//   //   console.log('🚀🚀🚀wimi======>>>child  componentDidMount')
//   // }

//   componentWillReceiveProps(nextProps,a) {

//     console.log('🚀🚀🚀wimi======>>>nextProps',nextProps,a)

//   }

//   render() {
//     return <div>{this.props.name}111</div>
//   }
// }

export default React.memo(Child)
