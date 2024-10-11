<template>
    <div>

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