import { SubmitHandler, useForm } from "react-hook-form";
import { TReview } from "@/types/common";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TReview>({
    defaultValues: {
      rating: undefined,
    },
  });

  const onSubmit: SubmitHandler<TReview> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 border p-4 rounded-md"
      >
        <h1>Leave A Review</h1>
        <div className="mb-8">
          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              //   defaultValue={email ? email.toString() : ""}
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message as string}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 mb-8 gap-4">
          <div>
            <label className="block text-white font-medium mb-1">Title</label>
            <input
              type="text"
              {...register("title", { required: "title is required" })}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter Title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">
                {errors.title.message as string}
              </p>
            )}
          </div>
          <div>
            <label className="block text-white font-medium mb-1">Rating</label>
            <input
              type="number"
              {...register("rating", {
                required: "Rating is required",
                min: {
                  value: 1,
                  message: "Rating must be at least 1",
                },
                max: {
                  value: 5,
                  message: "Rating must not exceed 5",
                },
              })}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter rating"
            />
            {errors.rating && (
              <p className="text-red-500 text-sm">
                {errors.rating.message as string}
              </p>
            )}
          </div>
        </div>
        <div>
          <label className="block text-white font-medium mb-1">
            Your Message
          </label>
          <textarea
            {...register("message", {
              required: "Message is required",
            })}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Write A Review"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">
              {errors.message.message as string}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-primary  text-white py-2 rounded hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
