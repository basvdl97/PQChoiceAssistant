export default {
    "Performance (cycles)": {
        "Level 1": {
            "Key generation": {
                "BIKE": 636580,
                "Classic McEliece": 137345418,
                "FrodoKEM": 3353565,
                "HQC": 104578,
                "ML-KEM": 29523
            },
            "Encryption": {
                "BIKE": 110537,
                "Classic McEliece": 49004,
                "FrodoKEM": 3779649,
                "HQC": 196742,
                "ML-KEM": 37250
            },
            "Decryption": {
                "BIKE": 1750669,
                "Classic McEliece": 119810,
                "FrodoKEM": 3707032,
                "HQC": 359751,
                "ML-KEM": 27018
            }
        },
        "Level 3": {
            "Key generation": {
                "BIKE": 1892240,
                "Classic McEliece": 430364248,
                "FrodoKEM": 6880309,
                "HQC": 244164,
                "ML-KEM": 45796
            },
            "Encryption": {
                "BIKE": 250696,
                "Classic McEliece": 90886,
                "FrodoKEM": 7496346,
                "HQC": 459679,
                "ML-KEM": 54633
            },
            "Decryption": {
                "BIKE": 4312896,
                "Classic McEliece": 232302,
                "FrodoKEM": 7409202,
                "HQC": 745706,
                "ML-KEM": 42180
            }
        },
        "Level 5": {
            "Key generation": {
                "BIKE": 4535035,
                "Classic McEliece": 674012157,
                "FrodoKEM": 12337760,
                "HQC": 446071,
                "ML-KEM": 62056
            },
            "Encryption": {
                "BIKE": 504653,
                "Classic McEliece": 196153,
                "FrodoKEM": 13267931,
                "HQC": 844470,
                "ML-KEM": 74852
            },
            "Decryption": {
                "BIKE": 10382235,
                "Classic McEliece": 273109,
                "FrodoKEM": 13090622,
                "HQC": 1409570,
                "ML-KEM": 59944
            }
        }
    },
    "Size (bytes)": {
        "Level 5": {
            "Private key": {
                "BIKE": 16494,
                "Classic McEliece": 13932,
                "FrodoKEM": 43088,
                "HQC": 8738,
                "ML-KEM": 3168
            },
            "Public key": {
                "BIKE": 5122,
                "Classic McEliece": 1044992,
                "FrodoKEM": 21520,
                "HQC": 8698,
                "ML-KEM": 1568
            },
            "Ciphertext": {
                "BIKE": 5154,
                "Classic McEliece": 208,
                "FrodoKEM": 21696,
                "HQC": 17379,
                "ML-KEM": 1568
            }
        }
    }
}