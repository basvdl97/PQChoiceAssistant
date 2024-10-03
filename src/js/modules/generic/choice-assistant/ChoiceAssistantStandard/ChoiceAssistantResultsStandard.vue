<template>
    <div class="w-full max-w-7xl mt-8">
        <div class="w-full flex justify-end">
            <button @click="handleBackToQuestions" class="px-4 py-2 bg-primary text-white font-semibold rounded-md mb-4">
                Back to questions
            </button>
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
                    <div class="text-primary opacity-80" @click="test">
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
        props: {
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
            test(){
                console.log(this.scores);
            }
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