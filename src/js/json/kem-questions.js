export const questions = [
    {
        "category": "Category 1 - Information Security",
        "content": [
            {
                "question": {
                    "NL": "NTB",
                    "EN": "For how many years does the data you are protecting have to stay secure?"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "If your organization is dealing with information that should remain secure for an extended period of time, it may be beneficial to invest in a more conservative post-quantum cryptographic scheme. This ensures that you minimize the chance of the scheme being vulnerable in the future and thus increasing the assurance that the data will remain secure for its entire lifespan."
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
                            "Classic McEliece": 5
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
                            "Classic McEliece": 5
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
                            "Classic McEliece": 5
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
                            "Classic McEliece": 5
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
                            "Classic McEliece": 5
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
                            "Classic McEliece": 5
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
                            "Classic McEliece": 3
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
                            "BIKE": "BIKE-1"
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
                            "BIKE": "BIKE-2"
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
                            "BIKE": "BIKE-3"
                        }
                    }
                ],
                "max_selectable_answers": 3
            },
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
                            "HQC": 3,
                            "BIKE": 3
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
                            "HQC": 3,
                            "BIKE": 3
                        }
                    }
                ],
                "max_selectable_answers": 2
            }
        ]
    },
    {
        "category": "Category 2 - Performance vs Security",
        "content": [
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
                            "BIKE": 3
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
                            "BIKE": 2
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
                            "BIKE": 1
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
                            "BIKE": 0
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
                            "BIKE": 0
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
                            "Kyber": 0,
                            "FrodoKEM": 4,
                            "Classic McEliece": 5,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Agree"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 4,
                            "Classic McEliece": 4,
                            "HQC": 0,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 3
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
                            "BIKE": 2
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
                            "BIKE": 2
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
                    "EN": "It is the case that the most mature PQC algorithms are also the most inefficient. Even though there is no indication at all that any PQC algorithm can be broken, these more mature algorithms have withstood attacks for longer and are somewhat more trusted by some. This then presents a tradeoff between more conservative options and more efficients ones."
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
                            "HQC": 4,
                            "BIKE": 4
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
                            "HQC": 3,
                            "BIKE": 3
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
                            "BIKE": 0
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
                            "HQC": 0,
                            "BIKE": 0
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
                            "HQC": 0,
                            "BIKE": 0
                        }
                    }
                ],
                "max_selectable_answers": 5
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "Can your use case afford additional computational time?"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "If your application has no strict time constraints in key generation, encryption and decryption it can make sense to go for a less efficient algorithm for the benefit of more maturity."
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
                            "Kyber": 5,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 4,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "100 - 500 ms"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "500 - 1000 ms"
                        },
                        "scores": {
                            "Kyber": 1,
                            "FrodoKEM": 3,
                            "Classic McEliece": 0,
                            "HQC": 1,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "More than 1000 ms"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 1,
                            "Classic McEliece": 5,
                            "HQC": 1,
                            "BIKE": 1
                        }
                    }
                ],
                "max_selectable_answers": 4
            }
        ]
    },
    {
        "category": "Category 3 - Standardisation",
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
                            "HQC": 2,
                            "BIKE": 2
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
                            "HQC": 2,
                            "BIKE": 2
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
                            "HQC": 0,
                            "BIKE": 0
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
                            "HQC": 3,
                            "BIKE": 3
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
                            "BIKE": 5
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
                            "BIKE": 5
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
                            "BIKE": 4
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
                            "BIKE": 1
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
                            "BIKE": 0
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
                            "HQC": 4,
                            "BIKE": 3
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
                            "BIKE": 5
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
                            "HQC": 4,
                            "BIKE": 4
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
                            "HQC": 3,
                            "BIKE": 3
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
                            "HQC": 3,
                            "BIKE": 3
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
                            "HQC": 2,
                            "BIKE": 2
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
                            "HQC": 3,
                            "BIKE": 3
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
                            "HQC": 3,
                            "BIKE": 4
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
                            "HQC": 3,
                            "BIKE": 3
                        }
                    }
                ],
                "max_selectable_answers": 3
            },
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
                        "scores": {}
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "No"
                        },
                        "scores": {}
                    }
                ],
                "max_selectable_answers": 2
            }
        ]
    },
    {
        "category": "Category 5 - Storage",
        "content": [
            {
                "question": {
                    "NL": "NTB",
                    "EN": "My use case can afford larger cryptographic keys and ciphertexts than currently used"
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
                            "Kyber": 0,
                            "FrodoKEM": 2,
                            "Classic McEliece": 5,
                            "HQC": 0,
                            "BIKE": 0
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
                            "Classic McEliece": 0,
                            "HQC": 1,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "Kyber": 1,
                            "FrodoKEM": 3,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "Kyber": 5,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 4
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
                    "EN": "The ciphertext will generally be much larger than the ones generated by the current algorithms. The public key is also needed while encrypting a message, as well as the private key during decryption Therefore the ciphertext and either of the key need to fit into your device's RAM simultaneously."
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
                            "Kyber": 4,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "10 - 50 kB"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "50 - 100 kB"
                        },
                        "scores": {
                            "Kyber": 1,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "More than 100 kB"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "HQC": 1,
                            "BIKE": 0
                        }
                    }
                ],
                "max_selectable_answers": 4
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "Can your application afford additional long-term storage?"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "The public and private keys generally need to be stored for a longer time, not just for single sessions. These keys are significantly larger than those used by the current algorithms, so your device needs to be able to store them."
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
                            "Kyber": 5,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 4,
                            "BIKE": 4
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "10 - 50 kB"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "50 - 100 kB"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 0,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "More than 100 kB"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 1,
                            "Classic McEliece": 5,
                            "HQC": 0,
                            "BIKE": 0
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
                    "EN": "My use case can afford larger ciphertexts than currently used"
                },
                "expert_level": false,
                "description": {
                    "NL": "NTB",
                    "EN": "The design of the new cryptographic schemes often makes them slower than the currently deployed cryptographic schemes like RSA and ECC and will use larger cryptographic keys. The new schemes may become a bottleneck for the application, both in resources and time. The application will have to handle larger cryptographic ciphertexts which have to be transmitted."
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
                            "FrodoKEM": 2,
                            "Classic McEliece": 5,
                            "HQC": 0,
                            "BIKE": 0
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
                            "Classic McEliece": 0,
                            "HQC": 1,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Neutral"
                        },
                        "scores": {
                            "Kyber": 1,
                            "FrodoKEM": 3,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Disagree"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "Completely disagree"
                        },
                        "scores": {
                            "Kyber": 5,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 4
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
                    "EN": "This question is specifically about the communication bandwidth. Some schemes have larger ciphertexts than others, so these will be less suitable if your communication link is constrained on bandwidth."
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
                            "Kyber": 4,
                            "FrodoKEM": 0,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "10 - 50 kB"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "50 - 100 kB"
                        },
                        "scores": {
                            "Kyber": 1,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 2,
                            "BIKE": 2
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "More than 100 kB"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 5,
                            "HQC": 1,
                            "BIKE": 0
                        }
                    }
                ],
                "max_selectable_answers": 4
            },
            {
                "question": {
                    "NL": "NTB",
                    "EN": "Can your use case afford additional communication cost (in time)?"
                },
                "expert_level": true,
                "description": {
                    "NL": "NTB",
                    "EN": "This question is specifically about the communication time complexity. Some schemes have more complex encryption or decryption algorithms, so these will be less suitable if your application has strict timing requirements."
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
                            "Kyber": 5,
                            "FrodoKEM": 1,
                            "Classic McEliece": 0,
                            "HQC": 4,
                            "BIKE": 4
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "100 - 500 ms"
                        },
                        "scores": {
                            "Kyber": 4,
                            "FrodoKEM": 2,
                            "Classic McEliece": 0,
                            "HQC": 3,
                            "BIKE": 3
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "500 - 1000 ms"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 3,
                            "Classic McEliece": 0,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    },
                    {
                        "text": {
                            "NL": "NTB",
                            "EN": "More than 1000 ms"
                        },
                        "scores": {
                            "Kyber": 0,
                            "FrodoKEM": 1,
                            "Classic McEliece": 5,
                            "HQC": 0,
                            "BIKE": 0
                        }
                    }
                ],
                "max_selectable_answers": 4
            }
        ]
    }
]