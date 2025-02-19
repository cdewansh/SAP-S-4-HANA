sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("airbus.com.ztestapp.controller.FirstScreen", {
            onInit: function () {
                // let oModel = new sap.ui.model.json.JSONModel("/scam.json");
                // this.getOwnerComponent().setModel(oModel);
            },
            onButtonClick: function () {
                // let randomAlign = ["Center", "End", "Start", "Stretch"];
                let randomColor = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
                let selectedColor = randomColor[Math.floor(Math.random() * randomColor.length)];
                // let selectedAlign = randomAlign[Math.floor(Math.random() * randomAlign.length)];
                let selectedWidth = Math.floor(Math.random() * 700);
                let selectedHeight = Math.floor(Math.random() * 700);
                let messageSelector = Math.floor(Math.random() * 4);
                let selectedSize = Math.floor(Math.random() * 3);
                selectedSize += 1;
                let selectedFont = selectedSize - 1;
                // let that = this; // Store reference to the controller instance
                // MessageBox.warning("You keep falling for this!!!", {
                //     icon: MessageBox.Icon.INFORMATION,
                //     title: "My message box title",
                //     actions: [MessageBox.Action.YES, MessageBox.Action.NO],
                //     onClose: function (oAction) {
                //         // let oModel = that.getOwnerComponent().getModel();
                //         // if (oModel) {
                //         //     oModel.setProperty("/alignment", selectedAlign);
                //         //     oModel.setProperty("/height", selectedHeigth);
                //         //     oModel.setProperty("/width", selectedWidth);
                //         // } else {
                //         //     console.error("Model is not defined");
                //         document.documentElement.style.setProperty('--main-height', selectedHeight);
                //         document.documentElement.style.setProperty('--main-width', selectedWidth);
                //         document.documentElement.style.setProperty('--main-color', selectedColor);

                //     }
                // });
                switch (messageSelector) {
                    case 0: {
                        sap.m.MessageBox.warning("stop", {
                            title: "Warning",                                    // default
                            onClose: null,                                       // default
                            styleClass: "",                                      // default
                            initialFocus: null,                                  // default
                            textDirection: sap.ui.core.TextDirection.Inherit     // default
                        });
                        break;
                    }
                    case 1: {
                        sap.m.MessageBox.success("Please stop", {
                            title: "Success",                                    // default
                            onClose: null,                                       // default
                            styleClass: "",                                      // default
                            initialFocus: null,                                  // default
                            textDirection: sap.ui.core.TextDirection.Inherit     // default
                        });
                        break;
                    }
                    case 2: {
                        sap.m.MessageBox.alert("You are annoying", {
                            title: "Alert",                                      // default
                            onClose: null,                                       // default
                            styleClass: "",                                      // default
                            initialFocus: null,                                  // default
                            textDirection: sap.ui.core.TextDirection.Inherit     // default
                        });
                        break;
                    }
                    case 3: {
                        sap.m.MessageBox.confirm("Arghhh", {
                            title: "Confirm",                                    // default
                            onClose: null,                                       // default
                            styleClass: "confirmMessageBox",                                      // default
                            initialFocus: null,                                  // default
                            textDirection: sap.ui.core.TextDirection.Inherit     // default
                        });
                        break;
                    }
                    case 4: {
                        sap.m.MessageBox.error("STOP!!!!!", {
                            title: "Error",                                      // default
                            onClose: null,                                       // default
                            styleClass: "",                                      // default
                            initialFocus: null,                                  // default
                            textDirection: sap.ui.core.TextDirection.Inherit     // default
                        });
                        break;
                    }
                }
                document.documentElement.style.setProperty('--main-height', selectedHeight + "px");
                document.documentElement.style.setProperty('--main-width', selectedWidth + "px");
                document.documentElement.style.setProperty('--main-color', selectedColor);
                document.documentElement.style.setProperty('--main-size', selectedSize + "in");
                document.documentElement.style.setProperty('--main-font', selectedFont + "in");


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
