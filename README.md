# 💬 Chat App with Search and Reply

A simple web-based **Chat Application** that allows users to interact with each other through message exchanges. This application features dynamic user display, the ability to search for users by name, and a message reply functionality. The application is built using **HTML**, **Bootstrap**, and **JavaScript**.

---

## ✨ Features

- 🧑‍🤝‍🧑 **Dynamic User List**: The user list is generated dynamically from predefined data. Each user has an avatar, name, and a list of messages.
- 📩 **View Full Chat**: Clicking on a user from the list displays their chat history in the main section.
- 🔍 **Search Functionality**: You can search for users by name, and the list will be filtered accordingly.
- 💬 **Send Messages**: Users can send messages within the chat interface.
- ↩️ **Reply to Messages**: You can reply to specific messages within the conversation, which is visually indicated in the chat.
- 📱 **Responsive Design**: The layout is mobile-responsive using **Bootstrap**, ensuring a good experience across different screen sizes.

### File Details:

- **`index.html`**: This is the main HTML file that provides the structure for the chat app. It includes the user list, message area, and an input area for sending messages.
- **`style.css`**: Optional CSS file where custom styles can be added (though most styling is provided by Bootstrap).
- **`script.js`**: Contains the JavaScript for dynamic behaviors such as loading chat sessions, searching for users, handling replies, and sending messages.
- **`README.md`**: Documentation file that explains the project structure, features, and how to run the app.

---

## 🚀 How to Run

1. **Clone the repository** or **download as ZIP**:
   - Clone the repo using:  
     `git clone https://github.com/azit-rana0/chat-app.git`
2. Open the `index.html` file in your favorite web browser.
3. The app will load with a list of users. Select a user to view their messages.
4. Use the search bar to filter the user list by name.
5. Type a message in the input box and click **Send** to send a message.
6. To reply to a message, click on it in the chat history, and a reply box will appear.
7. You can continue chatting and replying to individual messages.

---

## 🛠️ Built With

- **HTML5**: Provides the basic structure for the web page.
- **Bootstrap 5**: Used for styling the layout, providing responsive design, and some UI elements like buttons, input fields, and containers.
- **JavaScript**: Used for dynamic functionality, including rendering chat messages, filtering chats, replying to messages, and sending new messages.

---

## 📸 Preview

Here's a screenshot of the app in action:

![Chat App Screenshot](assets/screenshot.png)

---

## 📝 How the App Works

### 1. **Displaying Users:**

The app loads a list of predefined users from `chatData` and dynamically renders them on the left side of the screen. Each user has a name, avatar, and a snippet of the most recent message in the chat.

### 2. **Viewing Chat Details:**

When you click on a user, their full message history is displayed on the right side. You can send a new message or click any message to reply to it.

### 3. **Search Functionality:**

The search input at the top allows you to filter the user list based on the name. As you type, the displayed users are filtered in real-time.

### 4. **Replying to Messages:**

If you want to reply to a specific message, simply click on it. This will show a "Replying to" section, and your reply will be attached to the selected message. The replied message will be displayed with a "Reply to: {message}" indicator.

### 5. **Sending Messages:**

You can type a message in the input box and click **Send** to add it to the conversation. If you're replying to a message, it will be added as a reply to that message.

---

## 🧑‍💻 How to Contribute

Feel free to open issues or create pull requests to contribute to the project. Some ideas for improvements:

- Persist chat messages with local storage or a backend.
- Implement user authentication for real chat experience.
- Add timestamps to messages to track when they were sent.
- Enable group chats with multiple users.
- Improve message formatting with rich-text support (bold, italics, etc.).

---

## 👥 Author

- **Your Name** - [Your GitHub Profile](https://github.com/azit-rana0)

---

## 🛠️ Acknowledgments

- Bootstrap for the responsive layout.
- The users and messages are fictional and used for demonstration purposes.
