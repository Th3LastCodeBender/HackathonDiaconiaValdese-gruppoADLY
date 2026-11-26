I'm building a web app to manage various things in some social-health facilities in Florence, Italy. The idea is to offer a service to three different types of users: educators / social health workers, guests of these facilities (mostly kids between 16 - 21 years old, but also some littler one between 6 - 16 years old) and parents / legal tutors of the guests.
The app should provide accounts for all these three types of people, a coordinator account for each facility and a super admin account that can manage everything. Guest and educators should be linked to only one of the facilities, while parents should be linked to their child. The coordinator of a facility should be able to create account for that facility: educators and guests. Educators should be able to create guests accounts. Guests should have an educator of their facility nominated as reference educator. I would like to manage accounts via roles: for example, an educator of one facility can also be the coordinator for that facility and so have both roles; an educators can also be an admin for the app; and so forth. Guests and parents should not be able to be assigned to other roles, they are just the final users of the service.
The facilities are divided in two main groups: residential facilities and daily facilities.
The guests of daily facilities go there after school in the afternoon, and do there some learning and recreational activities; they live with their parents at home.
Instead, the guests of residential facilities live in the facility, supervised by educators, because they don't have parents of their parents can't take care of them; the guest of residential facilities have to live together inside the facility: they take turns to clean, to cook, to take out the trash, do the laundry, etc. and they have to acquire a certain degree of autonomy (also based on their age).
The first aim of the app is to simplify some bureaucratic stuff that happens in the residential facilities: managing the cleaning and cooking turns, and other mandatory activities that should be split between the guests. I want a complete management app where guests of the facilities can view their daily, weekly, monthly commitments, can sign up for their turns, swap their turn with another guest if he's okay, confirm that they completed their task, eventually attaching a picture. There should be a calendar view where the guests can see their commitments: turns but also job, therapy sessions (psychologist), other medical appointments, etc. Guests should be notified for their tasks. Educators should see and be able to modify all the tasks, commitments of every guest, see some recaps about guests, mark the tasks as completed if the guest has done it, send reminders to guests about their tasks, sanction guests that don't complete tasks. Guests, educators, coordinators should not be able to register to the web app themselves, but when their account is created should be able to modify their password, profile picture, contacts, etc. Parents should be able to register themselves with an invitation link sent by an educator / coordinator / admin; the link should be linked to their kid so a parent can only register as parent of their kid.
The second aim of the app is to have a complete profile of every guest of the facilities. For guests, it means that they can track their progress towards autonomy, see what they have done, the tasks they have completed, the ones that they failed to complete. Each task should be weighted by its difficulty. I would like to build the progress as a video-game, with achievements, trophies, so guests are motivated to behave correctly and do their tasks. Educators should have a dashboard where they can see the cumulative progress: number of tasks completed per period of time, filter tasks per type, see how many tasks each guest of their facility have completed, etc. All the metrics should also be shown as graphs for easy understanding: for example, a pie chart representing the percentage of tasks completed by each guest in a certain period of time (last week, last month, etc.). Educators should also be able to see a complete profile of each guest: their commitment to the tasks, their achievements, etc. Each educator can write feedbacks about a guest on their profile: those feedbacks should be confidential between educators, so another educator can have an idea on one guest at a glance.
The third aim is to include the guest parents or legal tutors in this world. There should be a board where parents can see what activities their kid has done at the facility and some photos attached to the activity. Guests should see also their learning / recreational activities in their calendar view and educators should be able to add / modify those activities for the guests. Learning / recreational activities can eventually include a link to an external website / platform useful for the activity.
I want you to write a precise, step-by-step program in Markdown that I will follow to develop this app using my knowledge and AI agents. My priority is to build a functional and engaging front end to show the app functionality to my clients. I can skip the back end development for now, as I don't have much time before the presentation but I can refine and develop the real app afterward, but only if I can convince them that my idea is useful and functional. For the front end I want to use Vite and the React framework with Chakra UI v3. Thank you for your help.

<h2> pending tasks </h2>

Istogramma(numero task pending, nomi)
  
  |                 |
  |     |           |
Name1 Name2 Name3 Name4

<h2> best contributors </h2>


Pie chart(rate of number of tasks done / number of all task in all the facility)


<h2> most done tasks </h2>

The type of task most done
Istogramma(Number of time the types is in the moskTasks, moskTask name)

<h2> critical low engage </h2>

The three least done task type
Istogramma
