<template>
    <div class="w-full flex justify-center mt-12 ">
        <div class="w-full max-w-5xl flex gap-4 min-h-[80vh]">
            <!-- left panel -->
            <div class="flex-1">
                <!-- title  -->
                <h3 class="text-primary font-bold text-lg leading-none">
                    Start
                </h3>

                <!-- description -->
                <div class="font-semibold my-8 leading-none">
                    For which type of algorithm do you need assistance?
                </div>

                <!-- button container -->
                <div class="w-full">
                    <!-- button to KEM / Encryption -->
                    <div @click="$router.push({name: 'KEMPageRoute'})" class="w-2/3 mb-4 bg-secondary text-white p-3 rounded-lg cursor-pointer">
                        <div class="text-xl leading-none mb-2">Encryption</div>

                        <div class="w-full flex justify-end items-center">
                            <div>Start survey</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- button to DSS / Signatures -->
                    <div @click="$router.push({name: 'DSSPageRoute'})" class="w-2/3 bg-quadrinary text-white p-3 rounded-lg cursor-pointer">
                        <div class="text-xl leading-none mb-2">Signatures</div>

                        <div class="w-full flex justify-end items-center">
                            <div>Start survey</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- devider -->
            <div class="w-[1px] flex-grow-0 bg-primary" />

            <!-- right panel -->
            <div class="flex-1">
                <!-- title  -->
                <h3 class="text-primary font-bold text-lg leading-none">
                    Welcome to the PQChoiceAssistant!
                </h3>

                <!-- description -->
                <div class="mt-8 leading-none">
                    With this open-source tool, you can get advice on the feasibility of various post-quantum
                    cryptographic algorithms in your use-case.<br /><br/>
                    By answering relevant questions about your situation, you are able to see recommendations on the
                    most well-suited option, as well as the pros and cons of the schemes.<br /><br/>
                    All information entered in the PQChoiceAssistant is handled client-side, and all calculations are done
                    in the browser. Therefore, no information is stored or viewed by the creators of the
                    PQChoiceAssistant.<br /><br/>
                    <i>For this reason, the tool can also be used offline. You can easily download the website code and
                    background material from GitHub, by clicking the GitHub icon in the top right.</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomePageStandard',

    }
</script>