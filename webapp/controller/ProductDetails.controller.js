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
        }    
  });
});
