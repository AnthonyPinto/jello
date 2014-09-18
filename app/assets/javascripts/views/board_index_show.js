TrelloClone.Views.BoardIndexShow = Backbone.CompositeView.extend({
  template: JST["boards/index_show"],
  
  initialize: function () {
    // this.listenTo(this.model, "sync", this.render);
  },
  
  
  render: function () {
    content = this.template({ 
      board: this.model 
    })
    this.$el.html(content)
    return this;
  }
});