/**
 * @swagger
 * /auth/signup:
 *  post:
 *      summary: Signup user
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              description: The user was signed up successfully
 *              content:
 *                  application/json:
 *                      $ref: '#/components/schemas/User'
 *          400:
 *              description: You've sent a bad request, check your fields
 *          500:
 *              description: Internal server error
 *      
 * 
 */

/**
 * @swagger
 * /auth/login:
 *  post:
 *      summary: Signup user
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              description: The user was logged in successfully
 *              content:
 *                  application/json:
 *                      $ref: '#/components/schemas/User'
 *          400:
 *              description: You've sent a bad request, check your fields
 *          401:
 *              description: Incorrect credentials
 *          500:
 *              description: Internal server error
 */