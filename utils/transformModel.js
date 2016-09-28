/**
 * Adds transform function for mongoose objects
 * @param doc
 * @param obj
 * @returns {*}
 */
export default function transformModel (doc, obj) {
  obj.id = obj._id;
  obj.v = obj.__v;

  delete obj.__v;
  delete obj._id;
  return obj;
};

//TODO: Strip
