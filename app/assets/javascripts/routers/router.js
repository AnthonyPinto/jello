/*global TrelloClone*/

TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  
  routes: {
    "" : "boardsIndex",
    "/boards/:id" : "boardsShow"
  },
  
  boardsIndex: function () {
    var boards = new TrelloClone.Collections.Boards;
    boards.fetch();
    var view = new TrelloClone.Views.BoardsIndex({collection: boards});
    this._swapView(view);
  },
  
  _swapView: function (newView) {
    this.currentView && this.currentView.remove();
    this.currentView = newView;

    this.$rootEl.html(newView.render().$el);
  }
  
});