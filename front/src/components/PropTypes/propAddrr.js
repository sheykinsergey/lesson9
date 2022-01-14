import PropTypes from 'prop-types' 

export const Addrr = PropTypes.shape({
  line1: PropTypes.string,
  line2: PropTypes.string,
  city: PropTypes.string,
  zip: PropTypes.number
}).isRequired