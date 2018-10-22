import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text } from 'react-native';
import * as flags from './src';

const Flag = props => {
  const flag = flags[props.type][`icons${props.size}`][props.code];
  const unknownFlag = flags[props.type][`icons${props.size}`]['unknown'];

  return (
    <Image
      source={flag || unknownFlag}
      style={[{ width: props.size, height: props.size }, props.style]}
    />
  );
};

Flag.propTypes = {
  size: PropTypes.number,
  type: PropTypes.string,
};

Flag.defaultProps = {
  size: 64,
  type: "shiny",
};

export default Flag;
