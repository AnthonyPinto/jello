/*global TrelloClone*/
/*global JST*/

TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST["boards/show"],
  
  events: {
    "click button.new-list" : "createList",
    'submit form': 'createList',
    "click span.glyphicon-remove": "destroyList"
  },
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.lists(), "add", this.addList);
    this.listenTo(this.model.lists(), "remove", this.removeList);
    this.listenTo(this.model, "sync", this.attachSubviews);
    
    this.model.lists().each(this.addList.bind(this));
  },
  
  destroyList: function (event) {
    $icon = $(event.currentTarget)
    var id = $icon.data("list-id");
    var list = this.model.lists().get(id);
    list.destroy();
  },
  
  createList: function () {
    if (!this.newFieldVisable) {
      this.newFieldVisable = true;
      this.$newField = $('<input type="text" class="form-control">');
      this.$el.find("form.new-list").append(this.$newField);
      this.$newField.focus();
    } else {

      var title = this.$newField.val();
      if (title !== "") {
        var list = new TrelloClone.Models.List();
        list.set({title: title, board_id: this.model.get('id')});
        list.save([], {
          success: function () {
            this.model.lists().add(list);
          }.bind(this)
        });
      }
      this.$newField.remove();
      this.newFieldVisable = false;
    }
  },
  
  addList: function (list) {
    var listShow = new TrelloClone.Views.ListBoardShow({model: list});
    this.addSubview(".list-wrapper", listShow);
  },
  
  removeList: function (list) {
    var subview = _.find(
      this.subviews(".list-wrapper"), 
      function (view) {
        return view.model === list;
      });
      this.removeSubview(".list-wrapper", subview)
  },
  
  render: function () {
    var content = this.template({ 
      board: this.model 
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
  
  // renderLists: function () {
  //   var that = this;
  //   this.model.lists().each( function (list) {
  //     var view = new TrelloClone.Views.ListBoardShow({model: list})
  //     debugger
  //     this.addSubview;
  //   }.bind(this));
  // }
});