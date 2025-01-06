import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: '이건 기본 text props입니다.',
  };

  render() {
    const { text } = this.props;

    return (
      <>
        <div>{text}</div>
      </>
    );
  }
}

ClassComponent.propTypes = {
  text: PropTypes.string,
};

export default ClassComponent;
