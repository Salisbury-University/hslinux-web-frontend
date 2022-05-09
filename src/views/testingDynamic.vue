<script lang="ts">
import req from "../scripts/scripts"
</script>

<template>
    <div>
        testingDynamic {{ $route.params.id }}
        <button @click=req>Click Me</button>
    </div>

    <div id="pageContents">
        
    </div>
</template>