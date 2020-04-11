### Standalone Redux

#### Setup

```
npm install
```

#### All in One

Puts all plumbing into one file and performs some state transitions

```
node stores/1_all_in_one/store.js
```

#### Creates File per intent

Exports only the required stuff from each file

```
node stores/2_structured_modules/app.js
```

#### Async

Integrates with Todo Service and uses redux-thunk middleware to handle async calls

```
node stores/3_async/app.jss
```
