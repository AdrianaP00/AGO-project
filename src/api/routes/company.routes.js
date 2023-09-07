const express = require("express");
const {
  isUser,
  isAuth,
  isAdmin,
  isCompany,
} = require("../../middlewares/auth");
const {
  getCompanys,
  getCompany,
  postCompany,
  putCompany,
  deleteCompany,
} = require("../controllers/company.controllers");

const companyRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Users name
 *         business_name:
 *           type: string
 *           description: Name as a company
 *         vat:
 *           type: string
 *           description: Number of vat 
 *         direcction:
 *           type: string
 *           description: Description of company
 *         country:
 *           type: string
 *           description: Location of company
 *         logo:
 *            type: string
 *            description: Logo
 *         numberEmployes:
 *            type: number
 *            description: Number of employes
 *         specialization:
 *            type: array
 *            items:
 *              type: string
 *            uniqueItems: true
 *            description: Users jobs
 *         id_user:
 *            type: array
 *            items:
 *              type: string
 *            uniqueItems: true
 *            description: id of user
 *         id_advertisement:
 *           type: array
 *           items:
 *             type: string
 *           uniqueItems: true
 *           description: id of worker
 *       required:
 *         - name
 *         - business_name
 *         - vat
 *         - direcction
 *         - country
 *         - logo
 *         - numberEmployes
 *         - specialization
 *         - id_user
 *         - id_advertisement
 *       example:
 *         name: UpgradeHub
 *         business_name: UpgradeHub SRL
 *         vat: yu23fgyu123f4345
 *         direcction:  calle oso 13 Madrid 
 *         country: Spain
 *         logo: img_1
 *         numberEmployes: 50-200
 *         specialization: []
 *         id_user: tdrfghsrthur6hu56
 *         id_advertisement: []
 */

/**
 * @swagger
 * /company:
 *   get:
 *     summary: Get all company
 *     tags: [Company]
 *     responses:
 *       200:
 *         description: All Company
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Company'
 *       500:
 *         description: Internal server error
 */
companyRoutes.get("/", getCompanys);
/**
 * @swagger
 * /company/{id}:
 *   get:
 *     summary: Obtain information about a specific company by ID
 *     tags: [Company]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Company ID
 *     responses:
 *       200:
 *         description: Obtain information about a specific Company by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Company'
 *       500:
 *         description: Internal server error
 */
companyRoutes.get("/:id", [isAuth], getCompany);

/**
 * @swagger
 * /company/:
 *   post:
 *     summary: Create a new job
 *     tags: [Company]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Company'
 *     responses:
 *       200:
 *         description: Created Company
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Company'
 *       500:
 *         description: Internal server error
 */
companyRoutes.post("/", [isCompany], postCompany);

/**
 * @swagger
 * /company/{id}:
 *   put:
 *     summary: Modify a specific Company by ID
 *     tags: [Company]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Company'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Company ID
 *     responses:
 *       200:
 *         description: Modified Company
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Company'
 *       404:
 *         description: Company not found
 *       500:
 *         description: Internal server error
 */
companyRoutes.put("/:id", [isCompany], putCompany);

/**
 * @swagger
 * /company/{id}:
 *   delete:
 *     summary: Delete a specific Company by ID
 *     tags: [Company]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Company ID
 *     responses:
 *       200:
 *         description: Company deleted
 *       404:
 *         description: Company not found
 *       500:
 *         description: Internal server error
 */
companyRoutes.delete("/:id", [isCompany], deleteCompany);

module.exports = companyRoutes;
