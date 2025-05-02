"using client";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface ExtendedJwtPayload extends JwtPayload {
  role?: string;
  name?: string;
  email?: string;
}

export const JWTDecode = () => {
  // Check if window is defined (browser environment)
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode<ExtendedJwtPayload>(token);
      return decoded;
    }
  }
  return null;
};
