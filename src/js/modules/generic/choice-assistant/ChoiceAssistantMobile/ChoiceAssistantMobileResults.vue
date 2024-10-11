<template>
    <div class="w-full px-8 pt-8">
        <div class="flex w-full justify-center">
            <h1 class="text-2xl font-semibold text-secondary">
                {{ title_text }}
            </h1>
        </div>
        <div class="flex w-full justify-center mt-2 mb-8">
            <h1 class="text-primary">
                Results
            </h1>
        </div>

        <div class="w-full">
            <div v-for="scoring_key in Object.keys(scores)" class="flex flex-col justify-center mt-4">
                <div class="text-primary font-bold text-lg">{{scoring_key}}</div>
                <div class="flex items-center">
                    <div class="pr-2 text-left font-semibold text-lg w-8 max-w-8 min-w-8">{{scores[scoring_key]}}</div>
                    <div class="flex-1 flex items-center">
                        <!-- filled bar -->
                        <div v-if="scores[scoring_key]" class="bg-primary h-7" :style="`width: ${scores[scoring_key]}%;`" />
                        <div v-else class="bg-primary h-7" :style="`width: 1%;`" />


                        <!-- rest of bar as line -->
                        <div class="bg-primary h-[2px] flex-1"/>
                    </div>
                </div>
            </div>
            <div class="flex items-center">
                <div class="pl-8 flex-1 flex items-center justify-between text-primary font-semibold">
                    <div>
                        0
                    </div>

                    <div>
                        100
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- prev &  next question button -->
    <div class="fixed bottom-16 w-[100vw] flex justify-center">
        <div class="w-full  flex justify-between text-lg text-secondary font-semibold px-8">
            <div @click="handleBackToQuestions" class="flex gap-1 items-center  cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
                <div>Back to questions</div>
            </div>
            <div />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ChoiceAssistantMobileResults',
        props: {
            title_text: {
                type: String,
                default: '',
            },
            questions: {
                type: Object,
                default: [],
            },
        },
        emits: ['handle-back-to-questions'],
        methods: {
            handleBackToQuestions(){
                this.$emit('handle-back-to-questions')
            },
            handlePrintPage(){
                window.print();
            },
        },
        computed: {
            scores(){
                let scores = {};

                if(!this.questions || this.questions.length == 0){
                    return scores;
                }

                // iterate of all possible answer scores, over each key, if the key is has a number as value
                // then set the scores[key] = 0; (so that unscored results also show).
                this.questions.forEach((category, i) => {
                    category.content.forEach((question, j) => {
                        question.answers.forEach((answer) => {
                            for (const [key, value] of Object.entries(answer.scores)) {
                                if(!scores[key] && !isNaN(value)){
                                    scores[key] = 0;
                                }
                            }
                        });
                    });
                });

                // go over all question selected answers, and count up the score.
                this.questions.forEach((category, i) => {
                    category.content.forEach((question, j) => {
                        question.selected_answers.forEach((answer_index) => {
                            const scores_for_answer = question.answers[answer_index].scores;

                            // iterate over all keys in scores_for_answer
                            for (const [key, value] of Object.entries(scores_for_answer)) {
                                // if value is NaN, ignore it (needs is nan check)
                                if(isNaN(value)){
                                    continue;
                                }

                                if(!scores[key]){
                                    scores[key] = 0;
                                }

                                scores[key] += value;

                                scores[key] = Math.min(100, scores[key]);
                            }
                        });
                    });
                });

                return scores;
            }
        }
        
    }
</script>