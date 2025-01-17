import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://calculab-backend.up.railway.app/api";

// Fungsi untuk mendapatkan payload dari JWT
export function parseJwt(token: string) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("Error parsing JWT:", e);
    return null;
  }
}

// Fungsi untuk memeriksa apakah token hampir kedaluwarsa
export function isTokenExpiringSoon(token: string, bufferInSeconds = 120) {
  const payload = parseJwt(token);
  if (!payload || !payload.exp) {
    return true;
  }
  const expirationTime = payload.exp * 1000;
  const currentTime = Date.now();
  return expirationTime - currentTime < bufferInSeconds * 1000;
}

// Fungsi untuk merefresh token
export async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = await AsyncStorage.getItem("refresh_token");
  if (!refreshToken) {
    throw new Error("No refresh token found");
  }

  try {
    const response = await fetch(`${BASE_URL}/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh: refreshToken }),
    });
    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }
    const data = await response.json();
    await AsyncStorage.setItem("token", data.access);
    return data.access;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error;
  }
}

// Fungsi untuk memastikan token valid sebelum API request
export async function ensureValidAccessToken(): Promise<string | null> {
  let token = await AsyncStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }

  if (isTokenExpiringSoon(token)) {
    token = await refreshAccessToken();
  }
  return token;
}
