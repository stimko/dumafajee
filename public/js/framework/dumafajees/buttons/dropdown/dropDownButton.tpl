<button><%= content %></button>
<div>
<% _.each(menu, function(item){ %>
    <button> <%= item %> </button>
<% }); %>
</div>