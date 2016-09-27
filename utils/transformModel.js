/**
 * Adds transform function for mongoose objects
 * @param doc
 * @param obj
 * @returns {*}
 */
export default function transformModel (doc, obj) {
  obj.id = obj._id;
  delete obj._id;
  return obj;
};
