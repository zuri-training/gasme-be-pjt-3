const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

  
router
    .route('/:id')
    .get(userController.getUser)
    .patch(
        userController.uploadUserPhoto,
        userController.resizeUserPhoto,
        userController.updateUser
    )
    .delete(userController.deleteUser)


module.exports = router

// Swagger documentation
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *              - email
 *              - password
 *              - fullName
 *          properties:
 *              _id:
 *                  type: string
 *                  description: Auto-generated id of the user
 *              email:
 *                  type: string
 *                  description: the user's email
 *              password:
 *                  type: string
 *                  description: the user's password, at least 6 characters long
 *              fullName:
 *                  type: string
 *                  description: the user's full name
 *              imageUrl:
 *                  type: string
 *                  description: url to user's profile photo
 *              phoneNumber:
 *                  type: int
 *                  description: the user's phone number
 *              vendorId:
 *                  type: string
 *                  description: auto-generated id of the user's store, if they have a store
 *              active:
 *                  type: boolean
 *                  description: whether the user's account is active (not deleted) or not
 *              location:
 *                  type: object
 *                  properties:
 *                      printableAddress:
 *                          type: string
 *                          description: readable address of the user
 *                      longitude:
 *                          type: number
 *                          desciption: longitude of user's location
 *                      latitude:
 *                          type: number
 *                          description: latitude of user's location
 *          example:
 *              id: d5dl_dktje
 *              email: johndoe@email.com
 *              password: alsdfialef9akd93a9e-fadef-afaerwe
 *              fullName: John Doe
 *              imageUrl: drive.google.com/images/john-doe.jpg
 *              phoneNumber: 2349012345678
 *              vendorId: null
 *              active: true
 *              location:
 *                  printableAddress: John's apartment, third street, ibadan.
 *                  longitude: 3.23234563
 *                  latitude: 3.33445676
 *      Vendor:
 *          type: object
 *          required:
 *              - vendorName
 *              - phoneNumber
 *              - userId
 *          properties:
 *              id:
 *                  type: string
 *                  description: Auto-generated id of the vendor
 *              email:
 *                  type: string
 *                  description: the vendor's email
 *              vendorName:
 *                  type: string
 *                  description: the vendor name
 *              imageUrl:
 *                  type: string
 *                  description: url to vendor's profile photo
 *              phoneNumber:
 *                  type: int
 *                  description: the vendors's phone number
 *              userId:
 *                  type: string
 *                  description: auto-generated id of the store owner
 *              active:
 *                  type: boolean
 *                  description: whether the vendor is active (not deleted) or not
 *              location:
 *                  type: object
 *                  properties:
 *                      printableAddress:
 *                          type: string
 *                          description: readable address of the vendor
 *                      longitude:
 *                          type: number
 *                          desciption: longitude of vendor's location
 *                      latitude:
 *                          type: number
 *                          description: latitude of vendor's location
 *          example:
 *              id: d5dl_dktje
 *              email: greengas@email.com
 *              password: alsdfialef9akd93a9e-fadef-afaerwe
 *              vendorName: Green Gas & Sons
 *              imageUrl: drive.google.com/images/green-gas.jpg
 *              phoneNumber: 2349012345678
 *              userId: dkd4_lsdk4_jsdkf
 *              active: true
 *              location:
 *                  printableAddress: No 1. Somewhere, somewhere street, Anywhere.
 *                  longitude: 3.23234563
 *                  latitude: 3.33445676
 *              
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Basic CRUD for users
 */

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