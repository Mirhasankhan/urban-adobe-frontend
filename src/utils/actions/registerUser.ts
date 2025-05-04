"use server";

import { Inputs } from "@/app/(withCommonLayout)/register/page";
import axios from "axios";
import { toast } from "sonner";

export const registerUser = async (newUser: Inputs) => {
  try {
    const response = await axios.post(
      "https://urban-adobe-backend.vercel.app/api/v1/register",
      newUser
    );
    toast.success(response.data.message);
    return response;
  } catch (err: any) {
    toast.error(err.response.data.message);
    return;
  }
};
