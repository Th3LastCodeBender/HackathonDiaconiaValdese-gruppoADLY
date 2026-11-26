# Development Plan: Social-Health Facilities Management App (Prototype)

## Phase 1: Foundation & Mock Data Architecture
*Since you are skipping the backend, a robust mock data layer is critical to make the prototype feel alive.*

1. **Project Setup & Dependencies**
   - Initialize Vite + React + TypeScript (already in progress).
   - Set up Chakra UI v3 (already initialized) and configure the global theme (colors matching a welcoming, engaging social-health environment).
   - Install essential libraries: `react-router-dom` (routing), `recharts` (for educator dashboard graphs), `date-fns` (date manipulation), `framer-motion` (for gamification animations), and `lucide-react` or `react-icons` for iconography.

2. **Mock Data Modeling (`src/data/mockData.ts`)**
   - **Facilities**: Define residential vs. daily facilities.
   - **Users**: Create mock objects for an Admin, a Coordinator, an Educator, multiple Guests (different age groups), and a Parent.
   - **Tasks & Commitments**: Create a rich array of tasks with attributes like `diffcultyWeight`, `status` (pending, completed, swapped), `type` (chore, therapy, medical, learning), and `assignedTo`.
   - **Gamification**: Design mock achievements (e.g., "Master Chef", "Sparkling Clean") and an experience point (XP) system.
   - **Feedback**: Create mock confidential notes left by educators for specific guests.

## Phase 2: Authentication & Context Setup
*For the presentation, you need a way to easily switch between user perspectives.*

1. **State Management**
   - Create an `AuthContext` to hold the currently "logged in" user. 
   - Add a "Role Switcher" debug component (a floating button visible only in the prototype) to instantly swap between Guest, Educator, Parent, Coordinator, and Admin views without actually logging out.
2. **Login Screen**
   - Build a clean login screen as the app's entry point.
   - Include a "Sign up as Parent (Invite Only)" dummy link.
   - *Demo Script:* Use this screen to explain the role-based limitations (guests/educators created by coordinators) and the parent invite link workflow.

## Phase 3: Core Navigation & Layouts
*Different roles require different focal points.*

1. **Global Shell Layout**
   - Create a responsive sidebar/navbar.
   - Integrate a notification bell (mocking reminders for tasks, swap requests, sanctions).
   - Add a profile dropdown (edit password, picture, settings).
2. **Role-based Routing**
   - **Guest Route**: Focus on Today's Tasks, Autonomy Progress, and Calendar.
   - **Educator Route**: Focus on Facility Overview, Guest Rosters, and Task Verification.
   - **Parent Route**: Focus on Kid's Journal, Activity Photos, and Basic Calendar.

## Phase 4: Task Management & Calendar (Aim 1)
*The logistical heart of the application for residential facilities.*

1. **The Interactive Calendar View**
   - Build a monthly/weekly Grid calendar component.
   - Color-code events: Chores (blue), Therapy (purple), Learning/Recreation (green).
2. **Guest Experience - Task Interaction**
   - Build a "Daily Commitments" list view.
   - Create a modal for a Guest to click a task, upload a mock "proof" photo, and hit "Done".
   - Create the "Swap Turn" flow: Select a task -> Request Swap -> Select another guest -> Show a "Pending Approval" state.
3. **Educator Experience - Task Management**
   - Build an "Action Needed" inbox for educators (e.g., "Approve guest swap", "Verify task completion").
   - Create a modal to "Sanction" or "Send Reminder" to a guest who missed a task.

## Phase 5: Gamification & Guest Profiles (Aim 2)
*The engagement engine for guests and the analytical tool for educators.*

1. **Guest Autonomy Dashboard (Gamified)**
   - Build a visual "Progress to Autonomy" progress bar/level indicator.
   - Create an "Achievements & Trophies" grid using Chakra UI Cards and Framer Motion for unlock animations.
   - Show a history of completed tasks with their XP/difficulty weights.
2. **Educator Analytical Dashboard**
   - Implement `recharts` to build a "Tasks Completed (Last 30 Days)" Bar Chart.
   - Build a Pie Chart showing relative task completion percentages among guests in the facility.
3. **Confidential Guest Profile (Educator View)**
   - Create a detailed guest view showing their stats, medical/therapy schedule, and a "Confidential Notes" timeline where educators can add text feedback.

## Phase 6: Parent Board & Learning Activities (Aim 3)
*Connecting the facility with the families.*

1. **Parent's Activity Feed**
   - Build an Instagram-style scrolling feed or masonry grid of "Activities".
   - Each card should feature a placeholder photo, a description of the learning/recreation activity, and the date.
2. **Activity Management**
   - Allow educators to create new entries on this board, attach mock photos, and include external links (e.g., Khan Academy, local sports club).
   - Show learning activities on the guest and parent calendars.

## Phase 7: Polish & The Presentation Flow
*Final touches to ensure the client is wowed.*

1. **UI Polish**
   - Ensure Chakra UI's Color Mode (Dark/Light) works flawlessly to show modern design practices.
   - Add toast notifications (Chakra's `toaster`) for actions like "Task Completed", "Reminder Sent", or "Achievement Unlocked!" to give instant interactive feedback.
2. **Demo Scenarios Setup**
   - Hardcode specific states to match your pitch. For instance, have Guest A perfectly on track to level up, and Guest B missing a chore so you can demonstrate the Educator sanction/reminder flow.
   - Prepare a 3-act demo script:
      - **Act 1:** The Guest (show the gamification, calendar, and task completion).
      - **Act 2:** The Educator (verify the guest's task, view the graphs, write a confidential note).
      - **Act 3:** The Parent (view the photo board and the child's activity feed).