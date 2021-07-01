
/**
 * @swagger
 * /order/get/consumer:
 *  get:
 *      summary: Returns an array of all orders made by a consumer (Login required)
 *      tags: [Orders]
 *      responses:
 *          200:
 *              description: An array of orders
 *              content:
 *                  array:
 *                      items:
 *                          $ref: '#/components/schemas/Order'
 * 
 *  
 */

/**
 * @swagger
 * /order/get/order:
 *  get:
 *      summary: Returns an array of all orders received by a order (Login required)
 *      tags: [Orders]
 *      responses:
 *          200:
 *              description: An array of orders
 *              content:
 *                  array:
 *                      items:
 *                          $ref: '#/components/schemas/Order'
 * 
 *  
 */

/**
 * @swagger
 * /order/create:
 *  post:
 *      summary: Create an order (Login required)
 *      tags: [Orders]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          vendorId:
 *                              type: string
 *                              example: 60dd5ec6826e8b89c44419a3
 *                              description: the ID of the vendor receiving the order
 *                          volume:
 *                              type: number
 *                              example: 3
 *                              description: the volume range the user is looking for
 *                          deliveryLocation:
 *                              type: object
 *                              description: the location object of the consumer
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
 *                          notes:
 *                              type: string
 *                              description: special delivery instructions (optional)
 *                              example: leave on my door step and knock three times
 *      responses:
 *          201:
 *              description: Returns the created order object
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Order'
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
 * /order/accept:
 *  patch:
 *      summary: vendors accept an order (Login required)
 *      tags: [Orders]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          orderId:
 *                              type: string
 *                              example: 60dd5ec6826e8b89c44419a3
 *                              description: the order ID
 * 
 *      responses:
 *          200:
 *              description: Returns the order object with an accepted status
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Order'
 *          400:
 *              description: Bad request
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
 *                                  example: "order has been rejected and can no longer be accepted"
 *          500:
 *              description: internal server error
 * 
 *                              
 */


/**
 * @swagger
 * /order/reject:
 *  patch:
 *      summary: vendors reject an order (Login required)
 *      tags: [Orders]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          orderId:
 *                              type: string
 *                              example: 60dd5ec6826e8b89c44419a3
 *                              description: the order ID
 * 
 *      responses:
 *          200:
 *              description: Returns the order object with a rejected status
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Order'
 *          400:
 *              description: Bad request
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
 *                                  example: "order has been accepted and can no longer be rejected"
 *          500:
 *              description: internal server error
 * 
 *                              
 */

/**
 * @swagger
 * /order/cancel:
 *  patch:
 *      summary: vendors or user cancels an order (Login required)
 *      tags: [Orders]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          orderId:
 *                              type: string
 *                              example: 60dd5ec6826e8b89c44419a3
 *                              description: the order ID
 * 
 *      responses:
 *          200:
 *              description: Returns the order object with a canceled status
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Order'
 *          400:
 *              description: Bad request
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
 *                                  example: "order has been completed and can no longer be canceled"
 *          500:
 *              description: internal server error
 * 
 *                              
 */

/**
 * @swagger
 * /order/complete:
 *  patch:
 *      summary: vendors complete an order (Login required)
 *      tags: [Orders]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          orderId:
 *                              type: string
 *                              example: 60dd5ec6826e8b89c44419a3
 *                              description: the order ID
 * 
 *      responses:
 *          200:
 *              description: Returns the order object with a completed status
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Order'
 *          400:
 *              description: Bad request
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
 *                                  example: "order has been canceled and can no longer be completed"
 *          500:
 *              description: internal server error
 * 
 *                              
 */