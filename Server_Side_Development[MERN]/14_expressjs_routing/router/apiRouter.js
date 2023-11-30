const express = require('express');
const router = express.Router();
const path = require('path');

/*Home Page */
router.get('/', (requst, response) => {
        response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
    })
    /*About Us*/
router.get('/about', (requst, response) => {
        response.sendFile(path.join(__dirname, '..', 'views', 'about.html'));
    })
    /*Services page */
router.get('/service', (requst, response) => {
        response.sendFile(path.join(__dirname, '..', 'views', 'service.html'));
    })
    /*Contact Page */
router.get('/contact', (requst, response) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
})
module.exports = router;