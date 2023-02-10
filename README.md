# -urbanos-fake-data

Firebase Cloud Functions to generate fake data for the purpose of demoing "UrbanOS"

From `/functions`

- `npm run build` tsc confirmation
- `npm run serve` emulate firebase functions locally
  - need to re run when src code changes (unless src code has no errors?)
- `npm run deploy` deploy functions
  - Might need `npm install -g firebase-tools` first if "Failed to fetch Run service undefined"
  - Deploying takes 5 minutes
