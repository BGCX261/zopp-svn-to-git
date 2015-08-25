function ContentAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
	  pInit();	  
	  console.log("ALMIGHT IS NOW " + Almighty);
	  
	  //var event = new Array(1);
	  
	  //event.keyCode = 98;
	  
	  console.log("BOFFSET IS NOW " + bOffset);  
}

ContentAssistant.prototype.setup = function(){
	/* this function is for setup tasks that have to happen when the scene is first created */

	/* use Mojo.View.render to render view templates and add them to the scene, if needed. */

	/* setup widgets here */

	/* add event handlers to listen to events from widgets */
	
	//var PRUMJ = this;
	
	this.controller.enableFullScreenMode(false);
	
	this.handleInputSpecialKeys = this.onInputSpecialKey.bind(this);
	Mojo.Event.listen(this.controller.document, "keypress", this.handleInputSpecialKeys, true); // true is needed to intercept 'enter' key
	
	this.handleInputEnterKeys = this.onInputEnterKey.bind(this);
	Mojo.Event.listen(this.controller.document, "keydown", this.handleInputEnterKeys, true);
	
	Mojo.Event.listen(this.controller.document, Mojo.Event.tap, this.handleMouseDown, true);
	Mojo.Event.listen(this.controller.document, Mojo.Event.dragging, this.handleMouseMove, true);
	/*
	while ($('#content').offset().top >= 0){
				bOffset -= 1;
				console.log("BOFFSET IS NOW " + bOffset);
		$('#content').css({bottom: 11 - bOffset});
		//mHeld = bOffset;
	}
	
	//scrolling();
	
	console.log("mHeld IS NOW " + mHeld);
	$('#content').css({bottom: 11 - bOffset});*/
}

ContentAssistant.prototype.handleMouseDown = function(event) {

   this.touchX = event.screenX;
   this.touchY = event.screenY;

}

ContentAssistant.prototype.handleMouseMove = function(event) {

   this.touchX = event.screenX;
   this.touchY = event.screenY;

}

ContentAssistant.prototype.onInputSpecialKey = function(event) {
	console.log("ALMIGHT IS NOW " + Almighty);

	//bOffset = 0;
	Almighty._handleKeyEvent(event);

}

ContentAssistant.prototype.onInputEnterKey = function(event) {
	bOffset = 0;
	if (Mojo.Char.isEnterKey(event.keyCode)) {
		console.log("Enter Key Pressed!");
		Almighty._handleKeyEvent(event);
	}
}


ContentAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
}


ContentAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
	  Mojo.Event.stopListening(this.controller.document, "keypress", this.handleInputSpecialKeys,true);
	  Mojo.Event.stopListening(this.controller.document, "keydown", this.handleInputEnterKeys,true);
	  
	  
}

ContentAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
	  //Mojo.Event.stopListening(this.controller.document, "keydown", this.handleInputSpecialKeys);
}
