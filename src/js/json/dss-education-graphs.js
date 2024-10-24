export default {
    "Performance (cycles)": {
        "Level 1": {
            "Key generation": {
                "ML-DSA": 90195,
                "Falcon": 21234790,
                "SLH-DSA": 1834059
            },
            "Signing": {
                "ML-DSA": 236975,
                "Falcon": 888844,
                "SLH-DSA": 43059033
            },
            "Verification": {
                "ML-DSA": 87348,
                "Falcon": 143976,
                "SLH-DSA": 3089112
            }
        },
        "Level 3": {
            "Key generation": {
                "ML-DSA": 153215,
                "Falcon": 63158867,
                "SLH-DSA": 2645011
            },
            "Signing": {
                "ML-DSA": 380755,
                "Falcon": 1800943,
                "SLH-DSA": 68495429
            },
            "Verification": {
                "ML-DSA": 144980,
                "Falcon": 292065,
                "SLH-DSA": 4245286
            }
        },
        "Level 5": {
            "Key generation": {
                "ML-DSA": 247152,
                "Falcon": 63158867,
                "SLH-DSA": 7045754,
                "XMSS": 2409453840
            },
            "Signing": {
                "ML-DSA": 476989,
                "Falcon": 1800943,
                "SLH-DSA": 141425247,
                "XMSS": 16171123
            },
            "Verification": {
                "ML-DSA": 236726,
                "Falcon": 292065,
                "SLH-DSA": 4295129,
                "XMSS": 1770291
            }
        }
    },
    "Size (bytes)": {
        "Level 5": {
            "Private key": {
                "ML-DSA": 4864,
                "Falcon": 2305,
                "SLH-DSA": 128,
                "XMSS": 2573
            },
            "Public key": {
                "ML-DSA": 2592,
                "Falcon": 1793,
                "SLH-DSA": 64,
                "XMSS": 64
            },
            "Signature": {
                "ML-DSA": 4595,
                "Falcon": 1280,
                "SLH-DSA": 49856,
                "XMSS": 2820
            }
        }
    }
}