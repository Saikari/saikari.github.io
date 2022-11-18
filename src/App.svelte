<svelte:head>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" rel="stylesheet">
    <script crossorigin="anonymous" src="https://kit.fontawesome.com/24814b69dd.js">
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" rel="stylesheet">
    </script>
</svelte:head>
<script>
  import FirstContainer from "./lib/firstContainer.svelte";
  import SecondContainer from "./lib/secondContainer.svelte";

</script>

<main>

    <FirstContainer />
    <SecondContainer />
</main>

<style>
 :root{
     background: #2a3443;
     font-family: 'Rubik Glitch', sans-serif;

 }
</style>
