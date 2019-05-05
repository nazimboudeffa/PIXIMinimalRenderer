/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
 *
 * @class Point
 * @constructor
 * @param x {number} position of the point
 * @param y {number} position of the point
 */
PIXI.Point = function(x, y)
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
}

// constructor
PIXI.Point.prototype.constructor = PIXI.Point;
