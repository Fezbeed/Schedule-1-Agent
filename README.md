# ⚠️ BETA Version ⚠️
Schedule-1-Agent is a small Client-Based recipe optimizer (Not calculator)
## Features
- Find best profit for different client taste, Ex. Austin Steiner >> Calorie-Dense, Euphoric, Munchies
- Based on Shibka's Calculator (https://schedule1-calculator.online)
- Open Source (feel free to fork this)
## Installation
```sh
node ogkush.js
```
Edit `available_ingredients`, `target_client`, `base_material`, `step_limit` as you see fit.
```sh
const target_client = "George Greene";
const base_material = "OG Kush";
const step_limit = 4; // Use Ctrl + C to cancel if it takes too long!
const unwanted_effects = ["Gingeritis"];
```
## Example Output
```sh
Valid combinations: [
  {
    "combination": [
      "Donut",
      "Paracetamol",
      "Cuke",
      "Banana"
    ],
    "effects": {
      "displayNames": [
        "Munchies",
        "Calorie-Dense",
        "Jennerising",
        "Thought-Provoking",
        "Gingeritis"
      ],
      "sellPrice": 86,
      "substanceCost": 10,
      "profit": 76
    },
    "matchedEffects": [
      "Calorie-Dense",
      "Munchies"
    ],
    "matchCount": 2
  },
  {
    "combination": [
      "Donut",
      "Paracetamol",
      "Banana",
      "Cuke"
    ],
    "effects": {
      "displayNames": [
        "Munchies",
        "Calorie-Dense",
        "Paranoia",
        "Thought-Provoking",
        "Energizing"
      ],
      "sellPrice": 72,
      "substanceCost": 10,
      "profit": 62
    },
    "matchedEffects": [
      "Calorie-Dense",
      "Munchies"
    ],
    "matchCount": 2
  }
]
```
## Disclaimer
This is my first time using git and js. My english is not good. All the credits go to the original author.
