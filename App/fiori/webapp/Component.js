sap.ui.define([
    "sap/ui/core/UIComponent",
    "delek/financial/analysis/model/models",
    "delek/financial/analysis/util/formatter"
], function (UIComponent, models, formatter) {
    "use strict";

    return UIComponent.extend("delek.financial.analysis.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
            var oModel = models.createDeviceModel();
            this.setModel(oModel, "device");
        }
    });
});