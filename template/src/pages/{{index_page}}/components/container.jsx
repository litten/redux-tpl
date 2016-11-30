/**
 * @name page:{{name}} - components - container
 * @description {{description}}
 * @author {{author}}
 * @date {{date}}
 */

'use strict';
import React from 'react';
import { connect } from 'react-redux';
// 页面actions
import { 
  fetchGlobalDemo
} from '../../../actions';
// 全局actions
import {
  fetchPageDemo
} from '../actions';


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { globalDemo, pageDemo } = this.props;
    return (
      <main>
        Hello, {{name}}
      </main>
    );
  }

  componentDidMount() {
    const dispatch = this.props.dispatch;
    dispatch(fetchGlobalDemo());
    dispatch(fetchPageDemo());
  }
}


export default connect(state => state)(Container);
