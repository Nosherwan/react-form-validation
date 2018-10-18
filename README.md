# Form validation using React.js, Redux & local storage 🛠


## Instructions

Please follow these instructions to install and test the solution.

1. `yarn install` to install all the packages & dependencies.
2. `yarn start` to start the application that is servered on localhost:8081.
3. the token is copied in source which is a bad practice but unfortunatley as there is no proper authentication method there is no other way to pass it to the API layer.

## Assumptions

1. To spend reasonable amount of time I only did minimum styling.
2. API layer is my own code around whatwg-fetch module so dont mind that.
3. I use typescript but again to save time I have used `any` type alot, not a good practice.
4. I could have used a form validation library but in alot of the projects I do teams consider them bloated and end up using custom form validation library or code. The code I have used here is what I have used in the past, it is minimal form validation with smaller field validation components its much more practical, however may not be enough for a form heavy applicaiton.
5. I have not catered for alot of cases such as request failures due to lack of time.
6. For local storage I have used a standard way of storing the whole redux store in local storage, Dan Abramov approved way of doing it.

## The Task

Provide users with the ability to edit their profile (API provided) , make it easy for them to see their availability status throughout the site and to let them easily toggle their availability on or off from where ever they are in the site.


### Endpoints

* **GET /student** - Returns the currently authenticated student.
* **PATCH /student** - Updates the currently authenticated student.

```
{
    firstName: "Test",
    lastName: "Name",
    email: "test@hatch.team",
    available: true
}
```
