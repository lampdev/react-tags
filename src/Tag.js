import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RemoveComponent from './RemoveComponent';


class Tag extends Component {
  render() {
    const { props } = this;
    const label = props.tag[props.labelField];
    const {
      isDragging,
      readOnly,
    } = props;

    const tagComponent = (
      <span
        style={{ opacity: isDragging ? 0 : 1 }}
        className={props.classNames.tag}
        onClick={props.onTagClicked}
        onKeyDown={props.onTagClicked}>
        {label}
        <RemoveComponent
          tag={props.tag}
          className={props.classNames.remove}
          removeComponent={props.removeComponent}
          onClick={props.onDelete}
          readOnly={readOnly}
        />
      </span>
    );
    return tagComponent;
  }
}

Tag.propTypes = {
  labelField: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  tag: PropTypes.object.isRequired,
  moveTag: PropTypes.func,
  removeComponent: PropTypes.func,
  onTagClicked: PropTypes.func,
  classNames: PropTypes.object,
  readOnly: PropTypes.bool
};

Tag.defaultProps = {
  labelField: 'text',
  readOnly: false,
};

export default Tag;
