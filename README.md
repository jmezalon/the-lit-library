# the-lit-libray
### Introduction

This app targets a younger crowd: Young people, students and those who are on a tight budget. All of the people in this category look to have a fun time so we made it easy to find bar locations.

### UI Features
[wireframe](https://github.com/jmezalon/the-lit-library/blob/main/the%20Schema/Schema.png?raw=true)

### Functionalities

The app consists of a few functionalities and data. We start off with the json file where we seed our database with different bar information. We “fetch” our data from our local computer which mimics an api server and converts the response to json to be understandable to JavaScript.

We have three different ways that users can search through our database. We add an event listener so we know exactly what information to return when a user makes a selection on the drop down bars or type an input in the search bar. They can select whether the drink is strong, light or medium. Our borough selection returns bars that are only in the selected borough. Similarly, on the search input a user is able to find matching drinks if it is available in our library of drinks. 


### Result Resource

Once we get the return results we are then displaying them on cards that we created for each of the results. The cards hold information about the bar (it is also extracted from the .json file) like the name, picture,  location and a recommendation on what to order. We rate these bars on the intensity of the alcohol that is typically served within the low cost options 

### How to obtain this code

To use this code, add or extract a part of it you can use github. Once you are there, fork this repository and copy the SSH key. Then, go into your terminal, find the directory where you would like to place it in and use the commands: git clone <paste SSH link here>, cd into the file and code. For any questions you can just reach out to us or email us at tamtiffany89@gmail.com. 

