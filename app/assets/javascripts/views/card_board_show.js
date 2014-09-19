/*global TrelloClone*/
/*global JST*/

TrelloClone.Views.CardBoardShow = Backbone.CompositeView.extend({
  template: JST["cards/card_index_show"],
  
  render: function () {
    var content = this.template({ 
      card: this.model 
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});