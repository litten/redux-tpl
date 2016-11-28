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
    dispatch(fetchGlobalDemo());
    dispatch(fetchPageDemo());
  }
}


export default connect(state => state)(Container);
