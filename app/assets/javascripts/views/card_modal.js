/*global TrelloClone*/
/*global JST*/

TrelloClone.Views.CardModal = Backbone.CompositeView.extend({
  template: JST["cards/card_show"],
  
  render: function () {
    var content = this.template({ 
      card: this.model 
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});