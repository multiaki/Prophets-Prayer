function Controller() {
    function doClick(e) {
        console.log(e);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.mainwin = Ti.UI.createView({
        backgroundColor: "white",
        id: "mainwin"
    });
    $.addTopLevelView($.__views.mainwin);
    $.__views.logo = Ti.UI.createImageView({
        id: "logo"
    });
    $.__views.mainwin.add($.__views.logo);
    doClick ? $.__views.logo.addEventListener("click", doClick) : __defers["$.__views.logo!click!doClick"] = !0;
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Hello",
        id: "__alloyId1"
    });
    $.__views.mainwin.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.logo!click!doClick"] && $.__views.logo.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;