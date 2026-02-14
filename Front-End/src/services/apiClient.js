// src/services/apiClient.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiFetch(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const res = await fetch(url, { ...options, headers });

  // si backend renvoie JSON
  const contentType = res.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await res.json()
    : await res.text();

  if (!res.ok) {
    throw new Error(
      (data && data.message) || `HTTP ${res.status}: ${JSON.stringify(data)}`
    );
  }

  return data;
}
