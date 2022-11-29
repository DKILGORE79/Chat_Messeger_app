const router = require('express').Router();
const { useParams } = require('react-router-dom');
const {
    createUser,
    login,
    findUser,
} = require('../../controllers/user-controller');



//const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser)

router.route('/login').post(login);

router.route('/find').get(findUser);

module.exports = router;