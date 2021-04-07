<script>
  import AutoComplete from 'simple-svelte-autocomplete'
  export let companies
  let selected
</script>

<AutoComplete items={companies} bind:selectedItem={selected} labelFieldName="NAME" />
