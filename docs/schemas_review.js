/**
 * @swagger
 * components:
 *  schemas:
 *      Review:
 *          type: object
 *          required:
 *              - userId
 *              - vendorId
 *              - userName
 *              - vendorName
 *          properties:
 *              _id:
 *                  type: string
 *                  description: Auto-generated id of the review object
 *              vendorName:
 *                  type: string
 *                  description: the reviewed vendor name
 *              vendorId:
 *                  type: string
 *                  description: the id of the reviewed vendor
 *              userName:
 *                  type: string
 *                  description: the name of the user making the review
 *              userId:
 *                  type: string
 *                  description: the id of the user making the review
 *              body:
 *                  type: string
 *                  description: the body of the review
 *              rating:
 *                  type: number
 *                  description: the rating by the user
 *          example:
 *              _id: 60dd5ec6826e8b89c44419a3
 *              vendorName: Green Gas Ng
 *              vendorId: 60dd5ec6826e8b89c44419a3
 *              userName: John Doe
 *              userId: 60dd5ec6826e8b89c44419a3
 *              body: good service and fast delivery
 *              rating: 5
 *              
 */