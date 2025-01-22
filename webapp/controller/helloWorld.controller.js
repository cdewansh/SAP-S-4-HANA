sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.helloWorld", {
        onInit: function () {

        },
        OnNavtoHello: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("helloWorld")
        },
        OnShowHello: function () {
            alert("Hello World")
        }
    });
});
