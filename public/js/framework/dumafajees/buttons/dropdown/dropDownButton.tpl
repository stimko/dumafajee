<button><%= label %></button>
<div>
<% _.each(items, function(item){ %>
    <button> <%= item %> </button>
<% }); %>
</div>