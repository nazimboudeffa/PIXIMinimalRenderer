/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 */

/**

HERE WE RENDER A SPRITE, THE STAGE IS AN UPPER LEVEL OF THIS EXAMPLE
So, just replace stage by sprite to make things clear

*/

/**
 * the CanvasRenderer draws the stage and all its content onto a 2d canvas. This renderer should be used for browsers that do not support webGL.
 * Dont forget to add the view to your DOM or you will not see anything :)
 *
 * @class CanvasRenderer
 * @constructor
 * @param width=0 {number} the width of the canvas view
 * @param height=0 {number} the height of the canvas view
 * @param view {Canvas} the canvas to use as a view, optional
 * @param transparent=false {Boolean} the transparency of the render view, default false
 */
PIXI.CanvasRenderer = function(width, height, view, transparent)
{

	/**
	 * The width of the canvas view
	 *
	 * @property width
	 * @type Number
	 * @default 800
	 */
	this.width = width || 800;

	/**
	 * The height of the canvas view
	 *
	 * @property height
	 * @type Number
	 * @default 600
	 */
	this.height = height || 600;

	/**
	 * The canvas element that the everything is drawn to
	 *
	 * @property view
	 * @type Canvas
	 */
	this.view = view || document.createElement( 'canvas' );

	/**
	 * The canvas context that the everything is drawn to
	 * @property context
	 * @type Canvas 2d Context
	 */
	this.context = this.view.getContext("2d");

	this.refresh = true;

  this.view.width = this.width;
	this.view.height = this.height;
	this.count = 0;
}

// constructor
PIXI.CanvasRenderer.prototype.constructor = PIXI.CanvasRenderer;

/**
 * Renders the stage to its canvas view
 *
 * @method render
 * @param stage {Stage} the Stage element to be rendered
 */
PIXI.CanvasRenderer.prototype.render = function(stage)
{

	// update textures if need be
	PIXI.texturesToUpdate = [];
	PIXI.texturesToDestroy = [];

	PIXI.visibleCount++;

	this.context.setTransform(1,0,0,1,0,0);
	this.context.clearRect(0, 0, this.width, this.height)
  this.renderDisplayObject(stage);

}

/**
 * Renders a display object
 *
 * @method renderDisplayObject
 * @param displayObject {DisplayObject} The displayObject to render
 * @private
 */
PIXI.CanvasRenderer.prototype.renderDisplayObject = function(displayObject)
{
	// no loger recurrsive!
	var transform;
	var context = this.context;

	context.globalCompositeOperation = 'source-over';

	// one the display object hits this. we can break the loop
	var testObject = displayObject.last._iNext;
	displayObject = displayObject.first;

	do
	{
		transform = displayObject.worldTransform;

		if(!displayObject.visible)
		{
			displayObject = displayObject.last._iNext;
			continue;
		}

		if(!displayObject.renderable)
		{
			displayObject = displayObject._iNext;
			continue;
		}

		if(displayObject instanceof PIXI.Sprite)
		{
			var frame = displayObject.texture.frame;
			if(frame)
			{
				context.globalAlpha = displayObject.worldAlpha;

				context.setTransform(transform[0], transform[3], transform[1], transform[4], transform[2], transform[5]);

				context.drawImage(displayObject.texture.baseTexture.source,
								   frame.x,
								   frame.y,
								   frame.width,
								   frame.height,
								   (displayObject.anchor.x) * -frame.width,
								   (displayObject.anchor.y) * -frame.height,
								   frame.width,
								   frame.height);
			}
	   	}

	//	count++
		displayObject = displayObject._iNext;

	}
	while(displayObject != testObject)

}
