<script lang="ts">
import req from "../scripts/scripts.js"
</script>

<template>
    <div>
        testingDynamic {{ $route.params.id }}
        <button onclick={req}>Click Me</button>
    </div>
</template>