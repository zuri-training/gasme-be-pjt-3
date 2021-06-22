/**
 * @swagger
 * /vendor/{id}:
 *  get:
 *      summary: Returns specific vendor object
 *      tags: [Vendors]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The vendor id
 *      responses:
 *          200:
 *              description: The vendor object
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Vendor'
 *          404:
 *              description: Vendor not found
 * 
 *  
 */