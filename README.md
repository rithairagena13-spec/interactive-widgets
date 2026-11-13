
# Interactive Widgets Dashboard

A modern, responsive interactive dashboard built with **React 19, Vite, and Tailwind CSS**. This project demonstrates React event handling, functional components, props, state management with `useState`, controlled forms, immutable array updates, and lifting state up.

## Project Overview

Interactive Widgets is a learning dashboard containing independent interactive components and a shared task management system.

Each widget demonstrates a practical use of React state and event handling. The TaskBoard and TaskSummary share task data through props and callback functions, with `App.jsx` managing the shared state.

## Features

### 1. Events and State
- Interactive click counter.
- Reset button to return the count to zero.
- Demonstrates React event handlers.
- Explains the difference between passing a function and calling it immediately.

### 2. Counter Widget
- Increase the count by one.
- Decrease the count by one.
- Reset the counter.
- Increase the count by three.
- Prevents the counter from going below zero.
- Uses functional state updater functions.

### 3. Toggle Widget
- Shows and hides a message.
- Uses boolean state.
- Demonstrates conditional rendering.

### 4. Controlled Profile Form
- Name input.
- Learning track selection.
- Availability checkbox.
- Controlled form fields using `value` and `onChange`.
- Form submission using `onSubmit`.
- Prevents default form submission behavior.
- Validates empty names.

### 5. Task Management
- Add new tasks.
- Mark tasks as completed or active.
- Remove tasks.
- Display an empty-state message when there are no tasks.
- Generate unique task IDs.
- Use immutable array updates with spread, `map()` and `filter()`.

### 6. Task Summary
- Displays the total number of tasks.
- Displays completed tasks.
- Displays remaining tasks.
- Automatically updates when the task list changes.

## Technologies Used

- React 19
- Vite
- JavaScript (ES6+)
- JSX
- Tailwind CSS
- HTML5

## Project Structure

```text
interactive-widget/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── DashboardHeader.jsx
│   │   ├── WidgetCard.jsx
│   │   ├── EventDemo.jsx
│   │   ├── CounterWidget.jsx
│   │   ├── ToggleWidget.jsx
│   │   ├── ProfileForm.jsx
│   │   ├── TaskBoard.jsx
│   │   └── TaskSummary.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── vite.config.js
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rithairagena13-spec/interactive-widgets.git
```

### 2. Navigate into the project

```bash
cd interactive-widgets
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## React Concepts Practiced

- **Functional Components:** Creating reusable components.
- **Props:** Passing data and callback functions between components.
- **useState:** Managing and updating component state.
- **Event Handling:** Responding to clicks, form submissions and input changes.
- **Conditional Rendering:** Showing content based on state.
- **Controlled Components:** Managing form inputs with React state.
- **Updater Functions:** Calculating new state from previous state.
- **Immutability:** Updating arrays and objects without directly modifying existing state.
- **Array map():** Updating task completion status.
- **Array filter():** Removing tasks and calculating statistics.
- **Spread Operator:** Adding new tasks without mutating the original array.
- **Stable Keys:** Using unique task IDs when rendering lists.
- **Lifting State Up:** Sharing task data between TaskBoard and TaskSummary through App.

## State Management

The application uses React's built-in `useState` hook without a backend or third-party state management library.

The counter, toggle and profile form manage their own state.

For task management, `App.jsx` owns the shared tasks state and passes it to:

- **TaskBoard:** Receives tasks and callback functions for adding, completing and removing tasks.
- **TaskSummary:** Receives the same tasks array and calculates total, completed and remaining tasks.

This ensures that both components stay synchronized.

## Important Note

Task data is currently managed in React state only. It is not stored in a database or browser storage, so it resets when the page is refreshed.

---

**Project:** Interactive Widgets Dashboard  
**Focus:** React State & Event Handling  
**Status:** Classwork implementation