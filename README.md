# Hatch Engineering Technical Test 🛠


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
7. Even though the task suggested forking, it was not enable for me on Github, so I had to create a branch and will send a pull request instead.
8. Let me know if you have any other questions.

## Purpose

Hi and welcome to the Hatch Engineering technical test. The purpose of this task is to get a sense for your technical ability and how you work with tools that are similar to what we use here at Hatch. Good luck!

## The Problem

At Hatch we use data science to automatically match students to professional roles. We always want the student to keep their personal information up-to-date, especially their availability. As we only want to be showing roles to available students and available students to hiring managers 

## The Task

In order to solve this problem we want to provide Students with the ability to edit their profile (API provided) , make it easy for them to see their availability status throughout the site and to let them easily toggle their availability on or off from where ever they are in the site.

Don't worry if you feel as though some of this task is vague, it's been written that way intentionally so that you have the freedom to approach the task however you want. 

Fork this project to a private repository, or start from scratch if you prefer and create a working React app that solves the problem as described above.

### API

The API you'll need to complete this task is located at: https://26bgca2i61.execute-api.us-east-1.amazonaws.com/dev

The API is a simple one that allows you to get a student object and update it. 

### Authentication

To authenticate with the API you'll need to set an `Authorization` header on all requests and pass the key you will have been given as the value. This key identifies a single student (you).

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

### Libraries & Frameworks

You are free to use whatever libraries and frameworks alongside React that will help you accomplish the task.

### Design & Styling

Refer to https://www.hatch.team/design to get an idea of some of the components we use in our Design Language. Use our Design Language to pull out styles (colours, font sizes, etc). Don't worry too much about getting all our colours and spacing exactly right, the way you structure your styles is much more important!

### Tips
 - Treat this like it was production code.
 - Commit regularly.

### Submitting

Please submit your work by sharing your *private* repository with us on Github, Bitbucket or similiar.
- GitHub Users: @thejuan @samturner
- Bitbucket Users: AdamMills samturner23

### Help!

Having questions is normal! Feel free to reach out to us at engineering@hatch.team if you have any questions, we'll do our best to get back to you ASAP!
