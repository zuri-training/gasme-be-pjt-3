
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