



// Filters out unwanted fields from an object
module.exports.filterObj = (obj, ...allowedFields) => {
    const newObj = {}
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) newObj[el] = obj[el]
    })
    return newObj
};

// Delete object keys
module.exports.filterObjDel = (obj, ...notAllowedFields) => {
    const newObj = {}
    Object.keys(obj).forEach(el => {
        if (!notAllowedFields.includes(el)) newObj[el] = obj[el]
    })
    return newObj
}