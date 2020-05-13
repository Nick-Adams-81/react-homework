import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import employees from "./employee.json"
import './App.css';

class App extends Component {
  state = {
    employees
  };
  

removeEmployee = id => {
  const employees = this.state.employees.filter(employee => employee.id !== id);
  this.setState({ employees })
}

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
          removeEmployee={this.removeEmployee}
          id={employee.id}
          key={employee.id}
          name={employee.name}
          position={employee.position}
          salary={employee.salary}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App
