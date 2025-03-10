import React, { useState } from 'react';
import { connect } from 'react-redux';
const App = (props) => {
  const { count } = props;
return (
  
<div>

  计数:{count}
</div>
)
}
// 将redux 的state 映射到组件的props上
const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}
export default connect(
  mapStateToProps,
)(App)//高阶组件