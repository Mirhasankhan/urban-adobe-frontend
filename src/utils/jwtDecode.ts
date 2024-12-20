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
  // Return null if there's no token or if the code is running on the server
  return null;
};

// "use client";
// import { jwtDecode, JwtPayload } from "jwt-decode";

// interface ExtendedJwtPayload extends JwtPayload {
//   role?: string;
//   name?: string;
//   email?: string;
// }

// export const JWTDecode = () => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     const decoded = jwtDecode<ExtendedJwtPayload>(token);
//     return decoded;
//   } else {
//     return null;
//   }
// };

// "use client";

// import { useState, useEffect } from "react";
// import {jwtDecode} from "jwt-decode";

// const useDecodedToken = () => {
//     const [decodedToken, setDecodedToken] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             const decoded = jwtDecode(token as string);
//             setDecodedToken(decoded);
//         }
//     }, []);

//     return decodedToken;
// };
