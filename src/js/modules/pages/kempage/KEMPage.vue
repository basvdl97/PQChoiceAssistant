<template>
    <div class="hidden platform-viewport-breakpoint:block" >
        <AssistantStandard 
            :questions="questions"
        />
    </div>
    <div class="block platform-viewport-breakpoint:hidden" >
        <AssistantMobile 
            :questions="questions"
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
                questions
            }
        }
    }
</script>