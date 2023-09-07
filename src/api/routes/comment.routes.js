const express = require("express");
const {
  isUser,
  isAuth,
  isAdmin,
  isCompany,
} = require("../../middlewares/auth");
const {
  getComments,
  getComment,
  putComment,
  postComment,
  deleteComment,
} = require("../controllers/comment.controllers");

const commentRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Comments:
 *       type: object
 *       properties:
 *         text:
 *           type: string
 *           description: text of comment
 *         score:
 *            type: number
 *            description: rate
 *         jobs:
 *            type: array
 *            items:
 *              type: string
 *            uniqueItems: true
 *            description: job about comment
 *         company:
 *            type: array
 *            items:
 *              type: string
 *            uniqueItems: true
 *            description: company
 *         user:
 *           type: array
 *           items:
 *             type: string
 *           uniqueItems: true
 *           description: user
 *       required:
 *         - text
 *         - user
 *         - company
 *         - score
 *         - jobs
 *         - img
 *       example:
 *         text: ¡Excelente trabajo! Realmente impresionado con los resultados
 *         user: 64f1f76422539ea74d29fa28
 *         company: []
 *         score: 5
 *         jobs: []
 *         img: url_de_la_imagen1
 */

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Get all comments
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: All comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comments'
 *       500:
 *         description: Internal server error
 */
commentRouter.get("/", [isAuth], getComments);

/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     summary: Obtain information about a specific comments by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Comments ID
 *     responses:
 *       200:
 *         description: Obtain information about a specific Comments by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Comments'
 *       500:
 *         description: Internal server error
 */
commentRouter.get("/:id", [isAuth], getComment);

/**
 * @swagger
 * /comments/:
 *   post:
 *     summary: Create a new job
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Comments'
 *     responses:
 *       200:
 *         description: Created Comments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Comments'
 *       500:
 *         description: Internal server error
 */
commentRouter.post("/", [isAuth], postComment);

/**
 * @swagger
 * /comments/{id}:
 *   put:
 *     summary: Modify a specific comments by ID
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Comments'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Comments ID
 *     responses:
 *       200:
 *         description: Modified Comments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Comments'
 *       404:
 *         description: Comments not found
 *       500:
 *         description: Internal server error
 */
commentRouter.put("/:id", [isAuth], putComment);

/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Delete a specific Comments by ID
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Comments ID
 *     responses:
 *       200:
 *         description: Comments deleted
 *       404:
 *         description: Comments not found
 *       500:
 *         description: Internal server error
 */
commentRouter.delete("/:id", [isAdmin], deleteComment);

module.exports = commentRouter;
