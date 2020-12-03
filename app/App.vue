<template>
    <RouterView>

    </RouterView>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator"

@Component
export default class App extends Vue{

}
</script>

<style lang="scss">
    body, html{
        margin: 0;
    }
</style>
