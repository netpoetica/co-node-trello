var Trello = require('node-trello'),
    thunkify = require('thunkify');

/**
 * Export a thunkified public API
 *
 * @type {Function}
 */
exports = module.exports = function (key, token) {
  var fn = new Trello(key, token);

  // Wrapping just the request function
  // covers all HTTP verbs but this structure
  // is in place for future API changes.
  ['request'].forEach(function (method) {
    fn[method] = thunkify(fn[method]);
  });

  return fn;
};