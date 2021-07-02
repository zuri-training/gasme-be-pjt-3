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
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: "johndoe@email.com"
 *                              description: the user's email
 *                          password:
 *                              type: string
 *                              example: "a very SeCuRe PaSsWoRd"
 *                              description: the user's password
 *                          fullName:
 *                              type: string
 *                              example: "John Doe"
 *                              description: the user's full name
 *                          phoneNumber:
 *                              type: number
 *                              example: 2349023456789
 *                              description: the user's phone number
 *                          
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
 *      summary: Login user
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: "johndoe@email.com"
 *                              description: the user's email
 *                          password:
 *                              type: string
 *                              example: "a very SeCuRe PaSsWoRd"
 *                              description: the user's password
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

/**
 * @swagger
 * /auth/logout:
 *  post:
 *      summary: Logout user
 *      tags: [Auth]
 * 
 *      responses:
 *          200:
 *              description: The user was logged out successfully
 *              content:
 *                  application/json:
 *                      $ref: '#/components/schemas/User'
 *          401:
 *              description: No user currently logged in
 *          500:
 *              description: Internal server error
 */