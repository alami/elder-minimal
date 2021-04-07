<script>
  export let data, helpers, request, settings;
  import CompanyFinder from '../../components/CompanyFinder.svelte'

</script>

<CompanyFinder hydrate-client={{}}/>
<ul>
  {#each data.companies as company }
    <li>{company.NAME}</li>
  {/each}
</ul>
