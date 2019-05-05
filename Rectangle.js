/**
 * @author Mat Groves http://matgroves.com/
 */

/**
 * the Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its width and its height.
 *
 * @class Rectangle
 * @constructor
 * @param x {number} The X coord of the upper-left corner of the rectangle
 * @param y {number} The Y coord of the upper-left corner of the rectangle
 * @param width {number} The overall wisth of this rectangle
 * @param height {number} The overall height of this rectangle
 */
PIXI.Rectangle = function(x, y, width, height)
{
	/**
	 * @property x
	 * @type Number
	 * @default 0
	 */
	this.x = x || 0;

	/**
	 * @property y
	 * @type Number
	 * @default 0
	 */
	this.y = y || 0;

	/**
	 * @property width
	 * @type Number
	 * @default 0
	 */
	this.width = width || 0;

	/**
	 * @property height
	 * @type Number
	 * @default 0
	 */
	this.height = height || 0;
}

// constructor
PIXI.Rectangle.prototype.constructor = PIXI.Rectangle;
