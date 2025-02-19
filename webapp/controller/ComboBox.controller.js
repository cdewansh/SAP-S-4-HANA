sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.ComboBox", {
        onInit: function () {
            var oProdModel = this.getOwnerComponent().getModel("jsonData");
            this.getView().setModel(oEmployeeModel, "employeeModel");
            oProdModel.setProperty("/selectedEmployee", {});
        },
        OnSelection: function (oEvent) {
            var oSelect = oEvent.getSource()
            var oEmployee = oSelect.getBindingContext("jsonData").getObject()
            var  oModel = this.getView().getModel("employeeModel")
            oModel.setProperty("/selectedEmployee", oEmployee)
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
        OnNavTo2Way: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("TwoWayBinding")
        },
        OnNavToInputList: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("InputList")
        },
        OnNavToForm: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Form")
        },
        OnNavToProductList: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("ProductList")
        },
        OnNavToComboBox: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("ComboBox")
        },
        OnShowHello: function () {
            alert("Hello World")
        },
        onCollapseExpandPress: function () {
			var oSideNavigation = this.byId('sideNavigation');
			var bExpanded = oSideNavigation.getExpanded();
            var bVisible = oSideNavigation.getVisible();
            oSideNavigation.setVisible(!bVisible);
			oSideNavigation.setExpanded(!bExpanded);
		}
    });
});
