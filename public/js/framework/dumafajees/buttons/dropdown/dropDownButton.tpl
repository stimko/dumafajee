<button><%= label %></button>
<div>
<% _.each(items, function(item){ %>
    <button> <%= item.label %> </button>
<% }); %>
</div>