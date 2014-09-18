TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.renderSubBoards);
    
  },
  
  render: function () {
    this.$el.html($("<div class='board-list'></div>"));
    return this;
  },
  
  renderSubBoards: function () {
    var that = this;
    this.collection.each( function (board) {
      var view = new TrelloClone.Views.BoardIndexShow({model: board})
      this.addSubview(".board-list", view);
    }.bind(this));
  }

  
});