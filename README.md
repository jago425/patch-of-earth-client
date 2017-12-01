# Patch Of Earth Client

## About The Application
Patch of Earth is an application where you can keep an inventory of your plants.  Once you set up an account and login, you can add, edit and delete plants.

![github image](/PatchOfEarth.png)

## Links

*   [Deployed Client](https://jago425.github.io/patch-of-earth-client/)
*   [Deployed API](https://evening-mountain-89646.herokuapp.com)
*   [API Repo Link](https://github.com/jago425/patch-of-earth-api)

### Wireframes
*   [Homepage](http://framebox.org/AejGr)
*   [Add A Garden](http://framebox.org/AejhI)
*   [Add Plants](http://framebox.org/AejHb)
*   [View/Edit/Delete Gardens](http://framebox.org/AejHN)


## Technologies Used

1. Javascript
2. Handlebars
3. Bootstrap

## Future Enhancements

1. Update sign-up/sign-in to be responsive
2. Add the Gardens table
3. Add the Garden_Plants join table so that plants can be added to gardens
4. Add additional columns to Plants for yield, growing time, planting season, comments and temperature.
5. Add additional tables for years, seeds and ratings.
6. Add ability to upload photos
7. Add ability to interact with 3rd Party APIs for heirloom seed sharing and inheritance tracing.
8. Refactor the front-end using React.
9. Dynamic error handling.

## Development Strategy
Even though I've had the idea for this application for a couple of years, planning was much harder than other applications I've built.  I knew what functionality I wanted to have but I had a lot of trouble with the front-end design and user flow.  Of course, as with any idea that's been years in the making, keeping scope at a level that was achievable in 5 days was also a challenge.

First, started out with an ERD that had 5 tables, one for Gardens, one for Plants, one for Ratings, one to join Ratings to Plants and one to join Plants to Gardens.  My Gardens and Plants tables also contained more columns to account for planting season, yield, quantity and notes.  In addition, I began researching a 3rd Party API, GrowStuff, that I wanted to interact with in order to look for heirloom seeds.

Like I said, the front-end design was a real struggle for me and since there really aren't many applications out there like the one I wanted to build, I had a lot of trouble with inspiration.  The wireframes took much longer than I expected and I still feel like I haven't yet figured out the ideal experience.

Once I started building out the back-end, I quickly realized that 5 days was not going to be enough time.  So I had to remove some columns from Gardens and Plants, removed the ratings table and put the 3rd Party API interaction in the backlog for a future iteration.

A spent a good bit of time working on building out the Plants, Gardens and Garden_Plants resources.  I was really meticulous and iterative about making sure that I could successfully CRUD on each one before moving onto the next.  However, by the time I had joined Users to Plants, I was 2 days in and had not even touched the front-end.  So I resigned myself to getting Plants completed on the front-end before moving onto Gardens.

CRUDing on the front-end took about a day and a half.  I knew I wanted to use Handlebars for more than just Index.  I also wanted to get more practice with modals so I incorporated modals in my Create, Show/Update and Delete functionality.  I've determined that my use of modals was in almost direct proportion to how unsure I was of design.  Finally, I also really wanted to have dynamic error handling.  This was important to me as a reach goal since I didn't have enough time to incorporate Gardens on the front-end.

Unofortunately, due to two display defects (1 on the GIF buttons and 1 on my edit modal's plant_type dropdown), which took me most of day 5 to figure out, I didn't get to my dynamic error handling.  It will hopefully make it in my next iteration.


## User Stories

1. [Authentication](./user-stories/auth.md)
2. [Gardens](./user-stories/gardens.md)
3. [Plants](./user-stories/plants.md)
4. [Gardens/Plants](./user-stories/garden-plants.md)
