module.exports = (message, player2 = "gg") => {
    if (!message || message == null || typeof (message) !== "object") return "Invalid Message was provided.";
    if (player2 !== "gg" && (!player2 || player2 == null || typeof (player2) !== "object")) return "Invalid Player-2 was provided.";
  
    return "";
  }