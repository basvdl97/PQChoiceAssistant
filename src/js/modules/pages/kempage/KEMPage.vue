<template>
    <ChoiceAssistant 
        :title_text="title_text"
        :questions="questions"
        :current_question="current_question"
    />
</template>

<script>
    import { questions } from '@/js/json/kem-questions.js'

    import ChoiceAssistant from '../../generic/choice-assistant/ChoiceAssistant.vue';

    export default {
        components: {
            ChoiceAssistant,
        },
        data(){
            return {
                title_text: 'EncChoiceAssistant',
                current_question: [0, 0], // based on the json. [catergory, question]
                questions,
            }
        },
    }
</script>