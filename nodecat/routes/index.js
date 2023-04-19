const express = require('express');
const {searchByHashtag, getMyPosts, renderMain, getAllPosts } = require('../controllers');

const router = express.Router();


router.get('/myposts', getMyPosts);

router.get('/', getAllPosts);

router.get('/search/:hashtag', searchByHashtag);

// router.get('/', renderMain);

module.exports=router;