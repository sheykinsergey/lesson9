const router = require('express').Router();
const multer  = require('multer');

// const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({ // сохраняем файл с его оригинальным именем
  destination: (req, file, cb) => {
    console.log(req.body.id);
    cb(null, `./uploads/`)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage, fileFilter: function (req, file, cb){
  // console.log(file);
  // console.log(req.params.id);
  //проверка на тип файла
  // if (file.mimetype != 'image/png' && file.mimetype != 'image/png') {
  //   console.log(`${file.originalname}`, '-> неправильный тип файла');
    
  //   return cb(null, false);
  // }
  if(file.mimetype === "image/png" || 
    file.mimetype === "image/jpg"|| 
    file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
  
  //проверка есть ли файл
  // fs.access('uploads/' + file.originalname, constants.F_OK, (err) => {
  //   console.log(`${file.originalname} ${err ? chalk.blue('такого файла нет, загружаем') : chalk.red('такой файл есть, отклоняем')}`);
  //   if(err){
  //     _period = '';
  //     cb(null, true);
  //   }
  //   cb(null, false)
  // })
}});

router.post('/', upload.single('avatar'), function (req, res, next) {
  // console.log(req.file.originalname);
  // console.log(req.body);
  // console.log(req.params.id);
  
  res.send(':)')
})

module.exports = router;