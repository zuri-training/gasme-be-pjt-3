
/**
 * @swagger
 * /user/{id}:
 *  get:
 *      summary: Returns specific user object
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The user id
 *      responses:
 *          200:
 *              description: The user object
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: User not found
 * 
 *  
 */

/**
 * @swagger
 * /user/update:
 *  patch:
 *      summary: Update an existing user object with any of the following fields (Login required)
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          fullName:
 *                              type: string
 *                              example: Jermaine Cole
 *                              description: the name of the business
 *                          phoneNumber:
 *                              type: number
 *                              example: 2349023456789
 *                              description: the user's phone number
 *                          location:
 *                              type: object
 *                              description: a location object
 *                              properties:
 *                                  printableAddress:
 *                                      type: string
 *                                      example: sango UI
 *                                      description: address from google
 *                                  longitude:
 *                                      type: number
 *                                      example: 3.3432345
 *                                  latitude:
 *                                      type: number
 *                                      example: 3.4343233
 * 
 *      responses:
 *          200:
 *              description: Returns the updated user object
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: User not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: boolean
 *                                  example: true
 *                              message:
 *                                  type: string
 *                                  example: "User not found"
 *          500:
 *              description: internal server error
 * 
 * 
 * 
 * 
 * 
 * /user/update/photo:
 *  put:
 *      summary: Update an existing user's profile photo (Login required)
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          photo:
 *                              type: string
 *                              format: binary
 *
 *                                 
 * 
 * 
 *      responses:
 *          200:
 *              description: Returns the user object with the link to the new profile photo
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: User not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              error:
 *                                  type: boolean
 *                                  example: true
 *                              message:
 *                                  type: string
 *                                  example: "User not found"
 *          500:
 *              description: internal server error                          
 */
