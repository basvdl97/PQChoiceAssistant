<template>
    <div class="w-full max-w-7xl mt-8">
        <div class="w-full flex justify-between">
            <h1 class="text-primary font-bold text-2xl ml-2">
                {{ title_text }}
            </h1>
            <div class="flex gap-2 items-center">
                <button @click="handleBackToQuestions" class="px-4 py-2 bg-primary text-white font-semibold rounded-md">
                    Back to questions
                </button>
                <!-- <button @click="handlePrintPage" class="px-4 py-2 bg-primary text-white font-semibold rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                    </svg>
                </button> -->
            </div>
        </div>

        <div class="w-full flex gap-4 min-h-[70vh]">
            <!-- important topics -->
            <div class="flex-1 flex flex-col items-center">
                <h1 class="text-primary font-bold text-lg">Indicate which question topics are most important to you</h1>
            </div>
            
            <div class="w-[1px] flex-grow-0 bg-primary" />

            <!-- scoring -->
            <div class="flex-1">
                <h1 class="text-primary font-bold text-3xl">Results</h1>

                <!-- expand info -->
                <div class="flex items-center gap-2 cursor-pointer">
                    <!-- icon -->
                    <div class="text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>

                    <!-- text -->
                    <div class="text-primary opacity-80" >
                        Show explanation
                    </div>
                </div>

                <!-- The scoribng chart -->
                <div class="flex flex-col gap-4 mt-4">
                    <div v-for="scoring_key in Object.keys(scores)" class="flex items-center">
                        <div class="text-primary font-bold text-lg w-32 max-w-32 min-w-32 truncate">{{scoring_key}}</div>
                        <div class=" pl-2 pr-2 text-right font-semibold text-lg w-12 max-w-12 min-w-12 truncate">{{scores[scoring_key]}}</div>
                        <div class="flex-1 flex items-center">
                            <!-- filled bar -->
                            <div class="bg-primary h-7" :style="`width: ${scores[scoring_key]}%;`" />

                            <!-- rest of bar as line -->
                            <div class="bg-primary h-[2px] flex-1"/>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="text-primary font-bold text-lg w-32 max-w-32 min-w-32 truncate"></div>
                        <div class=" pl-2 pr-2 text-right font-semibold text-lg w-12 max-w-12 min-w-12 truncate"></div>
                        <div class="flex-1 flex items-center justify-between text-primary font-semibold">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ChoiceAssistantStandardResults',
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