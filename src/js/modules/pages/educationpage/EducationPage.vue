<template>
    <div class="hidden platform-viewport-breakpoint:block pb-12">
        <div class="w-full relative flex justify-center mt-8">
            <div class="w-full max-w-7xl">
                <!-- Top Row -->
                <div class="w-full flex justify-between items-end">
                    <!-- buttons left -->
                    <div class="flex gap-4 items-center">
                        <button
                            class="px-4 py-3 leading-none font-semibold rounded-md text-white bg-secondary cursor-pointer text-xl">
                            Encryption
                        </button>
                        <button
                            class="px-4 py-3 leading-none font-semibold rounded-md text-orange-600 bg-white border border-orange-600 cursor-pointer text-xl">
                            Signatures
                        </button>
                    </div>

                    <!-- view type button right -->
                    <div class="flex gap-4 items-center">
                        <button
                            class="w-10 h-10 leading-none font-semibold rounded-md text-white bg-primary cursor-pointer flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-calculator" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </button>
                        <button
                            class="w-10 h-10  leading-none font-semibold rounded-md text-primary bg-white border border-primary cursor-pointer flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                            </svg>
                        </button>
                    </div>
                </div>


                <!-- table -->
                <table class="w-full mt-16">
                    <thead>
                        <tr class="text-primary font-bold text-lg">
                            <th class="py-4">
                                Characteristics
                            </th>
                            <th v-for="algo in algorithms" class="py-4 text-center border-l border-l-1 border-primary">
                                {{ algo }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(characteristic, i) in Object.keys(education_table)" class="text-secondary" :class="{
                            'bg-tertiary': i % 2 == 0,
                            'bg-white': i % 2 != 0,
                        }">
                            <td>
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 bg-secondary rounded-full text-white flex leading-none items-center justify-center font-bold text-lg">
                                        {{ i + 1}}
                                    </div>
                                    <div class="font-semibold text-lg leading-none pr-2">
                                        {{ characteristic }}
                                    </div>
                                </div>
                            </td>
                            <td v-for="(algo, j) in algorithms" class="text-center leading-snug text-black border-l border-l-1 border-primary px-2 py-2">
                                {{ education_table[characteristic][algo].EN }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- <div class="block platform-viewport-breakpoint:hidden" >
        <ChoiceAssistantMobile 
            :title_text="title_text"
            :questions="questions"
            :current_question="current_question"
        />
    </div> -->
</template>

<script>
import { education_table } from '@/js/json/kem-education-table.js'

export default {
    name: "EducationPage",
    data(){
        return {
            education_table,
        }
    },
    mounted(){
        console.log("Education Table")
        console.log(this.education_table)
    },
    computed: {
        algorithms(){
            const algos = [];

            if(!this.education_table || !Object.keys(this.education_table).length){
                return algos;
            }

            Object.keys(this.education_table).forEach((key) => {
                Object.keys(this.education_table[key]).forEach((algo) => {
                    if(!algos.includes(algo)){
                        algos.push(algo)
                    }
                });
            });

            return algos;
        }
    }
}
</script>