import { apiFetch } from "./apiClient";

export const register = (payload) =>
  apiFetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const login = (payload) =>
  apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
