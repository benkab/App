var express     = require('express');
var router      = express.Router();
var User        = require('../models/user');
var Post        = require('../models/post');
var bcrypt      = require('bcryptjs');
var jwt         = require('jsonwebtoken');

// New post
router.post('/', function (req, res, next) {

    var content     = req.body.content;
    var image       = req.body.image;
    var created_at  = Date();

    var decoded     = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user){

        if(err){
            return res.status(500).json({
                title : 'An error has occured',
                error : err
            });
        }

        var post = new Post({
            content         : content,
            image           : image,
            created_at      : created_at,
            user            : user
        });

        post.save(function (err, result) {

            if(err){
                return res.status(500).json({
                    title : 'An error has occured while adding the post',
                    error : err
                });
            }
            user.posts.push(result);
            user.save();
            res.status(201).json({
                message : 'Your post has been created!',
                obj     : result
            });
        });


    });



});


// Retrieve posts
router.get('/', function (req, res, next) {

    Post.find()
        .populate('user')
        .exec(function (err, posts){
            if(err){
                return res.status(500).json({
                    title : 'An error has occured',
                    error : err
                });
            }
            res.status(200).json({
                message : 'Success',
                obj     : posts
            });
        });


});

module.exports = router;
