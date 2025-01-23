sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {

        },
        OnNavToHello: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("helloWorld")
        },
        OnNavToCss: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("CssVariables")
        },
        OnNavToJSO: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("JsObject")
        },
        OnNavToJson: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("JsonModel")
        },
        OnShowHello: function () {
            alert("Hello World")
        }
    });
});
