export const questions = [
    {
        "category": "Information Security",
        "content": [
            {
                "question": {
                    "NL": "Hoeveel jaar moeten de gegevens die u beschermt vertrouwelijk blijven?",
                    "EN": "How many years does the data you are protecting have to stay confidential?"
                },
                "expert_level": false,
                "description": {
                    "NL": "Als uw organisatie te maken heeft met informatie die gedurende lange tijd vertrouwelijk moet blijven, kan het voordelig zijn te investeren in een conservatiever post-quantum cryptografisch algoritme. Dit minimaliseert de waarschijnlijkheid dat het PQC algoritme in de toekomst toch kwetsbaar blijkt te zijn. Dit vergroot daardoor de zekerheid dat de gegevens vertrouwelijk blijven tijdens de hele levensduur.",
                    "EN": "If your organisation is dealing with information that should remain confidential for an extended period of time, it may be beneficial to invest in a more conservative post-quantum cryptographic scheme. This minimalises the probability that the PQC algorithm turns out to have a vulnerability in the future. This increases the assurance that the data will remain confidential for its entire lifespan."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Minder dan 1 jaar",
                            "EN": "Less than 1 year"
                        },
                        "scores": {
                            "ML-KEM": 3,
                            "FrodoKEM": 4,
                            "Classic McEliece": 5,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "1 - 5 jaar",
                            "EN": "1 - 5 years"
                        },
                        "scores": {
                            "ML-KEM": 3,
                            "FrodoKEM": 4,
                            "Classic McEliece": 5,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "6 - 12 jaar",
                            "EN": "6 - 12 years"
                        },
                        "scores": {
                            "ML-KEM": 2,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "12 - 30 jaar",
                            "EN": "12 - 30 years"
                        },
                        "scores": {
                            "ML-KEM": 2,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "Meer dan 30 jaar",
                            "EN": "More than 30 years"
                        },
                        "scores": {
                            "ML-KEM": 2,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    }
                ]
            },
            {
                "question": {
                    "NL": "(Vervolg) Verwerkt u gerubriceerde data?",
                    "EN": "(Follow-up) Do you process classified information?"
                },
                "expert_level": false,
                "description": {
                    "NL": "Voor de bescherming van gerubriceerde data zijn mogelijke specifieke richtlijnen van toepassing. De AIVD kan verdere uitleg en begeleiding bieden over deze richtlijnen. Als u niet weet wat gerubriceerde data is, of als u niet zeker weet of uw toepassing gerubriceerde data verwerkt, is het antwoord op deze vraag waarschijnlijk 'Nee'.",
                    "EN": "For the protection of classified information, some specific rules and requirements may apply. The AIVD can provide guidance on these rules and requirements. In case you do not know what classified information is, or in case you are not sure whether your application handles classified information, the answer to the following question is probably 'No'."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Ja",
                            "EN": "Yes"
                        },
                        "scores": {
                            "ML-KEM": 2,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "Nee",
                            "EN": "No"
                        },
                        "scores": {
                            "ML-KEM": 3,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    }
                ]
            },
            {
                "question": {
                    "NL": "Welk NIST security niveau is nodig voor uw toepassing?",
                    "EN": "What is the required security level for your application?"
                },
                "expert_level": true,
                "description": {
                    "NL": "NIST heeft 5 veiligheidsniveau's gedefinieerd in het evalueren van de veiligheid van PQC algoritmen. Elk niveau is gekoppeld aan een bepaalde bit security als volgt: niveau 1 vereist ten minste 128 bits security, niveau 3 ten minste 192 bits security en niveau 5 ten minste 256 bits security. Er zijn geen varianten van PQC algoritmen gedefinieerd voor veiligheidsniveau's 2 en 4, daarom zijn deze hier weggelaten.",
                    "EN": "NIST has defined 5 levels of security in their evaluation criteria for the security of candidate post-quantum schemes. Every level is designed to meet the current requirements for bit security: Level 1 requires at least 128 bits of security, Level 3 requires at least 192 bits of security, and Level 5 requires at least 256 bits of security. Note that there are no variants of the schemes that directly correspond to Levels 2 and 4, so they are omitted here."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "128 bits (NIST niveau 1 - 3072 bit RSA sleutels - 256 bit ECC sleutels)",
                            "EN": "128 bits (NIST level 1 - 3072 bit RSA keys - 256 bit ECC keys)"
                        },
                        "scores": {
                            "ML-KEM": "Kyber-512",
                            "FrodoKEM": "FrodoKEM-640",
                            "Classic McEliece": "mceliece348864",
                            "HQC": "hqc-128",
                            "BIKE": "BIKE-1"
                        }
                    },
                    {
                        "text": {
                            "NL": "192 bits (NIST niveau 3 - 7680 bit RSA sleutels - 384 bit ECC sleutels)",
                            "EN": "192 bits (NIST level 3 - 7680 bit RSA keys - 384 bit ECC keys)"
                        },
                        "scores": {
                            "ML-KEM": "Kyber-768",
                            "FrodoKEM": "FrodoKEM-976",
                            "Classic McEliece": "mceliece460896",
                            "HQC": "hqc-192",
                            "BIKE": "BIKE-2"
                        }
                    },
                    {
                        "text": {
                            "NL": "256 bits (NIST niveau 5 - 15360 bit RSA sleutels - 521 bit ECC sleutels)",
                            "EN": "256 bits (NIST level 5 - 15360 bit RSA keys - 521 bit ECC keys)"
                        },
                        "scores": {
                            "ML-KEM": "Kyber-1024",
                            "FrodoKEM": "FrodoKEM-1344",
                            "Classic McEliece": "mceliece6688128",
                            "HQC": "hqc-256",
                            "BIKE": "BIKE-3"
                        }
                    }
                ]
            },
            {
                "question": {
                    "NL": "Kan uw toepassing het gebruik van twee cryptografische algoritmen (quantumkwetsbare en quantumveilige) in een hybride constructie ondersteunen?",
                    "EN": "Can your application support the use of two cryptographic algorithms (quantum-vulnerable and quantum-safe) in hybrid mode?"
                },
                "expert_level": true,
                "description": {
                    "NL": "We raden aan om quantumkwetsbare en quantum-veilige cryptografie in een hybride constructie te gebruiken. Het voordeel hiervan is dat de veiligheid gegarandeerd blijft zolang \u00e9\u00e9n van de twee algoritmen veilig is. Het kan ook helpen met backward compatibility.",
                    "EN": "In general, we recommend using quantum-vulnerable and quantum-safe cryptography in hybrid mode. The advantage of using hybrid cryptography is that the security remains guaranteed as long as one of the two schemes is secure, and it may aid backward compatibility."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Ja",
                            "EN": "Yes"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 3,
                            "Classic McEliece": 1,
                            "HQC": 4,
                            "BIKE": 4
                        }
                    },
                    {
                        "text": {
                            "NL": "Nee",
                            "EN": "No"
                        },
                        "scores": {
                            "ML-KEM": 1,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "HQC": 1,
                            "BIKE": 1
                        }
                    }
                ]
            }
        ]
    },
    {
        "category": "Performance vs Security",
        "content": [
            {
                "question": {
                    "NL": "In mijn toepassing kan ik het me veroorloven om performance in te ruilen voor veiligheid.",
                    "EN": "In my use case, I can afford to trade performance for security."
                },
                "expert_level": false,
                "description": {
                    "NL": "Het ontwerp van PQC algoritmen is anders dan van de momenteel veelgebruikte quantumkwetsbare algoritmen RSA en ECC. De PQC algoritmen zijn namelijk gebaseerd op wiskundige problemen die niet opgelost kunnen worden door de quantumcomputer. Sommige PQC algoritmen zijn erg efficient, maar zijn minder volwassen. Anderen zijn erg volwassen, maar leveren in op effici\u00ebntie.",
                    "EN": "The design of the new post-quantum schemes is different from the widely-used quantum-vulnerable algorithms such as RSA and ECC. The PQC algorithms are based on different mathematical problems, that cannot be solved by the quantum computer. Some schemes are very efficient, but are considered less mature. Others are considered more conservative, but they pay the price in performance."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Helemaal mee eens",
                            "EN": "Completely agree"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 4,
                            "Classic McEliece": 5,
                            "HQC": 0,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "Mee eens",
                            "EN": "Agree"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 4,
                            "HQC": 0,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "Neutraal",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 0,
                            "BIKE": 1
                        }
                    },
                    {
                        "text": {
                            "NL": "Oneens",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "Helemaal mee oneens",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 4,
                            "BIKE": 0
                        }
                    }
                ]
            },
            {
                "question": {
                    "NL": "Mijn toepassing kan het zich veroorloven om iets langere rekentijden te hebben, ten opzichte van mijn huidige situatie.",
                    "EN": "My use case can afford additional computing time compared to my currently in place solution."
                },
                "expert_level": false,
                "description": {
                    "NL": "PQC algoritmen zijn mogelijk minder effici\u00ebnt dan de quantumkwetsbare algoritmen. Dit heeft mogelijk negatieve gevolgen voor uw toepassing, met name als de toepassing tijdsgevoelig is.",
                    "EN": "The post-quantum cryptographic schemes may be less efficient than the currently used schemes, which may negatively impact the use case they are operating in, especially if it is time sensitive."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Helemaal mee eens",
                            "EN": "Completely agree"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 4,
                            "Classic McEliece": 0,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "Mee eens",
                            "EN": "Agree"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 4,
                            "Classic McEliece": 0,
                            "HQC": 0,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "Neutraal",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 1,
                            "Classic McEliece": 1,
                            "HQC": 2,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "Oneens",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 0,
                            "Classic McEliece": 4,
                            "HQC": 3,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "Helemaal mee oneens",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 0,
                            "Classic McEliece": 4,
                            "HQC": 4,
                            "BIKE": 2
                        }
                    }
                ]
            },
            {
                "question": {
                    "NL": "Hoeveel extra rekentijd kan uw use case zich veroorloven?",
                    "EN": "Can your use case afford additional computational time?"
                },
                "expert_level": true,
                "description": {
                    "NL": "Als uw toepassing tijdsgevoelig is, kies dan de eerste optie. Als uw toepassing niet tijdsgevoelig is, kunt u voor een minder effici\u00ebnt, maar volwassener algoritme kiezen.",
                    "EN": "If your use case is time-sensitive, choose the first answer. If your use case has no strict time constraints in key generation, encryption and decryption it can make sense to go for a less efficient algorithm for the benefit of more maturity."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Minder dan 100 ms",
                            "EN": "Less than 100 ms"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 4,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "100 - 500 ms",
                            "EN": "100 - 500 ms"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "500 - 1000 ms",
                            "EN": "500 - 1000 ms"
                        },
                        "scores": {
                            "ML-KEM": 1,
                            "FrodoKEM": 3,
                            "Classic McEliece": 0,
                            "HQC": 1,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "Meer dan 1000 ms",
                            "EN": "More than 1000 ms"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 1,
                            "Classic McEliece": 5,
                            "HQC": 1,
                            "BIKE": 1
                        }
                    }
                ]
            }
        ]
    },
    {
        "category": "Standardisation",
        "content": [
            {
                "question": {
                    "NL": "Bent u verplicht om standaardisatie-instanties te volgen?",
                    "EN": "Are you required to follow standardisation bodies?"
                },
                "expert_level": false,
                "description": {
                    "NL": "Verschillende standaardisatie-instanties kiezen mogelijk voor verschillende algoritmen om te standaardiseren, met verschillende tijdslijnen. Er zijn verschillende redenen waarom u specifieke standaardisatie-instanties zou moeten volgen, bijvoorbeeld omdat u werkt met gerubriceerde data, of vanwege andere regel- en wetgeving.",
                    "EN": "Different standardisation bodies may choose different schemes for standardisation and with different timelines. There are multiple reasons why specific standardisation bodies should be followed, for example because you process classified information, or because of other legislation."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 3,
                "answers": [
                    {
                        "text": {
                            "NL": "NIST",
                            "EN": "NIST"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 1,
                            "Classic McEliece": 3,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "ISO",
                            "EN": "ISO"
                        },
                        "scores": {
                            "ML-KEM": 2,
                            "FrodoKEM": 4,
                            "Classic McEliece": 4,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "IETF",
                            "EN": "IETF"
                        },
                        "scores": {
                            "ML-KEM": 3,
                            "FrodoKEM": 0,
                            "Classic McEliece": 3,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "G\u00e9\u00e9n van bovenstaande",
                            "EN": "None of the above"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    }
                ]
            }
        ]
    },
    {
        "category": "Hardware",
        "content": [
            {
                "question": {
                    "NL": "Op welk type apparaat zult u de cryptografische operaties uitvoeren?",
                    "EN": "On what kind of device will you use the cryptographic operations?"
                },
                "expert_level": false,
                "description": {
                    "NL": "Het type apparaat geeft een indicatie van de rekenkracht en (werk)geheugen. Of dat een cryptografisch algoritme geschikt is voor uw use case, hangt af van het vermogen.",
                    "EN": "The type of platform indicates its performance and memory capabilities. The suitability of a cryptographic algorithms strongly relates to the hardware capabilities."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 5,
                "answers": [
                    {
                        "text": {
                            "NL": "Laptop (of krachtiger)",
                            "EN": "Laptop (or higher performance)"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 5,
                            "Classic McEliece": 5,
                            "HQC": 5,
                            "BIKE": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "Smart phone",
                            "EN": "Smart phone"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 5,
                            "Classic McEliece": 5,
                            "HQC": 5,
                            "BIKE": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "IoT device",
                            "EN": "IoT device"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "HQC": 4,
                            "BIKE": 4
                        }
                    },
                    {
                        "text": {
                            "NL": "Smart card",
                            "EN": "Smart card"
                        },
                        "scores": {
                            "ML-KEM": 3,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 1
                        }
                    },
                    {
                        "text": {
                            "NL": "Sensoren",
                            "EN": "Sensors"
                        },
                        "scores": {
                            "ML-KEM": 2,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 1,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "Geen van bovenstaande",
                            "EN": "None of the above"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "HQC": 4,
                            "BIKE": 3
                        }
                    }
                ]
            },
            {
                "question": {
                    "NL": "Mijn toepassing kan zich nieuwe hardware permitteren.",
                    "EN": "My use case can afford to use new hardware."
                },
                "expert_level": false,
                "description": {
                    "NL": "Soms kan de huidige hardware niet zomaar geupdatet of vervangen worden. Denk hier bijvoorbeeld aan industri\u00eble omgevingen. Sommige PQC algoritmen kunnen worden aangepast, zodat ze wel integreren met de huidige hardware, maar soms zal de hardware compleet vervangen moeten worden om de nieuwe cryptografische operaties (effici\u00ebnt) uit te voeren.",
                    "EN": "Sometimes, the currently in-use hardware cannot be updated or replaced. This can occur in for example industrial environments. Some PQC algorithms can be re-designed to accommodate pre-existing hardware, but new hardware may be required to execute the new cryptographic operations (efficiently)."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Helemaal mee eens",
                            "EN": "Completely agree"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 5,
                            "Classic McEliece": 5,
                            "HQC": 5,
                            "BIKE": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "Mee eens",
                            "EN": "Agree"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 4,
                            "Classic McEliece": 4,
                            "HQC": 4,
                            "BIKE": 4
                        }
                    },
                    {
                        "text": {
                            "NL": "Neutraal",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "Oneens",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "Helemaal mee oneens",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "ML-KEM": 3,
                            "FrodoKEM": 2,
                            "Classic McEliece": 2,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    }
                ]
            },
            {
                "question": {
                    "NL": "Ondersteunt uw apparaat hardware accelerators?",
                    "EN": "Does your device support hardware accelerators?"
                },
                "expert_level": true,
                "description": {
                    "NL": "De effici\u00ebntie van PQC algoritmen kan geoptimaliseerd worden door het gebruik van cryptographic accelerators. Een cryptographic accelerator is een stukje speciale hardware, om effici\u00ebnt cryptografische operaties uit te voeren.",
                    "EN": "The performance of PQC algorithms can be optimised by using cryptographic accelerators. A cryptographic accelerator is a piece of dedicated hardware that can efficiently perform cryptographic operations."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 2,
                "answers": [
                    {
                        "text": {
                            "NL": "Ja, voor hash functions",
                            "EN": "Yes, for hash function calls"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 4,
                            "Classic McEliece": 4,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "Ja, voor polynoom operaties",
                            "EN": "Yes, for polynomial operations"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 4,
                            "Classic McEliece": 4,
                            "HQC": 3,
                            "BIKE": 4
                        }
                    },
                    {
                        "text": {
                            "NL": "Nee",
                            "EN": "No"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    }
                ]
            }
        ]
    },
    {
        "category": "Storage",
        "content": [
            {
                "question": {
                    "NL": "Mijn toepassing kan grotere cryptografische sleutels en ciphertexts aan dan in de huidige situatie.",
                    "EN": "My use case can afford larger cryptographic keys and ciphertexts than currently used."
                },
                "expert_level": false,
                "description": {
                    "NL": "De nieuwe wiskundige problemen waarop de quantumveilige cryptografie gebaseerd zijn, resulteert vaak in langere cryptografische sleutels en ciphertexts dan de quantumkwetsbare algoritmen zoals RSA en ECC. Dit kan leiden tot het gebruik van meer geheugen en tijd.",
                    "EN": "The design of the new cryptographic schemes often makes them slower than the currently deployed cryptographic schemes like RSA and ECC and will use larger cryptographic keys. The new schemes may become a bottleneck for the application, both in resources and time. The application will have to handle larger cryptographic keys which have to be stored."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Helemaal mee eens",
                            "EN": "Completely agree"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 2,
                            "Classic McEliece": 5,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "Mee eens",
                            "EN": "Agree"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 0,
                            "HQC": 1,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "Neutraal",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "ML-KEM": 1,
                            "FrodoKEM": 3,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "Oneens",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "Helemaal mee oneens",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 4
                        }
                    }
                ]
            },
            {
                "question": {
                    "NL": "Kan uw toepassing meer RAM-gebruik aan?",
                    "EN": "Can your application afford more RAM usage?"
                },
                "expert_level": true,
                "description": {
                    "NL": "De nieuwe wiskundige problemen waarop de quantumveilige cryptografie gebaseerd zijn, resulteert vaak in langere cryptografische sleutels en ciphertexts dan de quantumkwetsbare algoritmen zoals RSA en ECC. De publieke sleutel is nodig tijdens het maken van de versleuteling en de geheime sleutel voor de ontsleuteling De versleuteling en \u00e9\u00e9n van de sleutels moet daartoe tegelijkertijd in de RAM van het apparaat passen.",
                    "EN": "The ciphertext will generally be much larger than the ones generated by the current algorithms. The public key is also needed while encrypting a message, as well as the private key during decryption Therefore the ciphertext and either of the keys need to fit into your device's RAM simultaneously."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Minder dan 10 kB",
                            "EN": "Less than 10 kB"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "10 - 50 kB",
                            "EN": "10 - 50 kB"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "50 - 100 kB",
                            "EN": "50 - 100 kB"
                        },
                        "scores": {
                            "ML-KEM": 1,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "Meer dan 100 kB",
                            "EN": "More than 100 kB"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "HQC": 1,
                            "BIKE": 0
                        }
                    }
                ]
            },
            {
                "question": {
                    "NL": "Kan uw toepassing meer langetermijnopslag aan?",
                    "EN": "Can your application afford additional long-term storage?"
                },
                "expert_level": true,
                "description": {
                    "NL": "Af en toe worden de publieke en geheime sleutel maar voor \u00e9\u00e9n sessie gebruikt, maar typisch moeten ze een langere tijd bewaard worden. Aangezien de sleutelparen voor de quantumveilige algoritmen typisch groter zijn dan de sleutelparen voor de huidige quantumkwetsbare algoritmen, moet hier wel ruimte voor zijn op het gebruikte apparaat.",
                    "EN": "The public and private keys generally need to be stored for a longer time, not just for single sessions. These keys are significantly larger than those used by the current algorithms, so your device needs to be able to store them."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Minder dan 10 kB",
                            "EN": "Less than 10 kB"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 4,
                            "BIKE": 4
                        }
                    },
                    {
                        "text": {
                            "NL": "10 - 50 kB",
                            "EN": "10 - 50 kB"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "50 - 100 kB",
                            "EN": "50 - 100 kB"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 0,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "Meer dan 100 kB",
                            "EN": "More than 100 kB"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 1,
                            "Classic McEliece": 5,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    }
                ]
            }
        ]
    },
    {
        "category": "Communication",
        "content": [
            {
                "question": {
                    "NL": "Mijn toepassing kan grotere ciphertexts aan dan in de huidige situatie.",
                    "EN": "My use case can afford larger ciphertexts than currently used."
                },
                "expert_level": false,
                "description": {
                    "NL": "Remove???",
                    "EN": "The design of the new cryptographic schemes often makes them slower than the currently deployed cryptographic schemes like RSA and ECC and will use larger cryptographic keys. The new schemes may become a bottleneck for the application, both in resources and time. The application will have to handle larger cryptographic ciphertexts which have to be transmitted."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Helemaal mee eens",
                            "EN": "Completely agree"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 2,
                            "Classic McEliece": 5,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "Mee eens",
                            "EN": "Agree"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 0,
                            "HQC": 1,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "Neutraal",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "ML-KEM": 1,
                            "FrodoKEM": 3,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "Oneens",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "Helemaal mee oneens",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 4
                        }
                    }
                ]
            },
            {
                "question": {
                    "NL": "Kan uw applicatie meer communicatiekosten aan (in bandbreedte)?",
                    "EN": "Can your application afford additional communication cost (in bandwidth)?"
                },
                "expert_level": true,
                "description": {
                    "NL": "Sommige quantumveilige cryptografische algoritmen hebben een grotere versleuteling dan de huidige quantumkwetsbare cryptografie en vereisen daarom meer bandbreedte.",
                    "EN": "This question is specifically about the communication bandwidth. Some schemes have larger ciphertexts than others, so these will be less suitable if your communication link is constrained on bandwidth."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Minder dan 10 kB",
                            "EN": "Less than 10 kB"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "10 - 50 kB",
                            "EN": "10 - 50 kB"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "50 - 100 kB",
                            "EN": "50 - 100 kB"
                        },
                        "scores": {
                            "ML-KEM": 1,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "Meer dan 100 kB",
                            "EN": "More than 100 kB"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "HQC": 1,
                            "BIKE": 0
                        }
                    }
                ]
            },
            {
                "question": {
                    "NL": "Kan uw toepassing meer communicatiekosten aan (in tijd)?",
                    "EN": "Can your use case afford additional communication cost (in time)?"
                },
                "expert_level": true,
                "description": {
                    "NL": "Sommige quantumveilige cryptografische algoritmen hebben een grotere versleuteling dan de huidige quantumkwetsbare cryptografie en vereisen daarom meer bandbreedte. Dit is in het bijzonder relevant als uw toepassing tijdsgevoelig is.",
                    "EN": "This question is specifically about the communication time complexity. Some schemes have more complex encryption or decryption algorithms, so these will be less suitable if your application has strict timing requirements."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "max_selectable_answers": 1,
                "answers": [
                    {
                        "text": {
                            "NL": "Minder dan 100 ms",
                            "EN": "Less than 100 ms"
                        },
                        "scores": {
                            "ML-KEM": 5,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 4,
                            "BIKE": 4
                        }
                    },
                    {
                        "text": {
                            "NL": "100 - 500 ms",
                            "EN": "100 - 500 ms"
                        },
                        "scores": {
                            "ML-KEM": 4,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "500 - 1000 ms",
                            "EN": "500 - 1000 ms"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 0,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "Meer dan 1000 ms",
                            "EN": "More than 1000 ms"
                        },
                        "scores": {
                            "ML-KEM": 0,
                            "FrodoKEM": 1,
                            "Classic McEliece": 5,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    }
                ]
            }
        ]
    }
];