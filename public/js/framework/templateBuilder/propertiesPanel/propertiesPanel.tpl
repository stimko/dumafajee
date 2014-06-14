
<% _.each(this.modelAttributes, function(attribute){ %>

  <label>attribute.key</label>
  <input type="text" value="attribute.value">

<% }); %>