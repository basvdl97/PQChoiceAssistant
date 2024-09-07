<template>
    <div class="hidden platform-viewport-breakpoint:block" >
        <AssistantStandard 
            :questions="questions"
            :current_question="current_question"
        />
    </div>
    <div class="block platform-viewport-breakpoint:hidden" >
        <AssistantMobile 
            :questions="questions"
            :current_question="current_question"
        />
    </div>
</template>

<script>
    import { questions } from '@/js/json/questions.js'

    import AssistantStandard from '@/js/modules/generic/choice-assistant/ChoiceAssistantStandard.vue'
    import AssistantMobile from '@/js/modules/generic/choice-assistant/ChoiceAssistantMobile.vue'

    export default {
        components: {
            AssistantStandard,
            AssistantMobile
        },
        data(){
            return {
                questions,
                current_question: [0, 0], // based on the json. [catergory, question]
            }
        }
    }
</script>