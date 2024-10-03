<template>
    <div class="hidden platform-viewport-breakpoint:block pb-12" >
        <ChoiceAssistantStandard 
            :title_text="title_text"
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
    import { questions } from '@/js/json/kem-questions.js'

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
        },
        mounted(){
            this.initSelectedAnswers()
        },
        methods: {
            /**
             * Adds 'selected_answers' to each question in questions. Its an empty array for now.
             * 
             * Will be filled with the indexes of each answer, for each question.
             */
            initSelectedAnswers(){
                this.questions.forEach((category, i) => {
                    category.content.forEach((question, j) => {
                        question.selected_answers = []
                    });
                });

                console.log("DSS Questions Anwers have been RESET!")
                console.log(this.questions[0].content[0])
            }

        }
    }
</script>