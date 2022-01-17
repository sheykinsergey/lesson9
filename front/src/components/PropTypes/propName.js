import PropTypes from 'prop-types' 
import { File } from "./propFile"
import { Addrr } from './propAddrr'


export const Name = PropTypes.shape({
  name: PropTypes.string,
  age: PropTypes.number,
  avatar: PropTypes.shape({ file: File }),
  files: PropTypes.arrayOf(File),
  addrr: PropTypes.shape({main: Addrr, alt: Addrr}),
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
      avatar: PropTypes.shape({ file: File }),
      files: PropTypes.arrayOf(File),
      addrr: PropTypes.shape({main: Addrr, alt: Addrr})
    })
  )
}).isRequired

