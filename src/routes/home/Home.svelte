<script>
  export let data, helpers, request, settings;

</script>

<style>
</style>

<svelte:head>
  <title>Elder.js Template: Home</title>
</svelte:head>

<ul>
  {#each data.companies as company }
    <li>{company.NAME}</li>
  {/each}
</ul>
