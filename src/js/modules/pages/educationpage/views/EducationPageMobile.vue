<template>
    <div class="w-full relative flex flex-col items-center mt-8">
        <div class="text-2xl font-semibold text-secondary mb-6 text-center">
            <template v-if="language.current == 'EN'">
                Overview of PQC algorithms
            </template>
            <template v-else-if="language.current == 'NL'">
                Overzicht van PQC algoritmes
            </template>
        </div>

        <div class="w-fit flex justify-center gap-4 mb-4">
            <button @click="handleChangeTab('kem')" class="px-3 py-2 leading-none font-semibold rounded cursor-pointer text-base"
                :class="{
                    'bg-secondary text-white': tab == 'kem',
                    'bg-white text-secondary border border-secondary': tab != 'kem',
                }">
                Encryption
            </button>
            <button @click="handleChangeTab('dss')" class="px-3 py-2 leading-none font-semibold rounded cursor-pointer text-base"
                :class="{
                    'bg-quadrinary text-white': tab == 'dss',
                    'bg-white text-quadrinary border border-quadrinary': tab != 'dss',
                }">
                Signatures
            </button>
        </div>

        <div class="w-fit flex justify-center gap-4 flex-wrap">
            <!-- dropdown (select) between characteristic -->
            <select v-model="selected_characteristic"
                class="border border-secondary text-secondary rounded-md px-3 py-1 focus:outline-none">
                <!-- <option disabled value="">Select Characteristic</option> -->
                <option v-for="characteristic in selectable_characteristics" :key="characteristic"
                    :value="characteristic">
                    {{ characteristic }}
                </option>
            </select>

            <!-- div with buttons to table view or graph view (small round) -->
            <div class="flex gap-2">
                <button
                    class="w-8 h-8 leading-none font-semibold rounded-full  border cursor-pointer flex items-center justify-center"
                    :class="{
                        'bg-primary text-white': info_type == 'table',
                        'bg-white text-primary border border-primary': info_type != 'table',
                    }">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-calculator" viewBox="0 0 16 16">
                        <path
                            d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path
                            d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
                <button
                    class="w-8 h-8 leading-none font-semibold rounded-full text-primary bg-white border border-primary cursor-pointer flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                        <path
                            d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="mt-8 w-full max-w-[600px]">
            <template v-if="tab == 'kem'">
                <div v-for="algo in kem_algorithms" class="p-4 w-full border-b border-gray-200">
                    <div class="font-bold text-primary text-xl">{{ algo }}</div>
                    <p class="text-gray-600 text-sm">{{kem_education_table[selected_characteristic][algo][language.current]}}</p>
                </div>
            </template>
            <template v-else>
                <div v-for="algo in dss_algorithms" class="p-4 w-full  border-b border-gray-200">
                    <div class="font-bold text-primary text-xl">{{ algo }}</div>
                    <p class="text-gray-600 text-sm">{{dss_education_table[selected_characteristic][algo][language.current]}}</p>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "EducationPageMobile",
    props: {
        kem_education_table: {
            type: Object,
            default: {},
        },
        dss_education_table: {
            type: Object,
            default: {},
        },
    },
    data() {
        return {
            tab: "kem",
            info_type: "table",

            selected_characteristic: "Information Security",
        }
    },
    inject: ['language'],
    computed: {
        kem_algorithms() {
            const algos = [];

            if (!this.kem_education_table || !Object.keys(this.kem_education_table).length) {
                return algos;
            }

            Object.keys(this.kem_education_table).forEach((key) => {
                Object.keys(this.kem_education_table[key]).forEach((algo) => {
                    if (!algos.includes(algo)) {
                        algos.push(algo)
                    }
                });
            });

            return algos;
        },
        dss_algorithms() {
            const algos = [];

            if (!this.dss_education_table || !Object.keys(this.dss_education_table).length) {
                return algos;
            }

            Object.keys(this.dss_education_table).forEach((key) => {
                Object.keys(this.dss_education_table[key]).forEach((algo) => {
                    if (!algos.includes(algo)) {
                        algos.push(algo)
                    }
                });
            });

            return algos;
        },

        selectable_characteristics() {
            if(this.tab == "kem") {
                return Object.keys(this.kem_education_table);
            } else {
                return Object.keys(this.dss_education_table);
            }
        }
    },
    methods: {
        get_info_text(algo) {
            // check if all keys exist
            if(Object.keys(this.kem_education_table)?.length === 0 
                && Object.keys(this.kem_education_table).includes(this.selected_characteristic)
                && Object.keys(this.kem_education_table[this.selected_characteristic]).includes(algo)
            ){
                return this.kem_education_table[this.selected_characteristic][algo][this.language.current]
            }
            return "";
        },
        handleChangeTab(tab) {
            this.tab = tab;

            // reset selected characteristic get set to first avaible in the table
            if(this.tab == "kem") {
                this.selected_characteristic = Object.keys(this.kem_education_table)[0];
            } else {
                this.selected_characteristic = Object.keys(this.dss_education_table)[0];
            }
        }
    }
}
</script>