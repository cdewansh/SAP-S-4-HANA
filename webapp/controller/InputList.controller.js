sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController, JSONModel) {
      "use strict";
  
      return BaseController.extend("project1.controller.App", {
        onInit: function() {
          // Two-way binding of JSON model to view not working
          var oModel = new sap.ui.model.json.JSONModel();
    oModel.loadData("model/jsonData.json");
    this.getView().setModel(oModel, "jsonData");
        },
        onEnterPress: function() {
          console.log("Enter key pressed");
          var sName = this.byId("employeeNameInput").getValue();
          console.log("Employee Name:", sName);
            var oModel = this.getView().getModel("jsonData");
            var oData = oModel.getData();
            oData.employees.push({ name: sName });
            oModel.setData(oData);
        }
      });
    }
  );
  