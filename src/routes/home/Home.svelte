<script>
  export let data, helpers, request, settings;
  import CompanyFinder from '../../components/CompanyFinder.svelte'

</script>

<CompanyFinder hydrate-client={{ companies: data.companies.map((company) => ({ NAME: company.NAME, FID: company.FID})) }} />
<ul>
  {#each data.companies as company }
    <li>{company.NAME}</li>
  {/each}
</ul>
