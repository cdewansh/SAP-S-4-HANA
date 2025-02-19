sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.JsObject", {
        onInit: function () {
            var dummyData = {          
                    "employees": [
                        {
                            "name": "John Doe",
                            "id": "E123",
                            "location": "New York",
                            "designation": "Software Engineer",
                            "experience": "5 years"
                        },
                        {
                            "name": "Jane Smith",
                            "id": "E124",
                            "location": "London",
                            "designation": "Project Manager",
                            "experience": "8 years"
                        },
                        {
                            "name": "Sam Wilson",
                            "id": "E125",
                            "location": "Sydney",
                            "designation": "QA Engineer",
                            "experience": "3 years"
                        }
                    ]
                            }
            
                    // Have to set the data model to the controller and in turn view which use this controller
                    var oModel = new JSONModel(dummyData);
                    // Setting the binding mode : one-way or two-way
                    oModel.setDefaultBindingMode("TwoWay")
                    this.getView().setModel(oModel)
                    // Enable data binding of oModel to this view
        },
        OnShowHello: function () {
            alert("Hello World")
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
