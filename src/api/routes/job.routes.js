const express = require("express");
const {
  isUser,
  isAuth,
  isAdmin,
  isCompany,
} = require("../../middlewares/auth");
const {
  getJobs,
  getJob,
  postJob,
  putJob,
  deleteJob,
} = require("../controllers/job.controllers");

const jobsRoutes = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Job:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Job name 
 *         description:
 *           type: string
 *           description: Job description 
 *         time:
 *           type: string
 *           description: Job hours range 
 *         hourSalary:
 *           type: string
 *           description: Job hours range 
 *         img:
 *           type: string
 *           description: Job hours range
 *       required:
 *         - name
 *         - description
 *         - time
 *         - hourSalary
 *         - img
 *       example:
 *         name: Desarrollador Web Freelance
 *         description: Diseño y desarrollo de sitios web personalizados para clientes
 *         time: Flexible
 *         hourSalary: 30
 *         img: https://res.cloudinary.com/dxnzcewsy/image/upload/v1693775808/proyecto%20final/profesions/pngwing.com_8_t4ytjt.png
 */


/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [Job]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All Jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 *       500:
 *         description: Internal server error
 */
jobsRoutes.get("/", [isAuth], getJobs);

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Obtain information about a specific job by ID
 *     tags: [Job]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: job ID
 *     responses:
 *       200:
 *         description: Obtain information about a specific job by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Job'
 *       500:
 *         description: Internal server error
 */
jobsRoutes.get("/:id", [isAuth], getJob);


/**
 * @swagger
 * /jobs/:
 *   post:
 *     summary: Create a new job
 *     tags: [Job]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       200:
 *         description: Created job
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Job'
 *       500:
 *         description: Internal server error
 */
jobsRoutes.post("/", [isCompany], postJob);

/**
 * @swagger
 * /jobs/{id}:
 *   put:
 *     summary: Modify a specific job by ID
 *     tags: [Job]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Job'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Modified Job
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Job'
 *       404:
 *         description: job not found
 *       500:
 *         description: Internal server error
 */
jobsRoutes.put("/:id", [isCompany], putJob);

/**
 * @swagger
 * /jobs/{id}:
 *   delete:
 *     summary: Delete a specific job by ID
 *     tags: [Job]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Job deleted
 *       404:
 *         description: job not found
 *       500:
 *         description: Internal server error
 */
jobsRoutes.delete("/:id", [isAdmin], deleteJob);

module.exports = jobsRoutes;
