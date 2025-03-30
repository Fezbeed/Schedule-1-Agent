# ⚠️ BETA Version ⚠️
Schedule-I-Agent is a small Client-Based recipe optimizer (Not calculator)
## Features
- Find best profit for differnt client taste, Ex. Munchies
- Based on Shibka's Calculator (https://schedule1-calculator.online)
- Open Source (feel free to fork this)
## Installation
```sh
node ogkush.js
```
Edit `available_ingredients`, `target_client`, `base_material`, `step_limit` as you see fit.
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
This is my first time using git and js. My english is not good. All the credits go to original author.
