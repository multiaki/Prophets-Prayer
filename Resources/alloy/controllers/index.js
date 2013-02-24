var Alloy = require('alloy'),
	Backbone = Alloy.Backbone,
	_ = Alloy._,
	$model;



function Controller() {
	require('alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	
	$model = arguments[0] ? arguments[0]['$model'] : null;
	var $ = this;
	var exports = {};
	var __defers = {};
	
	// Generated code that must be executed before all UI and/or
	// controller code. One example is all model and collection 
	// declarations from markup.
	

	// Generated UI code
	$.__views.index = Ti.UI.createWindow(
{backgroundColor:"white",id:"index",}
);
$.addTopLevelView($.__views.index);$.__views.logo = Ti.UI.createImageView(
{image:"images/logo-sm.png",top:5,id:"logo",}
);
$.__views.index.add($.__views.logo);
$.__views.__alloyId1 = Ti.UI.createLabel(
{color:"#000",text:'Hello',id:"__alloyId1",}
);
$.__views.index.add($.__views.__alloyId1);
$.__views.__alloyId2 = Alloy.createController('ui/mainwin',{id:"__alloyId2",});
$.__views.__alloyId2.setParent($.__views.index);
exports.destroy=function(){};

	// make all IDed elements in $.__views available right on the $ in a 
	// controller's internal code. Externally the IDed elements will
	// be accessed with getView().
	_.extend($, $.__views);

	// Controller code directly from the developer's controller file
	$.index.open()

	// Generated code that must be executed after all UI and
	// controller code. One example deferred event handlers whose
	// functions are not defined until after the controller code
	// is executed.
	

	// Extend the $ instance with all functions and properties 
	// defined on the exports object.
	_.extend($, exports);
}

module.exports = Controller;