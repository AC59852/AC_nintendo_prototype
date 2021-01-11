<template>
    <div>
        <img :src="'./images/' + filter.icon + '.svg'" :alt="'Icon for ' + filter.name">
        <h2>{{ filter.name }}</h2>
    </div>
</template>

<script>
export default {
    props: ['filter', 'id']
}
</script>

<style>

</style>