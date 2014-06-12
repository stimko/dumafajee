<button><%= content %></button>
<div>
<% _.each(items, function(item){ %>
    <button> <%= item %> </button>
<% }); %>
</div>