import { Component } from 'react';
import PropTypes from 'prop-types';

export class SectionTitle extends Component {
  render() {
    return (
      <>
        <h2>{this.props.label}</h2>
        {this.props.children}
      </>
    );
  }
}
SectionTitle.propTypes = {
  label: PropTypes.string.isRequired,
};
