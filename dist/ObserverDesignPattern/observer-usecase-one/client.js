"use strict";
// Most applications that involve a separation of data into a presentation layer can be broken further down into the Model-View-Controller (MVC) concept.
Object.defineProperty(exports, "__esModule", { value: true });
// Controller : The single source of truth.
// Model : The link or relay between a controller and a view. It may use any of the structural patterns (adapter, bridge, facade, proxy, etc.) at some point.
// View : The presentation layer of the data from the model.
// The observer pattern can be used to manage the transfer of data across any layer and even internally to itself to add an abstraction. In the MVC structure, the View can be a subscriber to the Model, that in turn can also be a subscriber to the controller. It can also happen the other way around if the use case warrants.
// Observer Design Pattern Concept
const PieGraphView_1 = require("./View/PieGraphView");
const ChartGraphDataView_1 = require("./View/ChartGraphDataView");
const TableDataView_1 = require("./View/TableDataView");
const DataController_1 = require("./Controller/DataController");
const DataModel_1 = require("./Model/DataModel");
// A local data view that the hypothetical external controller updates
const DATA_MODEL = new DataModel_1.default();
// Add some visualisation that use the dataview
const PIE_GRAPH_VIEW = new PieGraphView_1.default(DATA_MODEL);
const BAR_GRAPH_VIEW = new ChartGraphDataView_1.default(DATA_MODEL);
const TABLE_VIEW = new TableDataView_1.default(DATA_MODEL);
// A hypothetical data controller running in a different process
const DATA_CONTROLLER = new DataController_1.default(); // (Singleton)
// The hypothetical external data controller updates some data
DATA_CONTROLLER.notify([1, 2, 3]);
// Client now removes a local BAR_GRAPH
BAR_GRAPH_VIEW.delete();
// The hypothetical external data controller updates the data again
DATA_CONTROLLER.notify([4, 5, 6]);
