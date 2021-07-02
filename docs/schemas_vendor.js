/**
 * @swagger
 * components:
 *  schemas:
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
 *              id: 60dd5ec6826e8b89c44419a3
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