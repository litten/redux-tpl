// @require './index.scss'
import React from 'react';
import { Button } from 'imui';

/**
 * 按钮组单选
 */
class DemoDiv extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      say: 'yo'
    };
  }

  render() {
    const {globalDemo} = this.props;
    const {say} = this.state;
    return (
      <div>
        <Button size='s'>
          {say}
        </Button>
      </div>
    );
  }
}

export default DemoDiv;
