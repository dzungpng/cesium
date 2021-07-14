import defaultValue from "../Core/defaultValue.js";
import destroyObject from "../Core/destroyObject.js";

/**
 * Add clouds to the sky.
 *
 * @alias Clouds
 * @constructor
 *
 * @param {Boolean} [options.show=true] Whether to display the clouds.
 *
 */
function Clouds(options) {
  options = defaultValue(options, defaultValue.EMPTY_OBJECT);

  /**
   * Whether to display the clouds.
   * @type {Boolean}
   * @default true
   */
  this.show = defaultValue(options.show, true);

  // TODO:
  // Add other options, such as density and height of clouds
}

/**
 * @private
 */
Clouds.prototype.update = function (frameState) {
  if (!this.show) {
    return;
  }
  // TODO:
  // 1. Add code to add billboards to the sky
  // 2. Add code to add texture to the billboards
  // 3. Add code to add flat cloud gltfs to the sky
};

/**
 * Returns true if this object was destroyed; otherwise, false.
 * <br /><br />
 * If this object was destroyed, it should not be used; calling any function other than
 * <code>isDestroyed</code> will result in a {@link DeveloperError} exception.
 *
 * @returns {Boolean} <code>true</code> if this object was destroyed; otherwise, <code>false</code>.
 *
 * @see Clouds#destroy
 */
Clouds.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the WebGL resources held by this object.  Destroying an object allows for deterministic
 * release of WebGL resources, instead of relying on the garbage collector to destroy this object.
 * <br /><br />
 * Once an object is destroyed, it should not be used; calling any function other than
 * <code>isDestroyed</code> will result in a {@link DeveloperError} exception.  Therefore,
 * assign the return value (<code>undefined</code>) to the object as done in the example.
 *
 * @exception {DeveloperError} This object was destroyed, i.e., destroy() was called.
 *
 * @see Clouds#isDestroyed
 */
Clouds.prototype.destroy = function () {
  return destroyObject(this);
};

export default Clouds;
