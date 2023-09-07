const express = require("express");
const {
  isUser,
  isAuth,
  isAdmin,
  isCompany,
} = require("../../middlewares/auth");
const {
  getMaps,
  getMap,
  postMap,
  putMap,
  deleteMap,
} = require("../controllers/map.controllers");

const mapRoutes = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Map:
 *       type: object
 *       properties:
 *         x:
 *           type: number
 *           description: Map longitude 
 *         y:
 *           type: number
 *           description: Map latitude 
 *       required:
 *         - x
 *         - y
 *       example:
 *          x: 42.8782
 *          y: -8.5449
 */


/**
 * @swagger
 * /map:
 *   get:
 *     summary: Get all Maps
 *     tags: [Map]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All Maps
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Map'
 *       500:
 *         description: Internal server error
 */
mapRoutes.get("/", [isAuth], getMaps);

/**
 * @swagger
 * /map/{id}:
 *   get:
 *     summary: Obtain information about a specific map by ID
 *     tags: [Map]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: map ID
 *     responses:
 *       200:
 *         description: Obtain information about a specific map by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Map'
 *       500:
 *         description: Internal server error
 */
mapRoutes.get("/:id", [isAuth], getMap);

/**
 * @swagger
 * /map/:
 *   post:
 *     summary: Create a new map
 *     tags: [Map]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Map'
 *     responses:
 *       201:
 *         description: Created map
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Map'
 *       500:
 *         description: Internal server error
 */
mapRoutes.post("/", [isCompany], postMap);
/**
 * @swagger
 * /map/{id}:
 *   put:
 *     summary: Modify a specific map by ID
 *     tags: [Map]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Map'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Map ID
 *     responses:
 *       200:
 *         description: Modified Map
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Map'
 *       404:
 *         description: location not found
 *       500:
 *         description: Internal server error
 */
mapRoutes.put("/:id", [isCompany], putMap);

/**
 * @swagger
 * /map/{id}:
 *   delete:
 *     summary: Delete a specific map by ID
 *     tags: [Map]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Map ID
 *     responses:
 *       200:
 *         description: Map deleted
 *       404:
 *         description: location not found
 *       500:
 *         description: Internal server error
 */
mapRoutes.delete("/:id", [isCompany], deleteMap);

module.exports = mapRoutes;
