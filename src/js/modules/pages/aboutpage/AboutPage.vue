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
                    In March 2023, we published the PQC Migration Handbook, which assists organisations in mitigating
                    the threat of quantum computers on currently used cryptography, by providing concrete steps and
                    advice. The PQChoiceAssistant is an extension to the PQC Migration Handbook. After the PQC
                    Diagnosis, in which the vulnerable cryptography is identified, the PQChoiceAssistant assists in making
                    the choice of which algorithm(s) to migrate to.<br /><br/>
                    We make a distinction between Key Encapsulation Mechanism (KEM) and Digital Signature Scheme
                    (DSS) algorithms. Currently, we support ML-KEM, Classic McEliece, FrodoKEM, HQC and BIKE as
                    KEMs; and Falcon, ML-DSA, XMSS and SLH-DSA as DSSes. These are the most prominent candidates,
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
                    De PQChoiceAssistant is een tool ontwikkeld door TNO en Centrum Wiskunde & Informatica, met ondersteuning van Fox Crypto, NXP, Technolution and Compumatica, in opdracht van de AIVD en het Ministerie van Economische Zaken en Klimaat, and uitgevoerd onder de dcypher roadmap Cryptografie.<br /><br />
                    In maart 2023 hebben we het PQC-migratie handbook gepubliceerd, met als doel organisaties te begeleiden in het beperken van de dreiging van quantumcomputers op momenteel gebruikte cryptografie, in de vorm van concrete stappen and advies. De PQChoiceAssistant is een uitbreiding op het PQC-migratie handboek. Na een PQC Diagnose waarbij kwetsbare cryptografie wordt vastgesteld, helpt de PQChoiceAssistant bij het maken van de keuze naar welk(e) algoritme(n) te migreren.<br /><br />
                    We maken een distinctie tussen Key Encapsulation Mechanism (KEM) and Digital Signature Scheme (DSS) algoritmen. Momenteel ondersteunen we ML-KEM, Classic McEliece, FrodoKEM, HQC en BIKE als KEMs; en Falcon, ML-DSA, XMSS and SLH-DSA as DSS'en. Dit zijn de mest prominente kandidaten, omdat ze ofwel geaccepteerd zijn al NIST-standard, of overheidsondersteuning hebben.
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