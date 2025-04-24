document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => updateChatList(e.target.value));
  renderChatList(chatData);
  renderChat(0);
});

let currentChatIndex = 0;
let replyTo = null;

const get = (id) => document.getElementById(id);

const updateChatList = (query) => {
  const filtered = chatData.filter((chat) =>
    chat.name.toLowerCase().includes(query.toLowerCase())
  );
  renderChatList(filtered);
};

const renderChatList = (data) => {
  const chatList = get("chat-list");
  chatList.innerHTML = "";
  data.forEach((chat, i) => {
    const div = document.createElement("div");
    div.className = "chat-item p-2 border-bottom";
    const last = chat.messages?.at(-1)?.text || "No messages yet";
    div.innerHTML = `<strong>${chat.name}</strong><br><small>${last.slice(
      0,
      30
    )}...</small>`;
    div.onclick = () => renderChat(i);
    chatList.appendChild(div);
  });
};

const renderChat = (index) => {
  currentChatIndex = index;
  const { name, messages } = chatData[index];

  get("chat-details").innerHTML = `
      <h4>${name}</h4>
      <div id="replyBox" class="mb-2" style="display:none; border-left: 4px solid blue; padding:5px;">
        Replying to: <span id="replyText"></span>
        <button class="btn btn-sm btn-danger" onclick="cancelReply()">Cancel</button>
      </div>
      <div id="chatBox" class="mb-2"></div>
      <input id="messageInput" class="form-control mb-2" placeholder="Type a message...">
      <button class="btn btn-primary" onclick="sendMessage()">Send</button>
    `;

  renderMessages(messages);
};

const renderMessages = (messages) => {
  const chatBox = get("chatBox");
  chatBox.innerHTML = "";

  messages.forEach((msg, i) => {
    const div = document.createElement("div");
    div.className = "p-2 mb-2 border rounded";
    div.style = "background-color:#f1f1f1; cursor:pointer";
    div.innerHTML = `
        ${
          msg.replyTo
            ? `<small style="color:gray;">Reply to: "${msg.replyTo}"</small><br>`
            : ""
        }
        <strong>${msg.sender}:</strong> ${msg.text}
      `;
    div.onclick = () => startReply(i);
    chatBox.appendChild(div);
  });
};

const startReply = (index) => {
  replyTo = chatData[currentChatIndex].messages[index];
  get("replyBox").style.display = "block";
  get("replyText").textContent = replyTo.text;
};

const cancelReply = () => {
  replyTo = null;
  get("replyBox").style.display = "none";
  get("replyText").textContent = "";
};

const sendMessage = () => {
  const input = get("messageInput");
  const text = input.value.trim();
  if (!text) return;

  chatData[currentChatIndex].messages.push({
    sender: chatData[currentChatIndex].name,
    text,
    replyTo: replyTo?.text || null,
  });

  input.value = "";
  cancelReply();
  renderMessages(chatData[currentChatIndex].messages);
};
