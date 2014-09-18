# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.(card, :id, :title, :list_id, :description, :ord, :created_at, :updated_at)

items ||= nil
unless items.nil?
  json.items(items) do |item|
    json.partial!("api/items/item", item: item)
  end
end

  
  # json.partial! 'comments/comments', comments: @message.comments
