import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { motion } from "framer-motion";
import axios from "axios";
import Heading from "../utils/Heading";
import { toast } from "sonner";

interface IFormInput {
  name: string;
  email: string;
  message: number;
}
const Contact = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    const response = await axios.post(
      "https://portfolio-backend-2g60.onrender.com/api/send-email",
      data
    );
    console.log(response);
    
    if (response.status == 201) {
      toast(
        response.data.message || `please check the email sent to ${data.email}`,
        {
          description: new Date().toLocaleString(),
        }
      );
    } else {
      toast(`something gone wrong falied to send Email to ${data.email}`, {
        description: new Date().toLocaleString(),
      });
    }
  };

  return (
    <motion.div
      className="min-h-screen w-full grid place-items-center px-3"
      initial={{ opacity: 0, scale: 0, x: "-100%" }}
      animate={{ opacity: 1, scale: 1, x: 0, direction: "revert" }}
    >
      <form
        className="min-w-[350px] shadow-[0.1px_0.1px_8px_0.1px_black] rounded-lg w-full space-y-4 p-5 max-w-[500px] border grid"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading label={"Send Email"} />
        <Input
          type="text"
          name="name"
          register={register}
          placeholder="Name"
          required
        />
        <Input
          type="email"
          register={register}
          name="email"
          placeholder="email"
          required
        />
        <textarea
          {...register("message")}
          placeholder="write your email .  .  .  .  . "
          className="border-[1px] bg-transparent min-h-32 border-gray-400 rounded-lg p-2 outline-none"
        />
        <Button
          //   disabled={true}
          type="submit"
          label="Send Email"
          onClick={() => {}}
        />
      </form>
    </motion.div>
  );
};

export default Contact;
