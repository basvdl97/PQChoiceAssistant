export default {
    "Information Security": {
        "Dilithium": {
            "NL": "ntb",
            "EN": "Based on the learning with errors and short integer solution problems (lattice-based)"
        },
        "Falcon": {
            "NL": "ntb",
            "EN": "Based on the NTRU shortest vector problem (lattice-based)"
        },
        "SPHINCS+": {
            "NL": "ntb",
            "EN": "Based on collision and preimage resistance (hash-based)"
        },
        "XMSS": {
            "NL": "ntb",
            "EN": "Based on collision and preimage resistance (hash-based)"
        }
    },
    "Maturity": {
        "Dilithium": {
            "NL": "ntb",
            "EN": "Published in 2017"
        },
        "Falcon": {
            "NL": "ntb",
            "EN": "Published in 2017"
        },
        "SPHINCS+": {
            "NL": "ntb",
            "EN": "Published in 2017, three years after original SPHINCS"
        },
        "XMSS": {
            "NL": "ntb",
            "EN": "Published in 2011"
        }
    },
    "Standardisation": {
        "Dilithium": {
            "NL": "ntb",
            "EN": "One of the winners of NIST's six-year long competition, was released as a standard in 2024 as FIPS 204"
        },
        "Falcon": {
            "NL": "ntb",
            "EN": "One of the winners of NIST's six-year long competition, is slated to be released as a standard"
        },
        "SPHINCS+": {
            "NL": "ntb",
            "EN": "One of the winners of NIST's six-year long competition, was released as a standard in 2024 as FIPS 205"
        },
        "XMSS": {
            "NL": "ntb",
            "EN": "Not selected by NIST, but is specified in IETF RFC 8391"
        }
    },
    "Hardware": {
        "Dilithium": {
            "NL": "ntb",
            "EN": "Integrated in Intel i5, ARM Cortex, AMD EPYC7452, Xilinx Artix-7, Virtex FPGA, RISC-V"
        },
        "Falcon": {
            "NL": "ntb",
            "EN": "Integrated in Intel i5/i7, ARM Cortex A53, AMD EPYC7452, RTX 2080, Virtex FPGA, RISC-V"
        },
        "SPHINCS+": {
            "NL": "ntb",
            "EN": "Integrated in Ibex, Intel i5, ARM Cortex, AMD EPYC7452, Snapdragon 865"
        },
        "XMSS": {
            "NL": "ntb",
            "EN": "Integrated in Ibex, Intel i5, ARM Cortex, AMD EPYC7452, Java Card"
        }
    },
    "Storage": {
        "Dilithium": {
            "NL": "ntb",
            "EN": "Large keys, average signatures"
        },
        "Falcon": {
            "NL": "ntb",
            "EN": "Small signatures, average key sizes"
        },
        "SPHINCS+": {
            "NL": "ntb",
            "EN": "Extremely small keys, but extremely large signatures"
        },
        "XMSS": {
            "NL": "ntb",
            "EN": "Very small public keys, average private keys and signatures"
        }
    },
    "Communication/performance": {
        "Dilithium": {
            "NL": "ntb",
            "EN": "Extremely fast key generation, encryption and decryption"
        },
        "Falcon": {
            "NL": "ntb",
            "EN": "Very slow key generation, average encryption, very fast decryption"
        },
        "SPHINCS+": {
            "NL": "ntb",
            "EN": "Average key generation, slow decryption and extremely slow encryption"
        },
        "XMSS": {
            "NL": "ntb",
            "EN": "??"
        }
    },
    "Side channel attacks": {
        "Dilithium": {
            "NL": "ntb",
            "EN": "Fairly resistant"
        },
        "Falcon": {
            "NL": "ntb",
            "EN": "Use of floating points and discrete sampling make side-channel resistance very challenging"
        },
        "SPHINCS+": {
            "NL": "ntb",
            "EN": "Fairly resistant"
        },
        "XMSS": {
            "NL": "ntb",
            "EN": "A weak source of randomness is very susceptible to power analysis attacks"
        }
    },
    "Statefulness": {
        "Dilithium": {
            "NL": "ntb",
            "EN": "Stateless"
        },
        "Falcon": {
            "NL": "ntb",
            "EN": "Stateless"
        },
        "SPHINCS+": {
            "NL": "ntb",
            "EN": "Stateless"
        },
        "XMSS": {
            "NL": "ntb",
            "EN": "Stateful, implementations must take great care preventing one-time-key reusage"
        }
    }
}