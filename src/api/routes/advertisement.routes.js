const express = require("express");
const {
  isUser,
  isAuth,
  isAdmin,
  isCompany,
} = require("../../middlewares/auth");
const {
  getAdvertisements,
  getAdvertisement,
  postAdvertisement,
  putAdvertisement,
  deleteAdvertisement,
} = require("../controllers/advertisement.controllers");

const advRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     advertisement:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: advertisement title
 *         description:
 *           type: string
 *           description: description of the advertisement
 *         salary:
 *           type: string
 *           description: salary of the advertisement
 *         extra:
 *           type: string
 *           description: advertisement extras
 *         localization:
 *           type: string
 *           description: advertisement localization
 *         skills:
 *            type: string
 *            description: advertisement skills required
 *         img:
 *            type: string
 *            description: Number of employes
 *         map:
 *            type: object
 *            items:
 *              type: string
 *            uniqueItems: true
 *            description: string location on map
 *         users:
 *            type: array
 *            items:
 *              type: string
 *            uniqueItems: true
 *            description: advertisement user
 *         jobs:
 *           type: array
 *           items:
 *             type: string
 *           uniqueItems: true
 *           description: advertisement job
 *       required:
 *         - title
 *         - description
 *         - salary
 *         - extra
 *         - localization
 *         - skills
 *         - users
 *         - jobs
 *         - img
 *         - map
 *       example:
 *         title: Desarrollador Full Stack
 *         company: TechCo
 *         description: Buscamos un desarrollador Full Stack para trabajar en proyectos emocionantes
 *         salary: Negociable
 *         extra: Beneficios adicionales incluidos
 *         localization: Ciudad A
 *         skills: JavaScript, React, Node.js, MongoDB
 *         map: 64f332890873d39086ca8172
 */


/**
 * @swagger
 * /advertisement:
 *   get:
 *     summary: Get all advertisements
 *     tags: [Advertisement]
 *     responses:
 *       200:
 *         description: All advertisements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Advertisement'
 *       500:
 *         description: Internal server error
 */
advRoutes.get("/", getAdvertisements);

/**
 * @swagger
 * /advertisement/{id}:
 *   get:
 *     summary: Obtain information about a specific advertisement by ID
 *     tags: [Advertisement]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Advertisement ID
 *     responses:
 *       200:
 *         description: Obtain information about a specific Advertisement by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Advertisement'
 *       500:
 *         description: Internal server error
 */
advRoutes.get("/:id", getAdvertisement);

/**
 * @swagger
 * /advertisement:
 *   post:
 *     summary: Create a new advertisement
 *     tags: [Advertisement]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Advertisement'
 *     responses:
 *       200:
 *         description: Created Advertisement
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Advertisement'
 *       500:
 *         description: Internal server error
 */
advRoutes.post("/", [isAuth], postAdvertisement);

/**
 * @swagger
 * /advertisement/{id}:
 *   put:
 *     summary: Modify a specific Advertisement by ID
 *     tags: [Advertisement]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Advertisement'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Advertisement ID
 *     responses:
 *       200:
 *         description: Modified Advertisement
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Advertisement'
 *       404:
 *         description: Advertisement not found
 *       500:
 *         description: Internal server error
 */
advRoutes.put("/:id", [isAuth], putAdvertisement);

/**
 * @swagger
 * /advertisement/{id}:
 *   delete:
 *     summary: Delete a specific Advertisement by ID
 *     tags: [Advertisement]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Advertisement ID
 *     responses:
 *       200:
 *         description: Advertisement deleted
 *       404:
 *         description: Advertisement not found
 *       500:
 *         description: Internal server error
 */
advRoutes.delete("/:id", [isAuth], deleteAdvertisement);

module.exports = advRoutes;
