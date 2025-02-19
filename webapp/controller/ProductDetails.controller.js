sap.ui.define([
  "sap/ui/core/mvc/Controller",  
],
function (Controller) {
  "use strict";

  return Controller.extend("project1.controller.ProductDetails", {
      onInit: function () {          
      },
     
      onNavBack: function () {            
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("ProductList");
        },
        onPressBack: function () {            
          var oFCL = this.byId("FCLProductList");
          oFCL.setLayout("OneColumn");
        },
        onProductSelect: function (oEvent) {
          var oSelectedItem = oEvent.getParameter("listItem");
          var oContext = oSelectedItem.getBindingContext("productsData");        
          var oList = this.byId("productList");
          var oCurrentSelectedItem = oList.getSelectedItem();
          if (oCurrentSelectedItem === oSelectedItem) {                
              oList.removeSelections(true);
          }      
          this.byId("FCLProductList").setLayout("TwoColumnsMidExpanded");
          this.byId("FCLProductList").getMidColumnPages()[0].setBindingContext(oContext, "productsData");
      //     var oSelectedItem = oEvent.getParameter("listItem");
      //     var oContext = oSelectedItem.getBindingContext("productsData");
      //     var oFCL = this.byId("FCLProductList");
      
      //     // Set the binding context of the mid column to the selected product
      //     oFCL.getMidColumnPages()[0].setBindingContext(oContext, "productsData");
      },     
      onClose: function () {
          var oFCL = this.byId("FCLProductList");
          oFCL.setLayout("OneColumn"); 
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
