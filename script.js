document.addEventListener("DOMContentLoaded", function () {
  const comentContainer = document.getElementById("comments-container");

  window.addComment = function () {
    const inputCmt = document.getElementById("new-comment-input");
    let text = inputCmt.value.trim();
    if (text) {
      const commentElement = createCommentElement(text);
      comentContainer.appendChild(commentElement);
      inputCmt.value = "";
    }
  };
  window.addReply = function (replyButton) {
    const replyContainer = replyButton.nextElementSibling;
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Add a reply...";
    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.onclick = function () {
      const text = input.value.trim();
      if (text) {
        const replyElement = createCommentElement(text);
        replyContainer.appendChild(replyElement);
        replyContainer.removeChild(input);
        replyContainer.removeChild(submitButton);
      }
    };
    replyContainer.appendChild(input);
    replyContainer.appendChild(submitButton);
  };
  function createCommentElement(text) {
    const commentElement = document.createElement("div");
    commentElement.className = "comment";
    const content = document.createElement("div");
    content.className = "content";
    content.innerText = text;
    const replyButton = document.createElement("div");
    replyButton.className = "reply-button";
    replyButton.innerText = "Add a reply";
    replyButton.onclick = function () {
      window.addReply(replyButton);
    };
    const repliesContainer = document.createElement("div");
    repliesContainer.className = "replies";
    commentElement.appendChild(content);
    commentElement.appendChild(replyButton);
    commentElement.appendChild(repliesContainer);
    return commentElement;
  }
});
