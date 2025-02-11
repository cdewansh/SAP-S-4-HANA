sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
  ],
  function (BaseController, JSONModel, MessageBox, MessageToast) {
    "use strict";

    return BaseController.extend("project1.controller.App", {
      onInit: function () {
        //       // Two-way binding of JSON model to view not working
        //       var oModel = new sap.ui.model.json.JSONModel();
        // oModel.loadData("model/jsonData.json");
        // this.getView().setModel(oModel, "jsonData");
        //     },
        //     onEnterPress: function() {
        //       console.log("Enter key pressed");
        //       var sName = this.byId("employeeNameInput").getValue();
        //       console.log("Employee Name:", sName);
        //         var oModel = this.getView().getModel("jsonData");
        //         var oData = oModel.getData();
        //         oData.employees.push({ name: sName });
        //         oModel.setData(oData);
        //     
        var tableData = {
          "products": [
            {
              "productId": "P001",
              "productName": "Jet Engine Compressor",
              "category": "Engine Components",
              "description": "High-efficiency jet engine compressor designed for commercial aircraft.",
              "manufacturer": "GE Aviation",
              "price": "1500000",
              "stock": "25",
              "weight": "1500 kg",
              "material": "Titanium Alloy"
            },
            {
              "productId": "P002",
              "productName": "Landing Gear Assembly",
              "category": "Landing Gear",
              "description": "Heavy-duty landing gear system for large aircraft with enhanced durability.",
              "manufacturer": "Safran",
              "price": "500000",
              "stock": "10",
              "weight": "1200 kg",
              "material": "Aluminum Alloy"
            },
            {
              "productId": "P003",
              "productName": "Wing Flap Mechanism",
              "category": "Aerodynamic Components",
              "description": "Precision wing flap control mechanism for enhanced aerodynamics and stability.",
              "manufacturer": "Honeywell",
              "price": "200000",
              "stock": "30",
              "weight": "500 kg",
              "material": "Carbon Fiber"
            },
            {
              "productId": "P004",
              "productName": "Aircraft Cabin Lighting System",
              "category": "Cabin Equipment",
              "description": "LED-based lighting system for aircraft cabins with adjustable brightness and color.",
              "manufacturer": "Philips Lighting",
              "price": "30000",
              "stock": "100",
              "weight": "50 kg",
              "material": "Plastic, Glass"
            },
            {
              "productId": "P005",
              "productName": "Avionics Control Panel",
              "category": "Avionics",
              "description": "Advanced avionics control panel providing real-time data on flight systems.",
              "manufacturer": "Rockwell Collins",
              "price": "120000",
              "stock": "15",
              "weight": "30 kg",
              "material": "Aluminum, Glass"
            },
            {
              "productId": "P006",
              "productName": "Wing Spar",
              "category": "Structural Components",
              "description": "High-strength wing spar designed for large aircraft to provide structural support.",
              "manufacturer": "Airbus",
              "price": "450000",
              "stock": "5",
              "weight": "3000 kg",
              "material": "Titanium"
            },
            {
              "productId": "P007",
              "productName": "Aircraft Oxygen System",
              "category": "Safety Equipment",
              "description": "Oxygen delivery system designed for passenger aircraft to provide emergency oxygen.",
              "manufacturer": "Boeing",
              "price": "70000",
              "stock": "50",
              "weight": "200 kg",
              "material": "Stainless Steel"
            }
          ]
        };
        var listData = {
          "products": [],
          "currentProductName": ""
        }
        var oTableModel = new JSONModel(tableData);
        var oListModel = new JSONModel(listData);
        this.getView().setModel(oTableModel, "tableModel");
        this.getView().setModel(oListModel, "listModel");
      },
      onEnterPress: function () {
        var oListModel = this.getView().getModel("listModel");
        var currentName = oListModel.getProperty("/currentProductName");
        debugger
        if (currentName.trim()) {
          var products = oListModel.getProperty("/products");
          products.push({
            productName: currentName,
          });
          oListModel.setProperty("/products",products);
          oListModel.setProperty("/currentProductName", "");
        }else
        {
          MessageToast.show("Please enter a valid product name!")
        }
        }
      
    });
  }
);
