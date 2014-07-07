<div id="dumafajeeDetails">
  <h3>{ model.dumafajeeId }</h3>
  <form>
    <fieldset rv-if="model.content">
      <label>Content</label>
      <input rv-value="model.content">
    </fieldset>
    <fieldset rv-each-prop="displayProperties">
      <label rv-text="prop.attributes.display"></label>

      <input rv-unless="prop.attributes.long" rv-disabled="prop.attributes.disabled" rv-value="prop.attributes.value">
      <textarea rv-if="prop.attributes.long" rv-value="prop.attributes.value"></textarea>
    </fieldset>
  </form>

  <div class="dropzone"> 
    <i class="fa fa-trash-o">
  </div>
</div>