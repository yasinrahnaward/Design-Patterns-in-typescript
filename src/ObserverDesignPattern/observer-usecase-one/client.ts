// Most applications that involve a separation of data into a presentation layer can be broken further down into the Model-View-Controller (MVC) concept.

// Controller : The single source of truth.
// Model : The link or relay between a controller and a view. It may use any of the structural patterns (adapter, bridge, facade, proxy, etc.) at some point.
// View : The presentation layer of the data from the model.
// The observer pattern can be used to manage the transfer of data across any layer and even internally to itself to add an abstraction. In the MVC structure, the View can be a subscriber to the Model, that in turn can also be a subscriber to the controller. It can also happen the other way around if the use case warrants.

// Observer Design Pattern Concept
import PieGhraphDataView from "./View/PieGraphView"
import ChartGhraphDataView from "./View/ChartGraphDataView"
import TableDataView from "./View/TableDataView"
import DataController from "./Controller/DataController"
import DataModel from "./Model/DataModel"
// A local data view that the hypothetical external controller updates
const DATA_MODEL = new DataModel()

// Add some visualisation that use the dataview
const PIE_GRAPH_VIEW = new PieGhraphDataView(DATA_MODEL)
const BAR_GRAPH_VIEW = new ChartGhraphDataView(DATA_MODEL)
const TABLE_VIEW = new TableDataView(DATA_MODEL)

// A hypothetical data controller running in a different process
const DATA_CONTROLLER = new DataController() // (Singleton)

// The hypothetical external data controller updates some data
DATA_CONTROLLER.notify([1, 2, 3])

// Client now removes a local BAR_GRAPH
BAR_GRAPH_VIEW.delete()

// The hypothetical external data controller updates the data again
DATA_CONTROLLER.notify([4, 5, 6])