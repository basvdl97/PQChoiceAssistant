export const questions = [
    {
        "category": "Category 1 - Information Security",
        "content": [
            {
                "question": {
                    "NL": "NTB",
                    "EN": "For how many years does the data you are protecting/validating have to stay secure/verified?"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "If your organization is dealing with information that should remain validated for an extended period of time, it may be beneficial to invest in a more conservative post-quantum cryptographic scheme. This ensures that you minimize the chance of the scheme being vulnerable in the future and thus increasing the assurance that the data will remain verified for its entire lifespan."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Less than 1 year"
                        },
                        "scores": {
                            "Kyber": 3,
                            "FrodoKEM": 4,
                            "Classic McEliece": 5,
                            "Dilithium": 3,
                            "Falcon": 3,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "1 - 5 years"
                        },
                        "scores": {
                            "Kyber": 3,
                            "FrodoKEM": 4,
                            "Classic McEliece": 5,
                            "Dilithium": 3,
                            "Falcon": 3,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "6 - 12 years"
                        },
                        "scores": {
                            "Kyber": 2,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "Dilithium": 2,
                            "Falcon": 2,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "12 - 30 years"
                        },
                        "scores": {
                            "Kyber": 2,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "Dilithium": 2,
                            "Falcon": 2,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "More than 30 years"
                        },
                        "scores": {
                            "Kyber": 2,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "Dilithium": 2,
                            "Falcon": 2,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    }
                ],
                "max_selectable_answers": 5
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "(Follow-up) Are you working with classified information?"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "For the protection of classified information, some specific rules and requirements may apply. In case you do not know what classified information is, or in case you are not sure whether your application handles classified information, the answer to the following question is probably 'No'. The AIVD can provide guidance on these rules and requirements."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Yes"
                        },
                        "scores": {
                            "Kyber": 2,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "Dilithium": 4,
                            "Falcon": 3,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "No"
                        },
                        "scores": {
                            "Kyber": 3,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "Dilithium": 3,
                            "Falcon": 3,
                            "Sphincs+": 3,
                            "XMSS": 3
                        }
                    }
                ],
                "max_selectable_answers": 2
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "What is the required security level for your application?"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "NIST has defined 5 levels of security as their evaluation criteria for the security of candidate post-quantum schemes. Every level is designed to meet the current requirements for bit security: Level 1 equals 128 bits of security, Level 3 equals 192 bits of security, and Level 5 equals 256 bits of security. Note that there are no variants of the schemes that directly correspond to Levels 2 and 4, so they are omitted here."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "128 bits - NIST level 1 - 3072 bit RSA keys - 256 bit ECC keys"
                        },
                        "scores": {
                            "Kyber": "Kyber-512",
                            "FrodoKEM": "FrodoKEM-640",
                            "Classic McEliece": "mceliece348864",
                            "HQC": "hqc-128",
                            "BIKE": "BIKE-1",
                            "Dilithium": "Dilithium2",
                            "Falcon": "Falcon-512",
                            "Sphincs+": "Sphincs+-128",
                            "XMSS": "XMSS-256"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "192 bits - NIST level 3 - 7680 bit RSA keys - 384 bit ECC keys"
                        },
                        "scores": {
                            "Kyber": "Kyber-768",
                            "FrodoKEM": "FrodoKEM-976",
                            "Classic McEliece": "mceliece460896",
                            "HQC": "hqc-192",
                            "BIKE": "BIKE-2",
                            "Dilithium": "Dilithium3",
                            "Sphincs+": "Sphincs+-192",
                            "XMSS": "XMSS-256"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "256 bits - NIST level 5 - 15360 bit RSA keys - 521 bit ECC keys"
                        },
                        "scores": {
                            "Kyber": "Kyber-1024",
                            "FrodoKEM": "FrodoKEM-1344",
                            "Classic McEliece": "mceliece6688128",
                            "HQC": "hqc-256",
                            "BIKE": "BIKE-3",
                            "Dilithium": "Dilithium5",
                            "Falcon": "Falcon-1024",
                            "Sphincs+": "Sphincs+-256",
                            "XMSS": "XMSS-256"
                        }
                    }
                ],
                "max_selectable_answers": 3
            }
        ]
    },
    {
        "category": "Category 2 - Performance vs Security",
        "content": [
            {
                "question": {
                    "NL": "NTB",
                    "EN": "My application can support the use of two cryptographic algorithms (classical and post-quantum) in hybrid mode"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "You may consider the option of using post-quantum cryptography in hybrid mode: using conventional and post-quantum cryptography together. The advantage of using hybrid cryptography is that the security remains guaranteed as long as one of the two schemes is secure, and it may aid backward compatibility."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Yes"
                        },
                        "scores": {
                            "Kyber": 5,
                            "FrodoKEM": 3,
                            "Classic McEliece": 1,
                            "Dilithium": 5,
                            "Falcon": 5,
                            "Sphincs+": 1,
                            "XMSS": 1
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "No"
                        },
                        "scores": {
                            "Kyber": 1,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "Dilithium": 1,
                            "Falcon": 1,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    }
                ],
                "max_selectable_answers": 2
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "In my application, I can afford to trade performance for security"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "The design of the new post-quantum schemes is different from the conventionally used RSA and ECC. The designs are based on different mathematical problems. Some schemes are very efficient, but considered less mature, while some others are considered more conservative, but they pay the price in efficiency. It is important to evaluate the trade-off performance versus security when choosing the appropriate scheme."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely agree"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 4,
                            "Classic McEliece": 5,
                            "HQC": 0,
                            "BIKE": 3,
                            "Dilithium": 0,
                            "Falcon": 0,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Agree"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 4,
                            "HQC": 0,
                            "BIKE": 2,
                            "Dilithium": 0,
                            "Falcon": 0,
                            "Sphincs+": 4,
                            "XMSS": 4
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 0,
                            "BIKE": 0,
                            "Dilithium": 0,
                            "Falcon": 0,
                            "Sphincs+": 0,
                            "XMSS": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 0,
                            "Dilithium": 4,
                            "Falcon": 4,
                            "Sphincs+": 0,
                            "XMSS": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "Kyber": 5,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 4,
                            "BIKE": 1,
                            "Dilithium": 5,
                            "Falcon": 5,
                            "Sphincs+": 0,
                            "XMSS": 0
                        }
                    }
                ],
                "max_selectable_answers": 5
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "My use case can afford additional delay compared to my currently in place solution"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "The post-quantum cryptographic schemes may be less efficient than the currently used schemes, which may negatively impact the application they are operating in, especially if it is time sensitive."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely agree"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_perf - )"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Agree"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_perf - 1)"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_perf - 2)"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_perf - 3)"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_perf - 4)"
                        }
                    }
                ],
                "max_selectable_answers": 5
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "My application is willing to opt for a conservative choice at the expense of efficiency"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "<Not written>"
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely agree"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 4,
                            "Classic McEliece": 5,
                            "Dilithium": 0,
                            "Falcon": 0,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Agree"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 4,
                            "Dilithium": 0,
                            "Falcon": 0,
                            "Sphincs+": 4,
                            "XMSS": 4
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "Dilithium": 0,
                            "Falcon": 0,
                            "Sphincs+": 0,
                            "XMSS": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "Dilithium": 4,
                            "Falcon": 4,
                            "Sphincs+": 0,
                            "XMSS": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "Kyber": 5,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "Dilithium": 5,
                            "Falcon": 5,
                            "Sphincs+": 0,
                            "XMSS": 0
                        }
                    }
                ],
                "max_selectable_answers": 5
            }
        ]
    },
    {
        "category": "Category 3 - Standardisation",
        "content": [
            {
                "question": {
                    "NL": "NTB",
                    "EN": "Can your use case afford additional computational time?"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "<Not written>"
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Less than 100 ms"
                        },
                        "scores": {
                            "Kyber": "0.05 * (5-avg_perf) + avg_perf"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "100 - 500 ms"
                        },
                        "scores": {
                            "Kyber": "0.25 * (5-avg_perf) + avg_perf"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "500 - 1000 ms"
                        },
                        "scores": {
                            "Kyber": "0.75 * (5-avg_perf) + avg_perf"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "More than 1000 ms"
                        },
                        "scores": {
                            "Kyber": "2.00 * (5-avg_perf) + avg_perf"
                        }
                    }
                ],
                "max_selectable_answers": 4
            }
        ]
    },
    {
        "category": "Category 4 - Hardware",
        "content": [
            {
                "question": {
                    "NL": "NTB",
                    "EN": "Are you required to follow standardization bodies?"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "As the scrutiny of the new schemes is ongoing, some schemes are ready or almost ready for standardization. Different standardization bodies may choose different schemes for standardization and with different timelines. In case your application follows specific standardization bodies, for example because you are mandated by the government, it is important to note it when selecting the most suitable algorithm."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "NIST"
                        },
                        "scores": {
                            "Kyber": 5,
                            "FrodoKEM": 1,
                            "Classic McEliece": 3,
                            "HQC": 3,
                            "BIKE": 3,
                            "Dilithium": 5,
                            "Falcon": 3,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "ISO"
                        },
                        "scores": {
                            "Kyber": 2,
                            "FrodoKEM": 2,
                            "Classic McEliece": 2,
                            "Dilithium": 0,
                            "Falcon": 0,
                            "Sphincs+": 0,
                            "XMSS": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "IETF"
                        },
                        "scores": {
                            "Kyber": 3,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "Dilithium": 2,
                            "Falcon": 0,
                            "Sphincs+": 1,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "<None selected>"
                        },
                        "scores": {
                            "Kyber": 5,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "Dilithium": 5,
                            "Falcon": 3,
                            "Sphincs+": 4,
                            "XMSS": 4
                        }
                    }
                ],
                "max_selectable_answers": 4
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "On what kind of platform will you use the cryptographic operations?"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "The availability of cryptographic schemes for a large number of applications is tied to the hardware in which they operate. Some larger implementations may not fit the desired platform."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Laptop (or higher performance)"
                        },
                        "scores": {
                            "Kyber": 5,
                            "FrodoKEM": 5,
                            "Classic McEliece": 5,
                            "HQC": 5,
                            "BIKE": 5,
                            "Dilithium": 5,
                            "Falcon": 5,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Smart phone"
                        },
                        "scores": {
                            "Kyber": 5,
                            "FrodoKEM": 5,
                            "Classic McEliece": 5,
                            "HQC": 5,
                            "BIKE": 5,
                            "Dilithium": 5,
                            "Falcon": 5,
                            "Sphincs+": 5,
                            "XMSS": 4
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "IoT device"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "HQC": 4,
                            "BIKE": 4,
                            "Dilithium": 4,
                            "Falcon": 3,
                            "Sphincs+": 4,
                            "XMSS": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Smart card"
                        },
                        "scores": {
                            "Kyber": 3,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 1,
                            "Dilithium": 3,
                            "Falcon": 3,
                            "Sphincs+": 0,
                            "XMSS": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Sensors"
                        },
                        "scores": {
                            "Kyber": 2,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 1,
                            "BIKE": 0,
                            "Dilithium": 2,
                            "Falcon": 3,
                            "Sphincs+": 1,
                            "XMSS": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "<None selected>"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "Dilithium": 5,
                            "Falcon": 5,
                            "Sphincs+": 2,
                            "XMSS": 0
                        }
                    }
                ],
                "max_selectable_answers": 6
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "My use case can afford to use new hardware"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "For hardware applications, it can occur that the hardware cannot be replaced or updated. Some schemes can be re-designed to accommodate pre-existing hardware, but it is possible that new hardware may be required to execute the operation of the new post-quantum algorithms."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely agree"
                        },
                        "scores": {
                            "Kyber": 5,
                            "FrodoKEM": 5,
                            "Classic McEliece": 5,
                            "HQC": 5,
                            "BIKE": 5,
                            "Dilithium": 5,
                            "Falcon": 5,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Agree"
                        },
                        "scores": {
                            "Kyber": 5,
                            "FrodoKEM": 4,
                            "Classic McEliece": 4,
                            "Dilithium": 5,
                            "Falcon": 5,
                            "Sphincs+": 4,
                            "XMSS": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "Dilithium": 4,
                            "Falcon": 4,
                            "Sphincs+": 3,
                            "XMSS": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "Dilithium": 3,
                            "Falcon": 3,
                            "Sphincs+": 2,
                            "XMSS": 1
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "Kyber": 3,
                            "FrodoKEM": 2,
                            "Classic McEliece": 2,
                            "Dilithium": 2,
                            "Falcon": 2,
                            "Sphincs+": 1,
                            "XMSS": 1
                        }
                    }
                ],
                "max_selectable_answers": 5
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "My device supports hardware accelerators"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "The performance of post-quantum schemes in hardware can be improved if paired with cryptographic accelerators."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Hash function calls"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 4,
                            "Classic McEliece": 4,
                            "Dilithium": 3,
                            "Falcon": 3,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Polynomial operations"
                        },
                        "scores": {
                            "Kyber": 5,
                            "FrodoKEM": 4,
                            "Classic McEliece": 4,
                            "Dilithium": 4,
                            "Falcon": 4,
                            "Sphincs+": 0,
                            "XMSS": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "<None selected>"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 3,
                            "Classic McEliece": 3,
                            "Dilithium": 3,
                            "Falcon": 3,
                            "Sphincs+": 1,
                            "XMSS": 1
                        }
                    }
                ],
                "max_selectable_answers": 3
            }
        ]
    },
    {
        "category": "Category 5 - Storage",
        "content": [
            {
                "question": {
                    "NL": "NTB",
                    "EN": "My device supports floating point arithmetic"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "Some cryptographic schemes actually require support for floating point arithmetic to enable a secure implementation."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Yes"
                        },
                        "scores": {
                            "Dilithium": 3,
                            "Falcon": 5,
                            "Sphincs+": 3,
                            "XMSS": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "No"
                        },
                        "scores": {
                            "Dilithium": 3,
                            "Falcon": 0,
                            "Sphincs+": 3,
                            "XMSS": 3
                        }
                    }
                ],
                "max_selectable_answers": 2
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "My use case can afford larger cryptographic keys and ciphertexts/signatures than currently used"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "The design of the new cryptographic schemes often makes them slower than the currently deployed cryptographic schemes like RSA and ECC and will use larger cryptographic keys. The new schemes may become a bottleneck for the application, both in resources and time. The application will have to handle larger cryptographic keys which have to be stored."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely agree"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_size - )"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Agree"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_size - 1)"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_size - 2)"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_size - 3)"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_size - 4)"
                        }
                    }
                ],
                "max_selectable_answers": 5
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "Can your application afford more RAM usage?"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "<Not written>"
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Less than 10 kB"
                        },
                        "scores": {
                            "Kyber": "0.05 * (5-avg_size) + avg_size"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "10 - 50 kB"
                        },
                        "scores": {
                            "Kyber": "0.25 * (5-avg_size) + avg_size"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "50 - 100 kB"
                        },
                        "scores": {
                            "Kyber": "0.75 * (5-avg_size) + avg_size"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "More than 100 kB"
                        },
                        "scores": {
                            "Kyber": "2.00 * (5-avg_size) + avg_size"
                        }
                    }
                ],
                "max_selectable_answers": 4
            }
        ]
    },
    {
        "category": "Category 6 - Communication",
        "content": [
            {
                "question": {
                    "NL": "NTB",
                    "EN": "Can your application afford additional long-term storage?"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "<Not written>"
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Less than 10 kB"
                        },
                        "scores": {
                            "Kyber": "0.05 * (5-avg_no_ct) + avg_no_ct"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "10 - 50 kB"
                        },
                        "scores": {
                            "Kyber": "0.25 * (5-avg_no_ct) + avg_no_ct"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "50 - 100 kB"
                        },
                        "scores": {
                            "Kyber": "0.75 * (5-avg_no_ct) + avg_no_ct"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "More than 100 kB"
                        },
                        "scores": {
                            "Kyber": "2.00 * (5-avg_no_ct) + avg_no_ct"
                        }
                    }
                ],
                "max_selectable_answers": 4
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "My use case can afford larger ciphertexts/signatures than currently used"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "The design of the new cryptographic schemes often makes them slower than the currently deployed cryptographic schemes like RSA and ECC and will use larger cryptographic keys. The new schemes may become a bottleneck for the application, both in resources and time. The application will have to handle larger cryptographic ciphertexts/signatures which have to be transmitted."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely agree"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_size - )"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Agree"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_size - 1)"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_size - 2)"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_size - 3)"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "Kyber": "max(0, avg_size - 4)"
                        }
                    }
                ],
                "max_selectable_answers": 5
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "Can your application afford additional communication cost (in bandwidth)?"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "<Not written>"
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Less than 10 kB"
                        },
                        "scores": {
                            "Kyber": "0.05 * (5-avg_no_sk) + avg_no_sk"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "10 - 50 kB"
                        },
                        "scores": {
                            "Kyber": "0.25 * (5-avg_no_sk) + avg_no_sk"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "50 - 100 kB"
                        },
                        "scores": {
                            "Kyber": "0.75 * (5-avg_no_sk) + avg_no_sk"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "More than 100 kB"
                        },
                        "scores": {
                            "Kyber": "2.00 * (5-avg_no_sk) + avg_no_sk"
                        }
                    }
                ],
                "max_selectable_answers": 4
            }
        ]
    },
    {
        "category": "Category 7 - Attacks",
        "content": [
            {
                "question": {
                    "NL": "NTB",
                    "EN": "Can your use case afford additional communication cost (in time)?"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "<Not written>"
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Less than 100 ms"
                        },
                        "scores": {
                            "Kyber": "0.05 * (5-avg_no_sk) + avg_no_sk"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "100 - 500 ms"
                        },
                        "scores": {
                            "Kyber": "0.25 * (5-avg_no_sk) + avg_no_sk"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "500 - 1000 ms"
                        },
                        "scores": {
                            "Kyber": "0.75 * (5-avg_no_sk) + avg_no_sk"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "More than 1000 ms"
                        },
                        "scores": {
                            "Kyber": "2.00 * (5-avg_no_sk) + avg_no_sk"
                        }
                    }
                ],
                "max_selectable_answers": 4
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "Do you need to mitigate the risk of attackers potentially getting physical access to the device?"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "Some schemes are easier to protect against side-channel attacks than others. In a side-channel attack, the attacker makes use of physical properties of a computation (power usage, fluctuations in computation time) to recover partial information on the secret. However, most of these attacks are only a concern when the attacker has a means to physically analyse the device in your application. The fact that an attacker has a means to access the device running the cryptographic operations is not by itself a security concern. However, it may be critical for your application to make sure that the secret key is not leaked by the device."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Yes"
                        },
                        "scores": {
                            "Dilithium": 5,
                            "Falcon": 1,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "No"
                        },
                        "scores": {
                            "Dilithium": 0,
                            "Falcon": 0,
                            "Sphincs+": 0,
                            "XMSS": 0
                        }
                    }
                ],
                "max_selectable_answers": 2
            }
        ]
    },
    {
        "category": "Category 8 - Statefulness",
        "content": [
            {
                "question": {
                    "NL": "NTB",
                    "EN": "What functionality do you need to protect?"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "The design of the operations for some cryptographic schemes makes it hard to implement side-channel countermeasures for some of their functionalities. It is therefore helpful to understand which operations in your application need to be fortified."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Key Generation"
                        },
                        "scores": {
                            "Dilithium": 5,
                            "Falcon": 1,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Signing"
                        },
                        "scores": {
                            "Dilithium": 5,
                            "Falcon": 1,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Verification"
                        },
                        "scores": {
                            "Dilithium": 5,
                            "Falcon": 5,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "<None selected>"
                        },
                        "scores": {
                            "Dilithium": 5,
                            "Falcon": 1,
                            "Sphincs+": 5,
                            "XMSS": 5
                        }
                    }
                ],
                "max_selectable_answers": 4
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "My use case requires only a limited number of signatures, and is able to securely handle the cryptographic state"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "A specific class of signature schemes, known as stateful hash-based signature schemes, combines high security guarantees with better efficiency than its stateless counterpart. The limitation in this case, is that the scheme can only sign a limited amount of messages (typically between 2^10\u00a0and 2^20\u00a0signatures) and it requires a different key for every signature. Applications like secure booting are ideal for these schemes, but in general it is hard to adopt stateful hash-based schemes due to the difficulty in handling the signing keys."
                },
                "additional_information": {
                    "NL": "NTB",
                    "EN": "TBD"
                },
                "answers": [
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Yes"
                        },
                        "scores": {
                            "Dilithium": "-",
                            "Falcon": "-",
                            "Sphincs+": "-",
                            "XMSS": "flag = 1"
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "No"
                        },
                        "scores": {
                            "Dilithium": "-",
                            "Falcon": "-",
                            "Sphincs+": "-",
                            "XMSS": "flag = 0"
                        }
                    }
                ],
                "max_selectable_answers": 2
            }
        ]
    }
]