# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.(board, :id, :title, :user_id, :created_at, :updated_at)

lists ||= nil
unless lists.nil?
  json.lists(lists) do |list|
    json.partial!("api/lists/list", list: list)
  end
end

  
  # json.partial! 'comments/comments', comments: @message.comments
