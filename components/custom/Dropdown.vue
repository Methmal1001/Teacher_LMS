<template>
    <section>
        <option v-for="g in selections" :key="g" :value="g">
            {{ g }}
        </option>
    </section>
</template>

<script>
export default{
    props:{
        selections: Array,
        default: []
    }
}
</script>