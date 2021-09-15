sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(
    Controller,
    JSONModel
) {
    "use strict";

    return Controller.extend("onem.seya.databinding.controller.example02.Example02", {
        /**
         * @override
         */
        onInit: function() {
            var oPath = sap.ui.require.toUrl("onem/seya/databinding/model/products.json");
            var oModel = new JSONModel(oPath);
            this.getView().setModel(oModel, "product")
        },
    });
});