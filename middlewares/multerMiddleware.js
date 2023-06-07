const multer = require ('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/avatars');
    },
    filename: (req, file, cb) => {
        let fileName = Date.now() + '-profileImg' + path.extname(file.originalname);
        cb(null, fileName);
    }
})

const uploadFile = multer ({storage});

module.exports = uploadFile;