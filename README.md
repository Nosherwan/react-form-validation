# Hatch Engineering Technical Test 🛠

## Purpose

Hi and welcome to the Hatch Engineering technical test. The purpose of this task is to get a sense for your technical ability and how you work with tools that are similar to what we use here at Hatch. Good luck!

## The Problem

At Hatch we use data science to automatically match students to professional roles. We always want the student to keep their availability up-to-date. As we only want to be showing roles to available students and available students to hiring managers 

## The Task

In order to solve this problem we want to provide Students with the ability to edit their profile (API provided) , make it easy for them to see their availability status throughout the site and to let them easily toggle their availability on or off from where ever they are in the site.

Don't worry if you feel as though some of this task is vague, it's been written that way intentionally so that you have the freedom to approach the task however you want. 

Fork this project to a private repository, or start from scratch if you prefer and create a working React app that solves the problem as described above.

### API

The API you'll need to complete this task is located at: https://26bgca2i61.execute-api.us-east-1.amazonaws.com/dev

The API is a simple one that allows you to get a student object and update it. 

### Authentication

To authenticate with the API you'll need to set an `authtoken` header on all requests and pass the key you will have been given as the value. This key identifies a single student (you).

### Endpoints

* **GET /student** - Returns the currently authenticated student.
* **PATCH /student** - Updates the currently authenticated student.

```
{
    firstName: "Test",
    lastName: "Name",
    email: "test@hatch.team",
    availability: true
}
```

### Libraries & Frameworks

You are free to use whatever libraries and frameworks alongside React that will help you accomplish the task.

### Submitting

Please submit your work by sharing your *private* repository with us on Github, Bitbucket or similiar.
- GitHub Users: @thejuan @samturner
- Bitbucket Users: AdamMills samturner23

### Help!

Having questions is normal! Feel free to reach out to us at engineering@hatch.team if you have any questions, we'll do our best to get back to you ASAP!
