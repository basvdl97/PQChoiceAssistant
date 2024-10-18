<template>
    <div class="w-full flex justify-center pt-12">
        <div class="w-full max-w-2xl px-4 flex flex-col items-center ">
            <template v-if="language.current == 'EN'">
                <!-- title  -->
                <h3 class="text-primary font-bold text-lg leading-none w-fit">
                    About the PQChoiceAssistant
                </h3>

                <!-- description -->
                <div class="mt-8 leading-none">
                    The PQChoiceAssistant is a tool developed by TNO and Centrum Wiskunde & Informatica, with the
                    support of Fox Crypto, NXP, Technolution and Compumatica, commissioned by the Dutch General
                    Intelligence and Security Service (AIVD) and the Ministry of Economic Affairs and Climate Policy (min.
                    EZK), and executed under the dcypher roadmap Cryptography.<br /><br/>
                    The PQChoiceAssistant is an extension to the [PQC Migration Handbook](https://www.tno.nl/en/newsroom/2023/04-0/pqc-migration-handbook/). The PQC Migration Handbook
                    assists organisations in mitigating the threat of quantum computers on currently used cryptography, 
                    by providing concrete advice, tools and methodologies. After the PQC
                    Diagnosis, in which the vulnerable cryptography is identified, the PQChoiceAssistant assists in making
                    the choice of which algorithm(s) to migrate to.<br /><br/>
                    There are two separate questionnaires, one for key encapsulation mechanisms (KEMs) and one for Digital Signature Algorithms (DSAs). 
                    Currently, we support ML-KEM, Classic McEliece, FrodoKEM, HQC and BIKE as
                    KEMs; and Falcon, ML-DSA, XMSS and SLH-DSA as DSAs. These are the most prominent PQC candidates,
                    as they are either accepted as a NIST standard or have governmental support.
                </div>
            </template>
            <template v-if="language.current == 'NL'">
                <!-- title  -->
                <h3 class="text-primary font-bold text-lg leading-none w-fit">
                    Over de PQChoiceAssistant
                </h3>

                <!-- description -->
                <div class="mt-8 leading-none">
                    De PQChoiceAssistant is een tool ontwikkeld door TNO en Centrum Wiskunde & Informatica, met de ondersteuning van Fox Crypto, NXP, Technolution and Compumatica, in opdracht van de AIVD en het Ministerie van Economische Zaken en Klimaat, uitgevoerd onder de dcypher roadmap Cryptografie.<br /><br />
                    De PQChoiceAssistant is een uitbreiding op het [PQC Migratie Handboek](https://www.tno.nl/nl/newsroom/2023/04/pqc-migratie-handboek/). Het PQC Migratie Handboek ondersteunt organisaties in het mitigeren van de quantumdreiging op de huidige cryptografie,
                    door concreet advies, tooling en methodologieën aan te bieden. 
                    Na een PQC Diagnose, waarbij kwetsbare cryptografie wordt vastgesteld, helpt de PQChoiceAssistant bij het maken van de keuze naar welk(e) algoritme(n) te migreren.<br /><br />
                    Er zijn twee losse vragenlijsten, één voor Key Encapsulation Mechanism (KEMs) en een voor Digital Signature Algorithms (DSAs). Momenteel ondersteunen we ML-KEM, Classic McEliece, FrodoKEM, HQC en BIKE als KEMs; en Falcon, ML-DSA, XMSS and SLH-DSA as DSAs. Dit zijn de meest prominente kandidaten, omdat ze ofwel geaccepteerd zijn al NIST-standaard, of overheidsondersteuning hebben.
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutPage',
        inject: ['language'],
    }
</script>
