// Detect if it's an Android device
const userAgent = navigator.userAgent.toLowerCase();
const isAndroid = userAgent.includes("android");

//Get product number
const placeholders = avm.require("avast.ipm.placeholders");
const app = placeholders.parsePlaceholder("<#Product#>", "number", 0).value;

// EULA and policy elements
const eulaElements = document.querySelectorAll(".js-eula");
const policyElements = document.querySelectorAll(".js-policy");

//Check if eula and policy exists
if (eulaElements && policyElements) {
  eulaElements.forEach((eula) => {
    eula.addEventListener("click", function () {
      console.log("Eula clicked!");
    });
  });
  policyElements.forEach((policy) => {
    policy.addEventListener("click", function () {
      console.log("Policy clicked!");
    });
  });
}

// Base url links
const baseUrl = {
  avast: "https://www.avast.com/",
  avg: "https://www.avg.com/",
  ccleaner: "https://www.ccleaner.com/",
  hma: "https://www.hidemyass.com/",
};

// Links structure
const links = {
  avast: {
    android: {
      policy: {
        id: "android.intent.action.VIEW",
        uri: `${baseUrl.avast}<#Region#>/privacy-policy`,
        currentApp: false,
      },
      eula: {
        id: "android.intent.action.VIEW",
        uri: `${baseUrl.avast}<#Region#>/eula`,
        currentApp: false,
      },
    },
    ios: {
      policy: {
        type: "deeplink",
        value: `${baseUrl.avast}privacy-policy`,
        currentApp: false,
      },
      eula: {
        type: "deeplink",
        value: `${baseUrl.avast}eula`,
        currentApp: false,
      },
    },
  },
  avg: {
    android: {
      policy: {
        id: "android.intent.action.VIEW",
        uri: `${baseUrl.avg}privacy`,
        currentApp: false,
      },
      eula: {
        id: "android.intent.action.VIEW",
        uri: `${baseUrl.avg}eula`,
        currentApp: false,
      },
    },
    ios: {
      policy: {
        type: "deeplink",
        value: `${baseUrl.avg}privacy`,
        currentApp: false,
      },
      eula: {
        type: "deeplink",
        value: `${baseUrl.avg}eula`,
        currentApp: false,
      },
    },
  },
  ccleaner: {
    android: {
      policy: {
        id: "android.intent.action.VIEW",
        uri: `${baseUrl.ccleaner}about/privacy-policy`,
        currentApp: false,
      },
      eula: {
        id: "android.intent.action.VIEW",
        uri: `${baseUrl.ccleaner}legal/end-user-license-agreement`,
        currentApp: false,
      },
    },
    ios: {
      policy: {
        type: "deeplink",
        value: `${baseUrl.ccleaner}about/privacy-policy`,
        currentApp: false,
      },
      eula: {
        type: "deeplink",
        value: `${baseUrl.ccleaner}legal/end-user-license-agreement`,
        currentApp: false,
      },
    },
  },
  hma: {
    android: {
      policy: {
        id: "android.intent.action.VIEW",
        uri: `${baseUrl.hma}legal/privacy`,
        currentApp: false,
      },
      eula: {
        id: "android.intent.action.VIEW",
        uri: `${baseUrl.hma}legal/vpn-terms`,
        currentApp: false,
      },
    },
    ios: {
      policy: {
        type: "android.intent.action.VIEW",
        value: `${baseUrl.hma}legal/privacy`,
        currentApp: false,
      },
      eula: {
        type: "android.intent.action.VIEW",
        value: `${baseUrl.hma}legal/vpn-terms`,
        currentApp: false,
      },
    },
  },
};

// Generalized function to handle click events for both Android and iOS
const handleLinkClick = (element, type, brand) => {
  element.addEventListener("click", () => {
    const data = links[brand][isAndroid ? "android" : "ios"][type];
    console.log(isAndroid, type, brand);
    window.location = `?action=${btoa(JSON.stringify(data))}`;
  });
};

// Attach event listeners for EULA and policy elements
const handleElements = (brand) => {
  eulaElements.forEach((element) => handleLinkClick(element, "eula", brand));
  policyElements.forEach((element) =>
    handleLinkClick(element, "policy", brand)
  );
};

const avast = {
  android: [15, 37, 48],
  ios: [100, 117, 220],
};

const avg = {
  android: [63, 76, 83],
  ios: [64, 142, 221],
};

const ccleaner = {
  android: [95],
  ios: [222],
};

const hma = {
  android: [49],
  ios: [105],
};

// Check device type and assign handlers for each brand (Avast/AVG/Ccleaner)
if (isAndroid) {
  if (avast.android.includes(app)) handleElements("avast");
  else if (avg.android.includes(app)) handleElements("avg");
  else if (ccleaner.android.includes(app)) handleElements("ccleaner");
  else if (hma.android.includes(app)) handleElements("hma");
} else {
  if (avast.ios.includes(app)) handleElements("avast");
  else if (avg.ios.includes(app)) handleElements("avg");
  else if (ccleaner.ios.includes(app)) handleElements("ccleaner");
  else if (hma.android.includes(app)) handleElements("hma");
}
