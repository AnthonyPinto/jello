/*global TrelloClone*/

TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: "api/cards"
  
  // lists: function () {
  //   this._lists = this._lists ||
  //     new TrelloClone.Collections.TodoComments()
  //   return this._lists
  // }
  //
  // parse: function (response) {
  //   if (response.lists) {
  //     this.lists().set(response.lists, { parse: true });
  //     delete response.lists;
  //   }
  // }
});