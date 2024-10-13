<template>
    <div class="w-full max-w-7xl mt-8">
        <div class="w-full flex justify-between">
            <h1 class="text-primary font-bold text-2xl ml-2">
                <!-- {{ title_text }} -->
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
            <div class="flex-1 flex flex-col">
                <h1 class="text-primary font-bold text-lg">Indicate which question topics are most important to you</h1>

                <div class="w-full flex flex-col gap-4 mt-12">
                    <div v-for="answered_question in answered_questions" class="w-full flex gap-4">
                        <!-- checkbox & expert symbol -->
                        <div class="flex flex-col items-center">
                            <!-- checkbox -->
                            <ChoiceAssistantCheckbox
                                :checked="questions[answered_question.index[0]].content[answered_question.index[1]].marked_as_important"
                                @handle-click="questions[answered_question.index[0]].content[answered_question.index[1]].marked_as_important = !questions[answered_question.index[0]].content[answered_question.index[1]].marked_as_important" />

                            <!-- expert symbol if needed -->
                            <div class="text-primary">
                                <svg v-if="answered_question.expert_level" xmlns="http://www.w3.org/2000/svg" width="12"
                                    height="12" fill="currentColor" class="mt-2 bi bi-mortarboard" viewBox="0 0 16 16">
                                    <path
                                        d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />
                                    <path
                                        d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />
                                </svg>
                            </div>
                        </div>

                        <!-- questions and answer -->
                        <div class="flex-1">
                            <div class="text-secondary font-semibold text-lg leading-none">
                                {{ answered_question.category }}</div>
                            <div class="text-secondary font-semibold text-lg leading-none">
                                {{ answered_question.question }}</div>
                            <div class="text-black font-semibold text-lg leading-none">Answer(s):
                                {{ answered_question.answers.join(', ') }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-[1px] flex-grow-0 bg-primary" />

            <!-- scoring -->
            <div class="flex-1">
                <h1 class="text-primary font-bold text-3xl">Results</h1>

                <!-- expand info -->
                <div class="flex items-center gap-2 cursor-pointer">
                    <!-- icon -->
                    <div class="text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </div>

                    <!-- text -->
                    <div class="text-primary opacity-80">
                        Show explanation
                    </div>
                </div>

                <!-- The scoribng chart -->
                <div class="flex flex-col gap-4 mt-4">
                    <div v-for="scoring_key in Object.keys(scores)" class="flex items-center">
                        <div class="text-primary font-bold text-lg w-32 max-w-32 min-w-32 truncate">{{ scoring_key }}
                        </div>
                        <div class=" pl-2 pr-2 text-right font-semibold text-lg w-12 max-w-12 min-w-12 truncate">
                            {{ scores[scoring_key].toFixed(0) }}</div>
                        <div class="flex-1 flex items-center">
                            <!-- filled bar -->
                            <div class="bg-primary h-7 transition-all duration-300 ease-in-out" :style="`width: ${scores[scoring_key]}%;`" />

                            <!-- rest of bar as line -->
                            <div class="bg-primary h-[2px] flex-1" />
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
import ChoiceAssistantCheckbox from '../ChoiceAssistantCheckbox.vue';

export default {
    name: 'ChoiceAssistantStandardResults',
    components: {
        ChoiceAssistantCheckbox,
    },
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
        handleBackToQuestions() {
            this.$emit('handle-back-to-questions')
        },
        handlePrintPage() {
            window.print();
        },
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

                        question.selected_answers.forEach((answer_index) => {
                            const scores_for_answer = question.answers[answer_index].scores;

                            // Multiplier for important questions.
                            let multiplier = isImportant ? 2 : 1;

                            // Sum up the scores for each algorithm.
                            for (const [key, value] of Object.entries(scores_for_answer)) {
                                if (isNaN(value)) {
                                    continue;
                                }
                                total_scores[key] += value * multiplier;
                            }
                        });
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
                    if (question.selected_answers.length > 0) {
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
    }
}
</script>