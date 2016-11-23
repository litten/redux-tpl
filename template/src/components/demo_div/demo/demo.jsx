import React from 'react';
import ReactDom from 'react-dom';
import DemoDiv from '../index';

class Demo extends React.Component {
  render() {
    return (
      <main>
        <DemoDiv />
        <DemoDiv />
        <DemoDiv />
      </main>
    );
  }
}
ReactDom.render(<Demo/>, window.document.getElementById('demo'));
