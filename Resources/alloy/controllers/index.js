function Controller() {
    function doClick(e) {
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    $.__views.logo = Ti.UI.createImageView({
        image: "../../images/logo-sm.png",
        top: 5,
        id: "logo"
    });
    $.__views.index.add($.__views.logo);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        color: "#000",
        text: "Hello",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Alloy.createController("ui/mainwin", {
        id: "__alloyId2"
    });
    $.__views.__alloyId2.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;