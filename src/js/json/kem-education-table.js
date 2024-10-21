export default {
    "Information Security": {
        "BIKE": {
            "NL": "ntb",
            "EN": "Based on quasi-cyclic moderate density parity-check (code-based)"
        },
        "Classic McEliece": {
            "NL": "ntb",
            "EN": "Based on the decoding of Goppa codes (code-based)"
        },
        "FrodoKEM": {
            "NL": "ntb",
            "EN": "Based on the learning with errors problem (lattice-based)"
        },
        "HQC": {
            "NL": "ntb",
            "EN": "Based on the Syndrome Decoding problem (code-based)"
        },
        "ML-KEM": {
            "NL": "ntb",
            "EN": "Based on the module learning with errors problem (lattice-based)"
        }
    },
    "Maturity": {
        "BIKE": {
            "NL": "ntb",
            "EN": "Published in 2018"
        },
        "Classic McEliece": {
            "NL": "ntb",
            "EN": "Most mature algorithm, in use for over 40 years"
        },
        "FrodoKEM": {
            "NL": "ntb",
            "EN": "Published in 2016"
        },
        "HQC": {
            "NL": "ntb",
            "EN": "Published in 2017"
        },
        "ML-KEM": {
            "NL": "ntb",
            "EN": "Published in 2017"
        }
    },
    "Standardisation": {
        "BIKE": {
            "NL": "ntb",
            "EN": "tbd (Has been selected for NIST standardization round 4)"
        },
        "Classic McEliece": {
            "NL": "ntb",
            "EN": "tbd (Has been selected for NIST standardization round 4)"
        },
        "FrodoKEM": {
            "NL": "ntb",
            "EN": "Selected as an alternate candidate by NIST, but not selected for standardization"
        },
        "HQC": {
            "NL": "ntb",
            "EN": "tbd (Has been selected for NIST standardization round 4)"
        },
        "ML-KEM": {
            "NL": "ntb",
            "EN": "Won NIST's six-year long competition and was selected as its main standard in 2024"
        }
    },
    "Hardware": {
        "BIKE": {
            "NL": "ntb",
            "EN": "Integrated in VHDL for Xilinx FPGA"
        },
        "Classic McEliece": {
            "NL": "ntb",
            "EN": "Integrated in ARM Cortex M4, FPGA"
        },
        "FrodoKEM": {
            "NL": "ntb",
            "EN": "Integrated in ARM Cortex M4, Xilinx Artix-7, ASIC, RISC-V"
        },
        "HQC": {
            "NL": "ntb",
            "EN": "Integrated in Xilinx Artix-7 FPGA"
        },
        "ML-KEM": {
            "NL": "ntb",
            "EN": "Integrated in ARM Cortex A, M53, M4(F), M0+; FPGA, ASIC, SLE 78, RISC-V"
        }
    },
    "Storage": {
        "BIKE": {
            "NL": "ntb",
            "EN": "Small keys, fairly small ciphertexts"
        },
        "Classic McEliece": {
            "NL": "ntb",
            "EN": "Extremely large public keys, but smallest ciphertexts"
        },
        "FrodoKEM": {
            "NL": "ntb",
            "EN": "Very large ciphertexts, relatively large keys"
        },
        "HQC": {
            "NL": "ntb",
            "EN": "Small keys, but large ciphertexts"
        },
        "ML-KEM": {
            "NL": "ntb",
            "EN": "Very small keys, relatively small ciphertexts"
        }
    },
    "Communication/performance": {
        "BIKE": {
            "NL": "ntb",
            "EN": "Fairly fast key generation, very fast encryption but slower decryption"
        },
        "Classic McEliece": {
            "NL": "ntb",
            "EN": "Extremely slow key generation, but very fast encryption and decryption"
        },
        "FrodoKEM": {
            "NL": "ntb",
            "EN": "Very slow encryption, relatively slow decryption and key generation"
        },
        "HQC": {
            "NL": "ntb",
            "EN": "Very fast key generation, also fast encryption and decryption"
        },
        "ML-KEM": {
            "NL": "ntb",
            "EN": "Fastest key generation, encryption and decryption"
        }
    },
    "Side channel attacks": {
        "BIKE": {
            "NL": "ntb",
            "EN": "tbd"
        },
        "Classic McEliece": {
            "NL": "ntb",
            "EN": "tbd"
        },
        "FrodoKEM": {
            "NL": "ntb",
            "EN": "tbd"
        },
        "HQC": {
            "NL": "ntb",
            "EN": "tbd"
        },
        "ML-KEM": {
            "NL": "ntb",
            "EN": "tbd"
        }
    }
}