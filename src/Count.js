import React from 'react';
import { connect } from 'react-redux';

const Count = (props) => {
  return (
    <div>
      <h3>Age:{props.age}</h3>
      <button onClick={props.addAgeButton}>Add Age</button>
      <button onClick={props.subAgeButton}>Sub Age</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};
const mapDispachToProps = (dispach) => {
  return {
    addAgeButton: () => dispach({ type: 'ADD' }),
    subAgeButton: () => dispach({ type: 'SUB' }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Count);
