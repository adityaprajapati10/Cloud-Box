const Firebase = require('firebase-admin');
const serviceAccount = require('../drive-1eecf-firebase-adminsdk-rvyfy-79f6687679.json')

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-1eecf.firebasestorage.app'
    
})

module.exports = Firebase;