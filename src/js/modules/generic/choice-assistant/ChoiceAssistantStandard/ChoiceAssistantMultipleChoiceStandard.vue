<template>
    <div class="">
        <div v-for="answer in answers">
            
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            answers: {
                type: Object,
                required: true,
            },
        },
    }
</script>