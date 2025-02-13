sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
],
  function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.ProductList", {
      onInit: function () {
        var oProdModel = this.getOwnerComponent().getModel("productsData");
        this.getView().setModel(oProdModel, "productModel");
        oProdModel.setProperty("/selectedProduct", {});
      },

      onProductSelect: function (oEvent) {
        var oRadioButton = oEvent.getSource();
        var oProduct = oRadioButton.getBindingContext("productsData").getObject();
        var oModel = this.getView().getModel("productModel");
        oModel.setProperty("/selectedProduct", oProduct);
    
      },

      onNavToDetails: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("ProductDetails");
      }

    });
  });
