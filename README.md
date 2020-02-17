The Api was designed for users of  same organisation to schedule meetings and send notifiers
The process flow are stated below
1) The User route is meant to create multiples users for an org
2)The Schedule route is designed to authorize an existing user with a storage name(createdBy) to create an appointment schedule
3) The scheduled appoitment are sent out to emails of all exting users in the organisation(To)
4) The details of the appointment contains  the start-date , end-date, start-time , and duration .
5)I executed two for loops to get the user who scheduled the meeting , while the other filtered the user who created the meeting to get other users of the organisation
6)For scalability i will have to create a login route which directs me to the schedule route
7) I will also need to create a route which should update the meeting details for adjustment
8) I will also create a route which deletes a task at the end of the meeting.
9) The meeting tine contains the day of the meeting which was stored in a datetime format , and the data will be formatted to get my desired value .