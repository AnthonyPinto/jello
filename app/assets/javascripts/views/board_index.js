/*global TrelloClone*/
/*global JST*/

TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST["boards/boards_index"],
  
  
  initialize: function () {
    this.listenTo(this.collection, "sync", this.renderSubBoards);
    
  },
  
  render: function () {
    content = this.template();
    this.$el.append(content);
    return this;
  },
  
  renderSubBoards: function () {
    var that = this;
    this.collection.each( function (board) {
      var view = new TrelloClone.Views.BoardIndexShow({model: board})
      this.addSubview(".board-wrapper", view);
    }.bind(this));
  }

  
});