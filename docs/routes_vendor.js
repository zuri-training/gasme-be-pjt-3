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

/**
 * @swagger
 * /vendor/get:
 *  post:
 *      summary: Return the list of vendors that matches search filters, if any. Send empty objec to fetch all
 *      tags: [Vendors]
 *      requestBody:
 *          required: false
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          vendorName:
 *                              type: string
 *                              example: Green gas ng
 *                              description: the name of the business
 *                          deliveryEnabled:
 *                              type: boolean
 *                              description: whether or not the business supports delivery
 *                          volumeRange:
 *                              type: array
 *                              example: [3, 45]
 *                              description: the volume range the user is looking for
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
 *      responses:
 *          200:
 *              description: An array of vendor objects that match the filter options
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Vendor'
 *          500:
 *              description: internal server error
 * 
 *                              
 */


/**
 * @swagger
 * /vendor/create:
 *  post:
 *      summary: Create a new business (vendor object) if user doesn't already have one (Login required)
 *      tags: [Vendors]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          vendorName:
 *                              type: string
 *                              example: Green gas ng
 *                              description: the name of the business
 *                          volumeRange:
 *                              type: array
 *                              example: [3, 45]
 *                              description: the volume range the user is looking for
 *                          phoneNumber:
 *                              type: number
 *                              example: 2349023456789
 *                              description: the business phone number
 *      responses:
 *          201:
 *              description: Returns the created vendor object
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Vendor'
 *          400:
 *              description: Invalid request
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
 *                                  example: Invalid request
 *                              data: 
 *                                  type: object
 *                                  properties:
 *                                      errors: 
 *                                          type: array
 *                                          items:
 *                                              type: object
 *          500:
 *              description: internal server error
 * 
 *                              
 */


/**
 * @swagger
 * /vendor/update:
 *  put:
 *      summary: Update an existing vendor object with any of the following fields (Login required)
 *      tags: [Vendors]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          vendorName:
 *                              type: string
 *                              example: Green gas ng
 *                              description: the name of the business
 *                          volumeRange:
 *                              type: array
 *                              example: [3, 45]
 *                              description: the volume range the user is looking for
 *                          phoneNumber:
 *                              type: number
 *                              example: 2349023456789
 *                              description: the business phone number
 *                          deliveryEnabled:
 *                              type: boolean
 *                          email: 
 *                              type: string
 *                              example: "mygasstation@email.com"
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
 *              description: Returns the updated vendor object
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Vendor'
 *          404:
 *              description: Logged in user has no vendor object
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
 *                                  example: "not found"
 *          500:
 *              description: internal server error
 * 
 *                              
 */
