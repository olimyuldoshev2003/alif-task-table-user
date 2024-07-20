import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AddUserModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [status, setStatus] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");

  const handleStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Add new User
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <form
          action=""
          className="p-4 w-[300px] flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <div className="block_close_modal_button flex justify-end">
            <span
              className="text-end text-[24px] font-semibold cursor-pointer"
              onClick={handleClose}
            >
              &times;
            </span>
          </div>
          <h1 className="text-center text-[19px] font-semibold">
            Add new user
          </h1>
          <div className="label_input_name flex flex-col gap-1">
            <label
              className="cursor-pointer flex items-center gap-1 text-[15px] font-semibold"
              htmlFor="firstName"
            >
              First Name
              <span className="text-red-700">* </span>
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              className="border-gray-400 border-[1px] px-2 py-1 rounded-[5px] outline-none text-[14px]"
              value={firstName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setFirstName(event.target.value)
              }
            />
          </div>
          <div className="label_input_surname flex flex-col gap-1">
            <label
              className="cursor-pointer flex items-center gap-1 text-[15px] font-semibold"
              htmlFor="lastName"
            >
              Last Name <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Doe"
              className="border-gray-400 border-[1px] px-2 py-1 rounded-[5px] outline-none text-[14px]"
              value={lastName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setLastName(event.target.value)
              }
            />
          </div>
          <div className="label_input_email flex flex-col gap-1">
            <label
              className="cursor-pointer flex items-center gap-1 text-[15px] font-semibold"
              htmlFor="email"
            >
              Email <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="border-gray-400 border-[1px] px-2 py-1 rounded-[5px] outline-none text-[14px]"
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setEmail(event.target.value)
              }
            />
          </div>
          <div className="label_input_status flex flex-col gap-1">
            <label
              className="cursor-pointer flex items-center gap-1 text-[15px] font-semibold"
              htmlFor="status"
            >
              Status <span className="text-red-700">*</span>
            </label>
            <select
              id="status"
              className="border-gray-400 border-[1px] px-2 py-1 rounded-[5px] outline-none text-[14px] cursor-pointer"
              value={status}
              onChange={handleStatusChange}
            >
              <option value="">Select Status</option>
              <option value="true">Online</option>
              <option value="false">Offline</option>
            </select>
          </div>
          <div className="label_input_phone flex flex-col gap-1">
            <label
              className="cursor-pointer flex items-center gap-1 text-[15px] font-semibold"
              htmlFor="numberPhone"
            >
              Phone <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="numberPhone"
              placeholder="55-555-55-55"
              className="border-gray-400 border-[1px] px-2 py-1 rounded-[5px] outline-none text-[14px]"
              value={phone}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setPhone(event.target.value)
              }
            />
          </div>
          <div className="label_input_city flex flex-col gap-1">
            <label
              htmlFor="city"
              className="cursor-pointer flex items-center gap-1 text-[15px] font-semibold"
            >
              City <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              id="city"
              placeholder="New York"
              className="border-gray-400 border-[1px] px-2 py-1 rounded-[5px] outline-none text-[14px]"
              value={city}
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setCity(event.target.value)
              }
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ marginTop: `20px` }}
          >
            Add
          </Button>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
