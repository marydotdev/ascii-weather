<script>
	import Weather from '../lib/Weather.svelte';

  export let data;


</script>
<svelte:head>
	<title>ASCII Weather Forecast</title>
</svelte:head>

<div class="relative max-w-2xl">
  <form method="POST" class="flex flex-col">
    <label>
        Latitude
        <input name="latitude" type="latitude" class="border border-black">
    </label>
    <label>
        Longitude
        <input name="longitude" type="longitude" class="border border-black">
    </label>

    <button class="border border-black w-fit">Submit</button>
  </form>
  <Weather />
</div>
