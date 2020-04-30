### Authors
[Emma-Maria Thalen](https://github.com/emtalen)  
[Philip Gaunitz](https://github.com/pgauntiz)  
[Carlos Delgado](https://github.com/Carltesio)  
[Janko Radakovic](https://github.com/MadFarmer101)  
[Lautaro Parra](https://github.com/dernathul) 

## Built with
**Front End:** React v.16.12.0 | CSS  
**Testing framework:** Cypress  
**Deployed at:** [Netlify](https://themarstimes.netlify.com/).

[![Build Status](https://semaphoreci.com/api/v1/carltesio/newsroom_3_client_user/branches/development/badge.svg)](https://semaphoreci.com/carltesio/newsroom_3_client_user)

## The code   
This project is the visitor interface of the Newspaper Mars Times. Here the visitor can read free articles or sign up and buy a subsciption to aslo read premium articles. 
The articles have been created and published from our Admin interface and are stored in our API.  
The master repository for the admin interface, mobile app and API can be found here:
* [API](https://github.com/CraftAcademy/newsroom_3_api.git)
* [Admin](https://github.com/CraftAcademy/newsroom_3_client_admin.git)
* [Mobile](https://github.com/CraftAcademy/newsroom_3_mobile_app.git)

## Getting started
### Dependencies  
* Yarn
* React
* Cypress
* Axios
* Semantic-ui-react / Semantic-ui-css
* React-images-uploading
* React-redux
* Redux
* Redux-thunk
* J-tockauth
* React-i18next
* React-stripe-elements

### Setup   
To test this application, fork the repo to your own GitHub account and clone it to your local workspace. </br>
*Note:**Note:*All our clients are running on our deployed API, even when they are being used on a local server. 
Install all of the dependencies:    
```
$ yarn install
```  
Start cypress and run the feature tests:  
```
$ yarn run cy:open
```
Start the React application and run it on your local host:
```
$ yarn start
```

### Login credentials
- Regular user: email: user@mail.com password: password
- Subscriber: email: subscriber@mail.com password: password

## Updates/Improvements   
- That the user can choose between different subsciption plans
- That the user signs up and an account is being created while buying a subsciption
- Add more personal features, such as a profile page 
- Create functionality to comment and rate on articles

## License  
[MIT-license](https://en.wikipedia.org/wiki/MIT_License)

### Acknowledgement  
- Material provided by [Craft Academy](https://craftacademy.se)
- [Oliver Ochman](https://github.com/oliverochman/) for helping us understanding how to send credentials with the headers for request to the API.
- [Thomas Ochman](https://github.com/tochman/) for helping us implement with Stripe. 
- [Faraz Naeem](https://github.com/faraznaeem) for demonstrating a tough client and pushing us forward
- Big thanks to the others students in our cohort at Craft Academy. We have been stealing some of your code shamelessly, you have been great rubber ducks and our team internal competition in highest coverage has really helped us implement better skills in RSpec.  
