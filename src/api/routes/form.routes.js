const express = require("express");
const {
  getForms,
  getForm,
  postForm,
} = require("../controllers/form.controllers");

const formRouter = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Form:
 *       type: object
 *       properties:
 *         hours:
 *           type: string
 *           description: form hours range 
 *         day:
 *           type: date
 *           description: form date range
 *         email:
 *           type: string
 *           description: users contacts 
 *         note:
 *           type: string
 *           description: form notes
 *         confirmed:
 *           type: boolean
 *           description: check if user is confirmed
 *         closed:
 *           type: boolean
 *           description: check if form is closed
 *         direction:
 *           type: string
 *           description: place of work
 *       required:
 *         - hours
 *         - day
 *         - email
 *         - note
 *         - confirmed
 *         - closed
 *         - direction
 *       example:
 *          hours: 30h
 *          day: 30/04/2023
 *          email: adrianapiccolo00@gmail.com
 *          note: necesito de un abañil
 *          confirmed: true
 *          closed: false
 *          direction: calle de las flores 61 Madrid
 */

/**
 * @swagger
 * /form:
 *   get:
 *     summary: Get all forms
 *     tags: [Form]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All Forms
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Form'
 *       500:
 *         description: Internal server error
 */
formRouter.get("/", getForms);

/**
 * @swagger
 * /form/{id}:
 *   get:
 *     summary: Obtain information about a specific form by ID
 *     tags: [Form]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Form ID
 *     responses:
 *       200:
 *         description: Obtain information about a specific form by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Form'
 *       500:
 *         description: Internal server error
 */
formRouter.get("/:id", getForm);

/**
 * @swagger
 * /form/:
 *   post:
 *     summary: Create a new form
 *     tags: [Form]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Form'
 *     responses:
 *       200:
 *         description: Created form
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Form'
 *       500:
 *         description: Internal server error
 */
formRouter.post("/:id/:worker", postForm);

module.exports = formRouter;
