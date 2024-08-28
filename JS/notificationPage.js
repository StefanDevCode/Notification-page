const markAllReaded = document.querySelector(".mark-all-read-link");
const notificationBadges = document.querySelectorAll(".notification-badge");
const notificationBadgesPrivate = document.querySelector(
  ".notification-badge-private"
);
const notificationBadgeRead = document.querySelectorAll(
  ".notification-badge-read"
);
const notificationContentPrivate = document.querySelector(
  ".notification-content-private"
);
let countNumber = document.querySelector(".count-number");

const checkBoxNotification = document.querySelectorAll(".checkBox");

let numberNotifications = 0;

function count_notification_addClass() {
  checkBoxNotification.forEach((checkBox) => {
    checkBox.addEventListener("change", () => {
      const parentDiv = checkBox.closest(
        ".notification-badge, .notification-badge-private"
      );
      const contentDiv = parentDiv.querySelector(
        ".notification-content, .notification-content-private, .notification-message"
      );

      const contentDivNotificationMessage = parentDiv.querySelector(
        ".notification-message"
      );

      if (checkBox.checked) {
        // Add class on both badges / divs
        parentDiv.classList.add("Active");
        contentDiv.classList.add("Active");
        if (contentDivNotificationMessage) {
          contentDivNotificationMessage.classList.add("Active");
        }

        setCount(1);

        // Add dot image
        let dotImage = contentDiv.querySelector(".dotImage");
        if (!dotImage) {
          dotImage = document.createElement("img");
          dotImage.src = "Images/notificationdot.png";
          dotImage.className = "dotImage";
          contentDiv.querySelector("p").appendChild(dotImage);
        }
      } else {
        // Remove Active class from badges / divs
        parentDiv.classList.remove("Active");
        contentDiv.classList.remove("Active");
        if (contentDivNotificationMessage) {
          contentDivNotificationMessage.classList.remove("Active");
        }
        setCount(-1);

        // Remove dot image
        const dotImage = contentDiv.querySelector(".dotImage");
        if (dotImage) {
          dotImage.remove();
        }
      }
    });
  });
}
count_notification_addClass();

function setCount(change) {
  numberNotifications += change;
  countNumber.innerText = numberNotifications;
}

function removeActiveClassFromAll() {
  numberNotifications = 0;
  setCount(numberNotifications);
  const allActiveElements = document.querySelectorAll(".Active");
  allActiveElements.forEach((element) => {
    element.classList.remove("Active");
    const dotImage = element.querySelector(".dotImage");
    if (dotImage) {
      dotImage.remove();
    }
  });
}

function uncheckAllCheckboxes() {
  checkBoxNotification.forEach((checkBox) => {
    checkBox.checked = false;
  });
}

function mark_all_readed() {
  markAllReaded.addEventListener("click", () => {
    removeActiveClassFromAll();
    uncheckAllCheckboxes();
  });
}

mark_all_readed();
