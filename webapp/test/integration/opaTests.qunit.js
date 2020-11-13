/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Name_Space_Do_Projeto/ProjetoUI5Livre/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});