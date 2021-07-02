/**
 * @swagger
 * /notification:
 *  get:
 *      summary: Returns an array of all Vendor notifications (for vendors) and Customer notifications(for customers) --- (Login required)
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