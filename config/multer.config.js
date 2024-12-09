const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-1eecf-firebase-adminsdk-rvyfy-79f6687679.json')

const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName: 'drive-1eecf.firebasestorage.app',
    unique: true,
})

const upload = multer({
    storage: storage
})

module.exports = upload;