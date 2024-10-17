<template>
    <div class="hidden platform-viewport-breakpoint:block pb-12">
        <EducationPageStandard
            :kem_education_table="kem_education_table"
            :dss_education_table="dss_education_table"
        />
    </div>
    <div class="block platform-viewport-breakpoint:hidden">
        <EducationPageMobile
            :kem_education_table="kem_education_table"
            :dss_education_table="dss_education_table"
        />
    </div>
</template>

<script>
import kem_education_table from '@/js/json/kem-education-table.js';
import dss_education_table from '@/js/json/dss-education-table.js';

import EducationPageStandard from './views/EducationPageStandard.vue';
import EducationPageMobile from './views/EducationPageMobile.vue';

export default {
    name: "EducationPage",
    components: {
        EducationPageStandard,
        EducationPageMobile,
    },
    data() {
        return {
            kem_education_table,
            dss_education_table,
        }
    },
    inject: ['language'],
    mounted() {
        console.log("Education Tables")
        console.log(this.kem_education_table)
        console.log(this.dss_education_table)
    },
    computed: {
    }
}
</script>