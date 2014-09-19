/*global TrelloClone*/
/*global JST*/

TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["boards/show"],
  
  initialize: function () {
    this.listenTo(this.model.lists(), "sync", this.renderSubBoards);
  },
  
  
  render: function () {
    var content = this.template({ 
      board: this.model 
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  
  renderLists: function () {
    var that = this;
    this.model.lists().each( function (list) {
      var view = new TrelloClone.Views.ListBoardShow({model: list})
      this.addSubview(".list-wrapper", view);
    }.bind(this));
  }
});