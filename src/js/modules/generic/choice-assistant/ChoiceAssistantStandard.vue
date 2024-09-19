<template>
    <!-- outer wrapper / spans full display to center the questionaire with some max width -->
    <div class="w-full relative flex justify-center mt-8">
        <!-- inner wrapper / contains the questionaire -->
        <div class="w-full max-w-5xl">
            <!-- paginator -->
            <ChoiceAssistantStepperStandard
                :questions="questions"
                :current_question="current_question"
            />

            <div class="mt-8 mb-2 w-full flex justify-between">
                <!-- previous question button -->
                <button
                    @click="gotoPreviousCategory"
                    :disabled="current_question[0] == 0"
                    class="px-4 py-2 bg-primary text-white font-semibold rounded-md"
                    :class="{ 'cursor-not-allowed opacity-50': current_question[0] == 0 }"
                >
                    Previous Category
                </button>

                <!-- next question button -->
                <button
                    @click="gotoNextCategory"
                    :disabled="current_question[0] == questions.length - 1"
                    class="px-4 py-2 bg-secondary text-white font-semibold rounded-md"
                    :class="{ 'cursor-not-allowed opacity-50': current_question[0] == questions.length - 1 }"
                >
                    Next Category
                </button>
            </div>

            <div @mouseenter="handleMouseEntersQuestion(i)" v-for="question, i in questions[current_question[0]].content" class="w-full flex gap-4 mb-4  relative">
                <!-- question & answers -->
                <div class="flex-1 py-2">
                    <div v-if="question.expert_level" class="text-primary font-bold text-lg">
                        Expert-level question
                    </div>
                    <h2 class="text-secondary text-xl font-semibold leading-none relative">
                        <div v-if="question.expert_level" class="absolute top-0 left-0 -translate-x-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
                                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
                            </svg>
                        </div>
                        {{ question?.question?.EN }}
                    </h2>

                    <!-- Answer choices -->
                    <div class="w-full flex flex-col gap-1 mt-4">
                        <div v-for="answer, k in question.answers" :key="k" class="flex gap-4 items-center">
                            <input type="radio" :id="`question-${i}-answer-${k}`" class="text-secondary border-secondary focus:ring-secondary" />
                            <label :for="`question-${i}-answer-${k}`" class="text-black font-semibold text-sm">
                                {{ answer.text.EN }}
                            </label>
                        </div>
                    </div>
                </div>

                <!-- devider -->
                <div class="w-[1px] flex-grow-0 bg-primary" />

                <!-- description -->
                <div class="flex-1 py-2 text-black font-semibold text-sm">
                    <span v-if="i == 0" class="text-semibold text-xl text-primary">Explanation<br/><br/></span>
                    {{ question?.description?.EN }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ChoiceAssistantStepperStandard from './ChoiceAssistantStandard/ChoiceAssistantStepperStandard.vue'

    export default {
        components: {
            ChoiceAssistantStepperStandard,
        },
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
        // emits: ['goto-next-question', 'goto-previous-question'],
        methods: {
            gotoNextCategory(){
                this.current_question[1] = 0
                this.current_question[0] += 1
            },
            gotoPreviousCategory(){
                this.current_question[1] = 0
                this.current_question[0] -= 1
            },
            handleMouseEntersQuestion(question_in_category_index){
                this.current_question[1] = question_in_category_index;
            }
        }
    }
</script>