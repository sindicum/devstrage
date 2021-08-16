<template>
  <div class="directive">
    <DirectiveTop />
    <DirectiveVon />
    <DirectiveMouseevent />
    <DirectiveVmodel />
    <DirectiveVmodelform />
    <DirectiveVmodelradiobutton />
    <DirectiveVmodelcheckbox />
    <DirectiveVmodelselectbox />
    <DirectiveVfor />
    <DirectiveVforarray />
    <DirectiveVforobject />
    <DirectiveVshow />
    <DirectiveVbind />
  </div>
</template>

<script>
import DirectiveTop from "../components/directive/DirectiveTop.vue"
import DirectiveVon from "../components/directive/DirectiveVon.vue"
import DirectiveMouseevent from "../components/directive/DirectiveMouseevent.vue"
import DirectiveVmodel from "../components/directive/DirectiveVmodel.vue"
import DirectiveVmodelform from "../components/directive/DirectiveVmodelform.vue"
import DirectiveVmodelradiobutton from "../components/directive/DirectiveVmodelradiobutton.vue"
import DirectiveVmodelcheckbox from "../components/directive/DirectiveVmodelcheckbox.vue"
import DirectiveVmodelselectbox from "../components/directive/DirectiveVmodelselectbox.vue"
import DirectiveVfor from "../components/directive/DirectiveVfor.vue"
import DirectiveVforarray from "../components/directive/DirectiveVforarray.vue"
import DirectiveVforobject from "../components/directive/DirectiveVforobject.vue"
import DirectiveVshow from "../components/directive/DirectiveVshow.vue"
import DirectiveVbind from "../components/directive/DirectiveVbind.vue"


export default {
  name: 'Directive',
  components: {
    DirectiveTop,
    DirectiveVon,
    DirectiveMouseevent,
    DirectiveVmodel,
    DirectiveVmodelform,
    DirectiveVmodelradiobutton,
    DirectiveVmodelcheckbox,
    DirectiveVmodelselectbox,
    DirectiveVfor,
    DirectiveVforarray,
    DirectiveVforobject,
    DirectiveVshow,
    DirectiveVbind
  }
}
</script>