<template>
    <div class="w-full relative flex flex-col items-center mt-8">
        <!-- Title -->
        <h1 class="text-2xl font-medium text-secondary mb-12">{{ title_text }}</h1>

        <!-- Stepper -->
        <ChoiceAssistantStepperMobile 
            :questions="questions"
            :current_question="current_question"
        />

        <!-- Current Question -->
        <div class="w-full max-w-[500px] mt-12 px-8">
            <!-- Question text -->
            <div class="w-full max-w-[400px]">
                <div v-if="current_question_object?.expert_level" class="text-primary font-bold text-lg flex items-center gap-3 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
                    </svg>
                    Expert-level question
                </div>
                <h2 class="text-secondary text-xl font-semibold leading-none relative">
                    {{ current_question_object?.question?.EN }}
                </h2>
            </div>

            <!-- Multiple choice -->
            <div class="w-full flex flex-col gap-1 mt-4">
                <div v-for="answer, k in current_question_object?.answers" :key="k" class="flex gap-4 items-center">
                    <input :checked="current_question_object?.selected_answers?.includes(k)" @change="(event) => handleSelectAnswer(event, current_question_object, k)" type="checkbox" :id="`question-${current_question[0]}-answer-${k}`" class="text-secondary border-secondary focus:ring-secondary" />
                    <label :for="`question-${current_question[0]}-answer-${k}`" class="text-black font-semibold text-md">
                        {{ answer.text.EN }}
                    </label>
                </div>
            </div>
        </div>
    </div>
    <!-- bottom nav + info slider -->
    <div class="fixed z-10 bottom-0 w-[100vw] h-2/4 flex flex-col transition-transform duration-500 ease-in-out" :class="{
        'translate-y-0': info_expanded,
        'translate-y-[calc(50vh_-_2.5rem)]': !info_expanded,
    }">
        <!-- info slider -->
        <div @click="info_expanded=!info_expanded" class="w-full flex items-center bg-primary text-white h-10 min-h-10 max-h-10 px-2 cursor-pointer transition-all duration-300 ease-in-out" :class="{

        }">
            <!-- left side  -->
            <div class="flex-1 text-sm">
                More information
            </div>

            <!-- middle -->
            <div>
                <svg :class="{'rotate-180': info_expanded, 'rotate-0': !info_expanded}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-up transition-all duration-500 ease-in-out" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                </svg>
            </div>

            <!-- right side -->
            <div class="flex-1">
            
            </div>
        </div>

        <div class="w-full px-8 pt-8 bg-white text-justify flex-1  leading-tight text-sm">
            {{ current_question_object?.description?.EN }}
        </div>
    </div>
</template>

<script>
    import ChoiceAssistantStepperMobile from './ChoiceAssistantMobile/ChoiceAssistantStepperMobile.vue';

    export default {
        components: {
            ChoiceAssistantStepperMobile,
        },
        props: {
            title_text: {
                type: String,
                required: true,
            },
            questions: {
                type: Object,
                required: true,
            },
            current_question: {
                type: Array,
                required: true,
            },
        },
        data(){
            return {
                info_expanded: false,
            }
        },
        methods: {
            handleSelectAnswer(event, question, answer_index){
                if(event.target.checked){
                    if(!question.selected_answers.includes(answer_index)){
                        question.selected_answers.push(answer_index)
                    }
                }else{
                    if(question.selected_answers.includes(answer_index)){
                        question.selected_answers = question.selected_answers.filter((index) => index != answer_index)
                    }
                }
            }
        },
        computed: {
            current_question_object(){
                return this.questions[this.current_question[0]]?.content[this.current_question[1]];
            }
        }
    }
</script>