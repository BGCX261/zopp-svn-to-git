function StageAssistant() {
	
}

StageAssistant.prototype.setup = function() {
	Mojo.Controller.stageController.pushScene({
      name: 'title',
      disableSceneScroller: true
   });
};
