import {
  useAllBuysQuery,
  useBuyPropertyMutation,
} from "@/redux/features/buyProperty/buy.property.api";
import { TListing } from "@/types/common";
import { JWTDecode } from "@/utils/jwtDecode";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
}

const ProposalForm = ({ property }: { property: TListing }) => {
  const { title } = property;
  const [makeBuyProposal] = useBuyPropertyMutation();
  const { data: buys } = useAllBuysQuery("");
  const isBrought = buys?.find(
    (buy: { refId: string }) => buy.refId == property._id
  );
  const user = JWTDecode();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { _id, ...rest } = property;
    try {
      const propertyData = {
        ...rest,
        ...data,
        status: "pending",
        refId: _id,
      };
      const res = await makeBuyProposal(propertyData);
      toast.success(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            defaultValue={user?.name ? user?.name : ""}
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message as string}
            </p>
          )}
        </div>
        <div>
          <input
            defaultValue={user?.email ? user?.email.toString() : ""}
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message as string}
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            {...register("contactNumber", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Enter a valid contact number",
              },
            })}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Phone"
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-sm">
              {errors.contactNumber.message as string}
            </p>
          )}
        </div>
        <div>
          <textarea
            placeholder={`Hello, I am interested in "${title}" because`}
            {...register("message", {
              required: "Message is required",
            })}
            rows={6}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">
              {errors.message.message as string}
            </p>
          )}
        </div>
        {user?.role == "buyer" && (
          <button
            disabled={isBrought !== undefined}
            type="submit"
            className={`${
              isBrought !== undefined
                ? "bg-gray-500"
                : "bg-[#06a788]  hover:bg-green-700"
            } py-2 rounded-md text-white font-medium w-full mt-4`}
          >
            {isBrought == undefined
              ? "Submit Your Proposal"
              : "Alreadry in process"}
          </button>
        )}
      </form>
    </div>
  );
};

export default ProposalForm;
