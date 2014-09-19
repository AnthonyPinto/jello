/*global TrelloClone*/
/*global JST*/

TrelloClone.Views.ListBoardShow = Backbone.CompositeView.extend({
  template: JST["lists/index_show"],
  
  render: function () {
    var content = this.template({ 
      list: this.model 
    });
    this.$el.html(content);
    return this;
  }
});