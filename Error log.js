let errorLog = [];

window.onerror = function (message, source, lineno, colno, error) {
  errorLog.push({
    message: message,
    source: source,
    lineno: lineno,
    colno: colno,
    error: error ? error.stack : null,
  });

  return true;
};

// Function to send error log via POST request
function sendErrorLog() {
  // Create the payload for the POST request
  const payload = {
    errors: errorLog,
  };

  // Send the POST request with the error log
  fetch("https://your-api-endpoint.com/log-errors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload), // Convert the payload to JSON
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Error log sent successfully:", data);
    })
    .catch((err) => {
      console.error("Error sending error log:", err);
    });
}

// Send the error log after errors are collected
sendErrorLog();
