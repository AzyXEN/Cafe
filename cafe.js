// 1. Кнопки мессенджеров (с проверкой на наличие на странице)
let tgButton = document.getElementById("tg");
if (tgButton) {
  tgButton.addEventListener("click", function() {
    alert("Перейти в Telegram");
  });
}

let wtsButton = document.getElementById("wts");
if (wtsButton) {
  wtsButton.addEventListener("click", function() {
    alert("Перейти в WhatsApp");
  });
}

// 2. Логика Лайв-чата поддержки
let openChatBtn = document.getElementById("open-chat-btn");
let chatWindow = document.getElementById("chat-window");
let closeChatBtn = document.getElementById("close-chat-btn");
let sendMsgBtn = document.getElementById("send-msg-btn");
let chatInput = document.getElementById("chat-input");
let chatBody = document.getElementById("chat-body");

if (openChatBtn && chatWindow && closeChatBtn) {
  // Открытие чата
  openChatBtn.addEventListener("click", function() {
    chatWindow.classList.remove("chat-hidden");
    openChatBtn.style.display = "none"; // Скрываем кнопку открытия, когда чат активен
  });

  // Закрытие чата
  closeChatBtn.addEventListener("click", function() {
    chatWindow.classList.add("chat-hidden");
    openChatBtn.style.display = "inline-block"; // Возвращаем кнопку назад
  });

  // Функция отправки сообщения
  function sendMessage() {
    let text = chatInput.value.trim();
    if (text === "") return; // Если пусто — ничего не делаем

    // Создаем сообщение пользователя
    let userMsg = document.createElement("p");
    userMsg.classList.add("chat-message", "user");
    userMsg.textContent = text;
    chatBody.appendChild(userMsg);

    // Очищаем поле ввода и скроллим чат вниз
    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // Имитация ответа администратора через 1 секунду
    setTimeout(function() {
      let supportMsg = document.createElement("p");
      supportMsg.classList.add("chat-message", "support");
      supportMsg.textContent = "Спасибо! Администратор скоро ответит.";
      chatBody.appendChild(supportMsg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
  }

  // Клик по кнопке «Отправить»
  sendMsgBtn.addEventListener("click", sendMessage);

  // Отправка по нажатию клавиши Enter в поле ввода
  chatInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
}
