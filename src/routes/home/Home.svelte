<script>
  export let data, helpers, request, settings;
  import Clock from '../../components/Clock.svelte';

  console.log(data.companies)
</script>

<style>
</style>

<svelte:head>
  <title>Elder.js Template: Home</title>
</svelte:head>

<Clock hydrate-client={{}} />
<a href='/simple/'>Simple</a>
