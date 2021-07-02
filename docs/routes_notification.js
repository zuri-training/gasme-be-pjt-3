/**
 * @swagger
 * /notification:
 *  get:
 *      summary: Returns an array of all Vendor notifications (for vendors) and Customer notifications(for customers) --- [Login required]. Notifications are created by default after every '/order/*' POST or PATCH request
 *      tags: [Notifications]
 *      responses:
 *          200:
 *              description: An array of notifications
 *              content:
 *                  array:
 *                      items:
 *                          $ref: '#/components/schemas/Notification'
 * 
 *  
 */