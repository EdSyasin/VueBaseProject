<template>
    <div>
        <h3>Главная страница</h3>
        <div>
            <router-link to="/">Главная страница</router-link>
            <router-link to="/about">О приложении</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator"

@Component
export default class Main extends Vue{

}
</script>

<style lang="scss">

</style>