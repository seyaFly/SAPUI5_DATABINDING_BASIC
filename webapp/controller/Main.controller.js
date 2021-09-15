sap.ui.define(["onem/seya/databinding/controller/BaseController"], function(Controller) {
    "use strict";

    return Controller.extend("onem.seya.databinding.controller.Main", {
        navToHandeler: function(iId) {
            var sNav = "bindingExample" + iId.toString();
            this.getOwnerComponent().getRouter().navTo(sNav);
        }
    });
});