/**
 * @swagger
 * components:
 *  schemas:
 *      Notification:
 *          type: object
 *          required:
 *              - senderId
 *              - receiver
 *              - oderId
 *              - title
 *              - message
 *              
 *          properties:
 *              id:
 *                  type: string
 *                  description: Auto-generated id of the object
 *              senderId:
 *                  type: string
 *                  description: auto-generated id of the notification sender (vendor or consumer) 
 *              receiver:
 *                  type: string
 *                  description: auto-generated id of the notification receiver (vendor or consumer)
 *              orderId:
 *                  type: string
 *                  description: auto-generated id of the order
 *              title:
 *                  type: string
 *                  description: title of the notification
 *              message:
 *                  type: string
 *                  description: body of the notification
 *              seen:
 *                  type: string
 *                  description: "(a) For vendor: if vendor has either accepted or rejected or completed or canceled order (b) For consumer: if they've mark notification as read"
 *                  default: false
 *            
 *          example:
 *              "id": "60de9eb00407e94310a134de"
 *              "senderId": "60de9e0a0407e94310a134dc"
 *              "receiverId": "60de1e730ce019461c371812"
 *              "orderId": "60de9eb00407e94310a134dd"
 *              "title": "New Order"
 *              "message": "You've got a new order from 'John Doe' who needs 100 kg of liquid gas."
 *              "seen": true
 *
 *              
 */