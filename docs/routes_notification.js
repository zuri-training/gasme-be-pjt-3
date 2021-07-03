/**
 * @swagger
 * /notifications/vendor:
 *  get:
 *      summary: Returns an array of all Vendor notifications (Login required)
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

/**
 * @swagger
 * /notifications/consumer:
 *  get:
 *      summary: Returns an array of all Consumer notifications (Login required)
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