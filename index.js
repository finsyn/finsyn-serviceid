
const getParts = serviceId => serviceId.split('_')
const getType = serviceId => getParts(serviceId)[0]
const getId = serviceId => getParts(serviceId)[1]
const isType = type => serviceId => getType(serviceId) === type

module.exports = {
  getType,
  getId,
  isType
}
