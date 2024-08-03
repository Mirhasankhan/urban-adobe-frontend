"use client"
import { jwtDecode, JwtPayload } from "jwt-decode";

interface ExtendedJwtPayload extends JwtPayload {
    role?: string;
    name?: string
    email?: string
}

export const JWTDecode = () => {
    const token = localStorage.getItem("token")
    if (token) {
        const decoded = jwtDecode<ExtendedJwtPayload>(token)
        return decoded
    }
    else {
        return null
    }
}

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
