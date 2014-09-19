/*global TrelloClone*/
/*global JST*/

TrelloClone.Views.ListBoardShow = Backbone.CompositeView.extend({
  template: JST["lists/index_show"],
  
  initialize: function () {
    this.model.fetch();
  },
  
  render: function () {
    var content = this.template({ 
      list: this.model 
    });
    this.$el.html(content);
    return this;
  }
});