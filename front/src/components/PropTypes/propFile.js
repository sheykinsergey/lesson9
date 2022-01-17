import PropTypes from 'prop-types' 

export const File = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  path: PropTypes.string,
}).isRequired