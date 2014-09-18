TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards"

  parse: function (response) {
    if (response.lists) {
      this.lists().set(response.lists, { parse: true });
      delete response.lists;
    }
  }
});