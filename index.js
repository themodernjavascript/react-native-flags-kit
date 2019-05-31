import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import * as flags from './src';

const Flag = ({ code, size, style, type }) => {
  const flagSize = flags.utils.findBestSize(size);
  const flagsBucket = flags[type][`icons${flagSize}`];
  const flag = flagsBucket[code];
  const unknownFlag = flagsBucket['unknown'];

  return (
    <Image
      source={flag || unknownFlag}
      style={[{ width: flagSize, height: flagSize }, style]}
    />
  );
};

Flag.propTypes = {
  code: PropTypes.string.isRequired,
  size: PropTypes.oneOf([16, 24, 32, 48, 64]),
  style: Image.propTypes.style,
  type: PropTypes.oneOf(["flat", "shiny"]),
};

Flag.defaultProps = {
  size: 64,
  style: null,
  type: "shiny",
};

export default Flag;
