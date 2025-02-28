(function () {
  // Detect if it's an Android device
  const userAgent = navigator.userAgent.toLowerCase();
  const isAndroid = userAgent.includes("android");

  // Define the Android-specific data
  const androidData = {
    id: "com.avast.android.campaigns.ALREADY_PURCHASED",
    currentApp: "true",
  };

  // Function to encode Android data to Base64
  const encodeAndroidData = (data) => btoa(JSON.stringify(data));

  // Function to handle button clicks for both Android and non-Android
  const handleButtonClick = (isAndroid, btn) => {
    btn.addEventListener("click", function () {
      if (isAndroid) {
        window.location = `?action=${encodeAndroidData(androidData)}`;
      } else {
        window.location = "?restorePurchases=restorePurchases";
      }
    });
  };

  // Get all the elements with the 'js-already-purchased' class
  const alreadyPurchasedButtons = document.querySelectorAll(
    ".js-already-purchased"
  );

  //Check if already purchased button  exists
  if (alreadyPurchasedButtons) {
    alreadyPurchasedButtons.forEach((button) => {
      button.addEventListener("click", function () {
        console.log("Already purchased clicked");
      });
    });
  }

  // If there are any buttons, attach event listeners
  if (alreadyPurchasedButtons.length > 0) {
    alreadyPurchasedButtons.forEach((btn) => handleButtonClick(isAndroid, btn));
  }
})();
