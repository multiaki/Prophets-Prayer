function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.mainwin = Ti.UI.createWindow({
        id: "mainwin"
    });
    $.addTopLevelView($.__views.mainwin);
    $.__views.logo = Ti.UI.createImageView({
        id: "logo"
    });
    $.__views.mainwin.add($.__views.logo);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "Hello",
        id: "__alloyId3"
    });
    $.__views.mainwin.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;