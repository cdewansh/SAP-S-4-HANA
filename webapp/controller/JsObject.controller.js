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
                    this.getView().setModel(oModel)
                    // Enable data binding of oModel to this view
        },
        OnShowHello: function () {
            alert("Hello World")
        }
    });
});
