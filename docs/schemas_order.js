/**
 * @swagger
 * components:
 *  schemas:
 *      Order:
 *          type: object
 *          required:
 *              - orderId
 *              - volume
 *              - price
 *              - deliveryLocation
 *              - status
 *              - userId
 *          properties:
 *              id:
 *                  type: string
 *                  description: Auto-generated id of the object
 *              volume:
 *                  type: number
 *                  description: the order volume
 *              price:
 *                  type: number
 *                  description: the order price
 *              userId:
 *                  type: string
 *                  description: auto-generated id of the consumer
 *              vendorId:
 *                  type: string
 *                  description: auto-generated id of the vendor
 *              deliveryLocation:
 *                  type: object
 *                  properties:
 *                      printableAddress:
 *                          type: string
 *                          description: readable address of the consumer
 *                      longitude:
 *                          type: number
 *                          desciption: longitude of consumer's location
 *                      latitude:
 *                          type: number
 *                          description: latitude of consumer's location
 *              status:
 *                  type: string
 *                  description: current status of the order
 *              notes:
 *                  type: string
 *                  description: delivery instructions
 *          example:
 *              id: 60dd5ec6826e8b89c44419a3
 *              volume: 3
 *              price: 900
 *              userId: 60dd5ec6826e8b89c44419a3
 *              vendorId: 60dd5ec6826e8b89c44419a3
 *              deliveryLocation:
 *                  printableAddress: No 1. Somewhere, somewhere street, Anywhere.
 *                  longitude: 3.23234563
 *                  latitude: 3.33445676
 *              status: created
 *              notes: Leave at the front of my door
 *              
 */