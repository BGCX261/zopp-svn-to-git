function TitleAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

TitleAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the scene is first created */
		
	/* use Mojo.View.render to render view templates and add them to the scene, if needed. */
	
	/* setup widgets here */
	
	/* add event handlers to listen to events from widgets */
	
	this.game = "_:NONE:_";
	Mojo.FilePicker.pickFile({
		extensions: ['z5'],
		onSelect: function(f){
			this.game = /*"file://" +*/ f.fullPath;
		}.bind(this)
	}, this.controller.stageController);
	
	this.controller.enableFullScreenMode(true);
	
	this.controller.setupWidget("new-game",
            this.attributes = {
                disabledProperty: 'disabled'
                },
            this.model = {
                buttonLabel : "Start",
                buttonClass: '',
                disabled: false
            });
	
	this.controller.setupWidget("load-game",
            this.attributes = {
                disabledProperty: 'disabled'
                },
            this.model = {
                buttonLabel : "load",
                buttonClass: '',
                disabled: false
            });
	

		try {
	this.starthandler = this.gamestart.bind(this);
		this.controller.listen('new-game', Mojo.Event.tap, this.starthandler);
} catch (e) {
	Mojo.Log.error("START BUTTON ERROR:", e);
}

	this.gamePickerAttrs = {
      choices: [
         {label: this.game, value: this.game},
		 {label: "ZORK I", value: "stories/zork1.z5.js"}/*,
		 {label: "ZORK II", value: "http://www.batmantis.com/zorks/zork2.z5"},
		 {label: "ZORK III", value: "http://www.batmantis.com/zorks/zork3.z5"},
		 {label: "ZORK: The Undiscovered Underground", value: "http://www.batmantis.com/zorks/ztuu.z5"},
         {label: "ZORK: Troll's Eye View", value: "stories/troll.z5.js"},
		 {label: "Hitch Hiker's Guide", value: "http://probability.ca/jeff/nonwork/IF/hhgg.z5"},
		 {label: "Adventure", value: "http://parchment.toolness.com/if-archive/games/zcode/Advent.z5"},
		 {label: "Frobozzi", value: "http://parchment.toolness.com/if-archive/games/zcode/Frobozzi.z5"},
		 {label: "Conan: Kill Everything", value: "http://parchment.toolness.com/if-archive/games/zcode/ConanKillEverything.z5"},
		 {label: "Gerbil Riot", value: "http://parchment.toolness.com/if-archive/games/zcode/GerbilRiot.z5"},
		 {label: "Huge Cave", value: "http://parchment.toolness.com/if-archive/games/zcode/HugeCave.z8"},
		 {label: "Amissville", value: "http://parchment.toolness.com/if-archive/games/zcode/amiss.z5"},*/
      ],
	  modelProperty: "currentGame"   
   };
   this.gamePickerModel = {
      currentGame: this.game,
      disabled: false
   };
   
   LoadStory = this.game;
   
   this.controller.setupWidget("games-list", this.gamePickerAttrs, this.gamePickerModel);
   
   //this.changehandler = this.gamechange.bind(this);
   try {
   	this.controller.listen('games-list', Mojo.Event.propertyChange, this.gamechange, true);
   } 
   catch (e) {
   	Mojo.Log.error("LIST LISTENER ERROR", e);
   }


			
}

/*TitleAssistant.prototype.getfile = function(file){
	//this.setNotificationReq = SystemService.setNotifications(file);
		LoadStory = "file://" + file.fullPath;
		this.locale = LoadStory;
}*/

TitleAssistant.prototype.gamestart = function(event) {
	Mojo.Controller.stageController.pushScene({
      name: 'content',
      disableSceneScroller: true
   });
}

TitleAssistant.prototype.gamechange = function(event) {
	console.log("LOADSTORY VALUE IS CURRENTLY " + LoadStory);
console.log("CHANGING THE VALUE TO '" + event.value+ "'.");
		LoadStory = event.value;



}


TitleAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
}


TitleAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
}

TitleAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
}
