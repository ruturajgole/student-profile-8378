# Student Profile 8378

This app was created according to the instructions mentioned in the Frontend Assessment document (https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/instructions/f-5/Front-end%20Assessment%20-%20Student%20Profiles-JHM57Z6TS8X37B28KVW0.pdf).

## Framework

The app is built using React.js with Typescript. The only third party package used is 'futura' (https://www.npmjs.com/package/futura) created by Ali Sabil. All other packages were created through the 'create-react-app' command. 

## Structure

The app implements a finite state machine. The source code is located in the 'src' directory. All views are defined in the 'view' directory and the common UI elements are in the 'lib' directory. All states are located in the 'state' directory, and maintain the state of the app. All server calls and their response/request models are located in the 'services' directory. 

## Flow

All events dispatched through the view are an update message to generate a new state. The events and the next possible states are predetermined in a finite state machine. Some components may have their own locally defined state, but I generally avoid that. The state can makes service requests for generating a new state. A stack of views is maintained with their corresponding states. The typesafety of Typescript and the clogs of the state machine make it easier to develop and debug the application.

## Potential Improvements

Subscriptions can keep the app updated with the hatchways server. Any changes made to the database should immediately be reflected in the app. 