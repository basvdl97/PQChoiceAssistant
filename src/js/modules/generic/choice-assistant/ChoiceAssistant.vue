<template>
    <div class="hidden platform-viewport-breakpoint:block pb-12" >
        <ChoiceAssistantStandard 
            :title_text="title_text"
            :questions="questions"
            :current_question="current_question"

            :scores="scores"
            :answered_questions="answered_questions"
        />
    </div>
    <div class="block platform-viewport-breakpoint:hidden" >
        <ChoiceAssistantMobile 
            :title_text="title_text"
            :questions="questions"
            :current_question="current_question"

            :scores="scores"
            :answered_questions="answered_questions"
        />
    </div>
</template>

<script>
    import ChoiceAssistantStandard from './ChoiceAssistantStandard/ChoiceAssistantStandard.vue';
    import ChoiceAssistantMobile from './ChoiceAssistantMobile/ChoiceAssistantMobile.vue';

    export default {
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
        components: {
            ChoiceAssistantStandard,
            ChoiceAssistantMobile,
        },
        mounted(){
            this.initSelectedAnswers();
        },
        methods: {
            initSelectedAnswers(){
                this.questions.forEach((category, i) => {
                    category.content.forEach((question, j) => {
                        question.selected_answers    = []
                        question.marked_as_important = false
                    });
                });

                console.log("DSS Questions Anwers have been RESET!")
                console.log(this.questions[0].content[0])
            }
        },
        computed: {
            scores() {
                let scores = {};

                if (!this.questions || this.questions.length == 0) {
                    return scores;
                }

                // Initialize scores object with all possible algorithms as keys.
                this.questions.forEach((category) => {
                    category.content.forEach((question) => {
                        question.answers.forEach((answer) => {
                            for (const [key, value] of Object.entries(answer.scores)) {
                                if (!scores.hasOwnProperty(key) && !isNaN(value)) {
                                    scores[key] = 0;
                                }
                            }
                        });
                    });
                });

                let n = 0; // Number of answered questions.
                let k = 0; // Number of questions marked as important.

                // Initialize total scores for each algorithm.
                let total_scores = {};
                for (let key in scores) {
                    total_scores[key] = 0;
                }

                this.questions.forEach((category) => {
                    category.content.forEach((question) => {
                        if (question.selected_answers && question.selected_answers.length > 0) {
                            n += 1;

                            // Check if the question is marked as important.
                            let isImportant = question.marked_as_important || false; // Adjust property name if different.
                            if (isImportant) {
                                k += 1;
                            }

                            // Keep track of all answers to this question.
                            let num_selected_answers = 0;
                            let question_scores = {};
                            for (let key in scores) {
                                question_scores[key] = 0;
                            }

                            question.selected_answers.forEach((answer_index) => {
                                const scores_for_answer = question.answers[answer_index].scores;

                                // Multiplier for important questions.
                                let multiplier = isImportant ? 2 : 1;

                                // Sum up the scores for each algorithm.
                                for (const [key, value] of Object.entries(scores_for_answer)) {
                                    if (isNaN(value)) {
                                        continue;
                                    }
                                    question_scores[key] += multiplier * value;
                                }
                                num_selected_answers++;
                            });

                            // Add the average scores for this question to the total.
                            for (let key in scores) {
                                total_scores[key] += question_scores[key] / num_selected_answers;
                            }
                        }
                    });
                });

                // Calculate the final score for each algorithm.
                let denominator = 5 * (n + k);

                for (let key in scores) {
                    let T_alg = total_scores[key];

                    if (denominator > 0) {
                        scores[key] = (100 * T_alg) / denominator;
                        // Ensure the score is between 0 and 100.
                        scores[key] = Math.max(0, Math.min(100, scores[key]));
                    } else {
                        scores[key] = 0;
                    }
                }

                return scores;
            },
            answered_questions() {
                let answered_questions = [];

                if (!this.questions || this.questions.length == 0) {
                    return answered_questions;
                }

                this.questions.forEach((category, i) => {
                    category.content.forEach((question, j) => {
                        if (question.selected_answers?.length > 0) {
                            answered_questions.push({
                                index: [i, j],
                                expert_level: question.expert_level,
                                question: question.question.EN,
                                answers: question.selected_answers.map((answer_index) => {
                                    return question.answers[answer_index].text.EN;
                                }),
                            });
                        }
                    });
                });

                return answered_questions;
            }
        },
    }
</script>