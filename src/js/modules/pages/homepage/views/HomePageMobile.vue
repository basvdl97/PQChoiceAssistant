<template>
    <div class="w-full flex flex-col items-center pt-8 px-4">
        <!-- title  -->
        <h3 class="text-primary font-bold text-lg leading-none">
            Start
        </h3>

        <!-- description -->
        <div class="font-semibold mt-6 mb-12 leading-none text-center">
            For which type of algorithm do you need assistance?
        </div>

        <!-- button to KEM / Encryption -->
        <div @click="$router.push({ name: 'KEMPageRoute' })"
            class="w-full max-w-[300px] mb-4 bg-secondary text-white p-3 rounded-lg cursor-pointer">
            <div class="text-xl leading-none mb-2">Encryption</div>

            <div class="w-full flex justify-end items-center">
                <div>Start survey</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path
                            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- button to DSS / Signatures -->
        <div @click="$router.push({ name: 'DSSPageRoute' })"
            class="w-full max-w-[300px] mb-4 bg-quadrinary text-white p-3 rounded-lg cursor-pointer">
            <div class="text-xl leading-none mb-2">Signatures</div>

            <div class="w-full flex justify-end items-center">
                <div>Start survey</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path
                            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- button to DSS / Signatures -->
        <div @click="$router.push({ name: 'AlgorithmOverviewPageRoute' })"
            class="w-full max-w-[300px] mb-4 bg-primary text-white p-3 rounded-lg cursor-pointer">
            <div class="text-xl leading-none mb-2">Overview of PQC</div>

            <div class="w-full flex justify-end items-center">
                <div>View</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path
                            d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
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
        <div @click="info_expanded = !info_expanded"
            class="w-full flex items-center bg-primary text-white h-10 min-h-10 max-h-10 px-2 cursor-pointer transition-all duration-300 ease-in-out"
            :class="{

            }">
            <!-- left side  -->
            <div class="flex-1 text-sm">
                More information
            </div>

            <!-- middle -->
            <div>
                <svg :class="{ 'rotate-180': info_expanded, 'rotate-0': !info_expanded }"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-chevron-up transition-all duration-500 ease-in-out" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                </svg>
            </div>

            <!-- right side -->
            <div class="flex-1">

            </div>
        </div>

        <div class="w-full px-8 pt-8 bg-white flex-1  leading-tight text-sm">
            <template v-if="language.current == 'EN'">
                <!-- title  -->
                <h3 class="text-primary font-bold text-lg leading-none">
                    Welcome to the PQChoiceAssistant!
                </h3>

                <!-- description -->
                <div class="mt-8 leading-none  text-justify">
                    With this open-source tool, you can get advice on the feasibility of various post-quantum
                    cryptographic algorithms in your use-case.<br /><br />
                    By answering relevant questions about your situation, you are able to see recommendations on the
                    most well-suited option, as well as the pros and cons of the schemes.<br /><br />
                    All information entered in the PQChoiceAssistant is handled client-side, and all calculations are
                    done
                    in the browser. Therefore, no information is stored or viewed by the creators of the
                    PQChoiceAssistant.<br /><br />
                    <i>For this reason, the tool can also be used offline. You can easily download the website code and
                        background material from GitHub, by clicking the GitHub icon in the top right.</i>
                </div>
            </template>
            <template v-if="language.current == 'NL'">
                <!-- title  -->
                <h3 class="text-primary font-bold text-lg leading-none">
                    Welkom bij de PQChoiceAssistant!
                </h3>

                <!-- description -->
                <div class="mt-8 leading-none  text-justify">
                    Met deze open-source tool kunt u advise krijgen over de geschiktheid van verschillende post-quantum cryptografische algoritmen die passen bij uw toepassing.<br /><br />
                    Door relevante vragen over uw situatie te beantwoorden, kunt u aanbevelingen zien over de meest geschikte opties, net als enige voor- en nadelen van elk algoritme.<br /><br />
                    Alle informatie die u in de PQChoiceAssistant invoert, wordt aan de client-side behandeld, en alle berekeningen worden in uw browser uitgevoerd. Dit zorgt ervoor dat geen informatie wordt opgeslagen of gezien door de makers van de PQChoiceAssistant.<br /><br />
                    <i>Voor deze reden is het hulpmiddel ook offline te gebruiken. U kunt eenvoudig de websitecode en achtergrondmateriaal downloaden van GitHub, door op de GitHub-icoontje in de rechterbovenhoek te klikken.</i>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePageMobile',
    data() {
        return {
            info_expanded: false,
        }
    },
    inject: ['language'],
}
</script>