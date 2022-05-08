# TITLE

- PHPHaters

# SUBTITLE

- Undergraduate Planner

# SEMESTER

- Spring 2022

# OVERVIEW

Our project displays various information that as undergraduate students is essential for us to know. We have a tab that displays major requirements including course descriptions for courses related to a particular major. It also displays a page that lists the multiple research areas its description and the faculty present in that research area. We have tabs for Clubs/RSOs, a calendar to add events

# TEAM MEMBERS (Individual GitHubs Mentioned)

- Tanishk Jain - tanishkjain1357
- Shreya Khettry - shreyakhettry
- Shubh Vashisht - shubh-vashisht
- Varisht Aggarwal

# USER INTERFACE

# APIs

# DATABASE

#### Major Requirements Table (Course Descriptions)

| Column       | Data Type   | Description              |
|--------------|-------------|--------------------------|
| name         | String      | The name of the course including course number  |
| instructor   | String      | The names of all the instructors teaching the course or that have taught the course in the past |
| description  | String      | The description of the course |
| credits      | Number      | The number of credits the course counts for |


#### Research Areas Information Table 

| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| name         | String    | The name of the research area |
| faculty      | String    | The names of all the faculty part of the research area |
| description  | String    | The description of the research area |


#### Clubs/RSOs Information Table

| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| name         | String    | The name of the Club/RSO |
| description  | String    | The description of the Club/RSO |

#### Internship Oppertunity Table

| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| Employee     | String    | The type of the Internship |
| Industry     | String    | The industry of the Internship |
| Location     | String    | The location of the Internship |



# URL ROUTES/MAPPING

#### Major Requirements and Course Descriptions API Routes

| API Endpoint Type  | Description |
|--------------------|-------------|
| POST @ /majorReq   | Used to create a course|
| GET @ /majorReq    | Used to get all the courses in the database|
| PUT @ /majorReg    | Used to update a course in the database |
| DELETE @ /majorReg | Used to delete a course in the database |



#### Clubs and RSOs Information API Routes

| API Endpoint Type  | Description |
|--------------------|-------------|
| POST @ /clubRSO   | Used to create a club/RSO|
| GET @ /clubRSO    | Used to get all the clubs/RSOs in the database|
| PUT @ /clubRSO    | Used to update a club/RSO in the database|
| DELETE @ /clubRSO | Used to delete a club/RSO in the database |



#### Reserach Areas and Faculty API Routes

| API Endpoint Type  | Description |
|--------------------|-------------|
| POST @ /resProf   | Used to create a research area |
| GET @ /resProf    | Used to get all the research areas in the database|
| PUT @ /resProf    | Used to update a research area in the database|
| DELETE @ /resProf | Used to delete a research area in the database|



#### Career Development/ Internship Oppertunity API Routes

| API Endpoint Type  | Description |
|--------------------|-------------|
| POST @ /carDev   | Used to create an internship opportunity |
| GET @ /carDev    | Used to get all the internship opportunities in the database|
| PUT @ /carDev    | Used to update an internship opportunity in the database|
| DELETE @ /carDev | Used to delete an internship opportunity in the database|

# AUTHENTICATION/AUTHORIZATION

# DIVISION OF LABOR

##### Milestone 1

- Shreya: Part 1: Wireframes and Sketches
- Tanishk: Part 2: HTML and CSS
- Shubh: Part 2: HTML and CSS

##### Milestone 2

- Tanishk: Front-End Implementation of the Code (Part 2)
- Shreya: Back-End Implementation of the Code (Part 1), Flowchart (Part 0), the 'milestone2.md' and 'setup.md' documents
- Shubh: Heroku Deployment (Part 3)

##### Milestone 3

- Tanishk: Handled the Front-End and helped in Back-End Functionality
- Shubh: Created and Populated the Databases and Deployed on Heroku
- Shreya: Created the 'milestone3.md' document, helped in the creation of the Database Schema and Back-End Functionality. Created the 'final.md' document as well

# CONCLUSION

This project gave us a real world insight on how development to create an application works and how individuals are supposed to work in a group. Like every group project we had agreements and disagreements from the topic ideas, to the code, to the implementation and even regarding the final presentations, yet we managed to still produce something and that for us is an achievement in itself even if the final outcome is different from what we expected. Being new to the concept of web development we faced multiple hurdles, some we were able to cross and some we were not. However, we were still able to learn a lot and effectiveky apply the learnings from the lectures in a real-world setting and that is an aspect that we all enjoyed. Something that we think we should have known at the start was the amount of time this project would be taking. None of use correctly estimated the huge amount of time and effort that we would have needed to put in the project which is one of the factors that the task of creating this project felt colossal and we missed out on implementing a few aspects that we would have definitely liked to include. Overall, we all learned a lot and at the end that is all that really matters. 