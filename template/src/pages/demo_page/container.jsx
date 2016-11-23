'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { 
  fetchGlobalDemo
} from '../../actions';
import {
  fetchPageDemo
} from './actions';


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
        Hello, Imweb
      </main>
    );
  }

  componentDidMount() {
    const dispatch = this.props.dispatch;
    dispatch(fetch_student_basic_info());
    dispatch(fetch_follow_state());
  }
}


export default connect(state => state)(Container);
