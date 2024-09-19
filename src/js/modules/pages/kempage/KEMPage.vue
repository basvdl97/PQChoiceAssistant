<template>
    <div class="hidden platform-viewport-breakpoint:block" >
        <ChoiceAssistantStandard 
            :questions="questions"
            :current_question="current_question"
        />
    </div>
    <div class="block platform-viewport-breakpoint:hidden" >
        <ChoiceAssistantMobile 
            :title_text="title_text"
            :questions="questions"
            :current_question="current_question"
        />
    </div>
</template>

<script>
    import { questions } from '@/js/json/questions.js'

    import ChoiceAssistantStandard from '@/js/modules/generic/choice-assistant/ChoiceAssistantStandard.vue'
    import ChoiceAssistantMobile from '@/js/modules/generic/choice-assistant/ChoiceAssistantMobile.vue'

    export default {
        components: {
            ChoiceAssistantStandard,
            ChoiceAssistantMobile
        },
        data(){
            return {
                title_text: 'KEM choice assistant',

                questions,
                current_question: [0, 0], // based on the json. [catergory, question]
            }
        }
    }
</script>