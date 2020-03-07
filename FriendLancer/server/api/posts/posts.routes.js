'use strict';
const express = require('express');
// Import the Controller so we may assign specific functions to a route
const controller = require('./posts.controller');

// Assign the route variable to an Express.Route handler
const router = express.Router();


/**
 * path: /api/posts
 * method: POST
 * function: createPost() in the posts.controller.js file
 */
router.post('/', controller.createPost);

/**
 * path: /api/posts/:id     ->   example: http://localhost:3000/api/posts/{postId}
 * method: GET
 * function: findPostById() in the posts.controller.js file
 */
router.get('/:id', controller.findPostById);

/**
 * path: /api/posts/:id     ->   example: http://localhost:3000/api/posts/{postId}
 * method: GET
 * function: findPostById() in the posts.controller.js file
 */
router.get('/forumId/:id', controller.listAllPostsByForumId);

/**
 * path: /api/posts/:id     ->   example: http://localhost:3000/api/posts/{forumId}
 * method: POST
 * function: editPost() in the posts.controller.js file
 */
router.post('/:id', controller.editPost);

// We export the routes to the express app, in the routes.js file we will assign the base URL for this endpoint.
// in this file we simply want to specify the path after the base /api/users url.
module.exports = router;
