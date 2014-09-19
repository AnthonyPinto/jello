/*global TrelloClone*/

TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  
  routes: {
    "" : "boardsIndex",
    "boards/:id" : "boardsShow"
  },
  
  boardsIndex: function () {
    var boards = TrelloClone.Collections.boards;
    boards.fetch();
    var boardIndexView = new TrelloClone.Views.BoardsIndex({collection: boards});
    this._swapView(boardIndexView);
  },
  
  boardsShow: function (id) {
    var board = TrelloClone.Collections.boards.getOrFetch(id);
    board.fetch();
    var boardShowView = new TrelloClone.Views.BoardShow({model: board});
    this._swapView(boardShowView);
  },
  
  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
  
});