export const getLocation = (callback: any) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(callback);
  } else {
    return false;
  }
};

export const checkPermission = async () => {
  try {
    const permission = await navigator.permissions.query({
      name: "geolocation",
    });
    if (permission.state === "granted") {
      return true;
    } else if (permission.state === "denied") {
      return false;
    }
  } catch (e) {
    return false;
  }
};
