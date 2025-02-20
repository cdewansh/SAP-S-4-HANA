sap.ui.define([],
    function () {
        "use strict";
        return {
            tooUpper: function (string) {
                return string? string.toUpperCase() + " (Formatter function)" : ""
            }
        }
    }
)