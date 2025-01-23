sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.JsonModel", {
        onInit: function () {
                    // Have to set the data model to the controller and in turn view which use this controller
                    // var oModel = new JSONModel(dummyData);
                    // this.getView().setModel(oModel)
                    // Enable data binding of oModel to this view
        },
        OnShowHello: function () {
            alert("Hello World")
        }
    });
});
