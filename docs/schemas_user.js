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
 *              
 */