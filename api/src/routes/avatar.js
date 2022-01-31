
const multer  = require('multer');
const fs = require('fs-extra');

const storage = multer.diskStorage({ 
		destination: (req, file, cb) => {
      const path = `./uploads/${req.params.id}`;
      if (!fs.existsSync(path)) {
        fs.mkdir(path);
      }
			cb(null, `${path}`)
		},
		filename: (req, file, cb) => {
			cb(null, 'avatar.jpg')
		}
	})
  const fileFilter = (req, file, cb)=>{
    if (file.mimetype != 'image/jpeg' && file.mimetype != 'image/jpg') {
      console.log(`${file.originalname}`, '-> неправильный тип файла');
      
      return cb(null, false);
    }
    cb(null, true)
  };

module.exports = multer({storage, fileFilter});