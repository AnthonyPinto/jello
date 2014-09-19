/*global TrelloClone*/
/*global JST*/

TrelloClone.Views.ListBoardShow = Backbone.CompositeView.extend({
  template: JST["lists/list_index_show"],
  formTemplate: JST["cards/card_form"],
  
  events: {
    // "click button.new-card" : "createCard",
    // 'submit form': 'createCard',
    "click span.x-card": "destroyCard",
    "click span.x-form": "closeForm",
    "click a.new-card" : "openForm",
    "click button.new-card" : "submitForm",
    "click div.card-title" : "openCard"
  },
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "add", this.addCard);
    this.listenTo(this.model.cards(), "remove", this.removeCard);
    this.listenTo(this.model, "sync", this.attachSubviews);
    this.model.cards().each(this.addCard.bind(this));
  },
  
  openCard: function (event) {

    var id = $(event.currentTarget).data("card-id");
    var card = this.model.cards().get(id);
    var cardModal = new TrelloClone.Views.CardModal({model: card});
    this.addSubview(".modal-wrapper", cardModal);
    this.$el.find(".modal").modal("show")
  },
  
  closeCard: function (event) {
    event.currentTarget
  },
  
  openForm: function (event) {
    event.preventDefault();
    this.$el.find("form.new-card").html(this.formTemplate());
    this.$el.find("textarea.new-card-field").focus();
  },
  
  closeForm: function () {
    var $anchor = $('<a class="new-card" href="#">Add a card...</a>');
    this.$el.find("form.new-card").html($anchor);
  },
  
  submitForm: function () {
    var title = this.$el.find('textarea.new-card-field').val();
    if (title !== "") {
      var card = new TrelloClone.Models.Card();
      card.set({title: title, list_id: this.model.get('id')});
      card.save([], {
        success: function () {
          this.model.cards().add(card);
        }.bind(this)
      });
    }
  },
  
  destroyCard: function (event) {
    var $icon = $(event.currentTarget);
    var id = $icon.data("card-id");
    var card = this.model.cards().get(id);
    card.destroy();
  },
  
  addCard: function (card) {
    var cardShow = new TrelloClone.Views.CardBoardShow({model: card});
    this.addSubview(".card-wrapper", cardShow);
  },
  
  removeCard: function (card) {
    var subview = _.find(
      this.subviews(".card-wrapper"), 
      function (view) {
        return view.model === card;
      });
      this.removeSubview(".card-wrapper", subview);
  },
  
  render: function () {
    var content = this.template({ 
      list: this.model 
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});