sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "project1/model/formatter"
],
function (Controller, JSONModel, formatter) {
    "use strict";
    return Controller.extend("project1.controller.ComboBox", {
        formatter: formatter,
        onInit: function () {
            debugger
            var oEmployeeModel = this.getOwnerComponent().getModel("jsonData");
            this.getView().setModel(oEmployeeModel, "employeeModel");
            oEmployeeModel.setProperty("/selectedEmployee", {});
        },
        OnSelection: function (oEvent) {
            var oSelect = oEvent.getSource()  //returns EventProvider where event was triggered
            var employeeId = oSelect.getSelectedKey();
            // var oEmployee = oSelect.getBindingContext("jsonData").getObject()
            var  oModel = this.getView().getModel("employeeModel")
            // oModel.setProperty("/selectedEmployee", oEmployee)
            var aEmployees = oModel.getProperty("/employees")
            var selectedEmployee = aEmployees.find(employee => employee.id === employeeId)
            oModel.setProperty("/selectedEmployee",selectedEmployee)
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
