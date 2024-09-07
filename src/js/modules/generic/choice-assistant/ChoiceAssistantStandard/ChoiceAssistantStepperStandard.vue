<template>
    <div class="p-3 w-full rounded-md bg-tertiary flex justify-between gap-4">
        <!-- Category Step -->
        <div v-for="(question_category, i) in questions">
            <!-- category name -->
            <div>
                <h3 class="text-sm font-semibold " :class="{
                    'bg-secondary text-white rounded-md ': current_question[0] == i,
                    'text-secondary': current_question[0] != i,

                }">
                    {{ question_category.category.split('-')[1].slice(1) }}
                </h3>
            </div>

            <!-- category question balls -->
            <div class="flex gap-1 items-center mt-1" >
                <!-- ball -->
                <div v-for="(question, i) in questions[current_question[0]].content" :key="i" class="w-4 h-4 rounded-full border border-secondary" :class="{
                    'bg-secondary': i == current_question[1]
                }"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            questions: {
                type: Object,
                required: true,
            },
            current_question: {
                type: Array,
                required: true,
            },
        },
    }
</script>