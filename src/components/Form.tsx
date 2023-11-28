import { useForm } from 'react-hook-form';
import Error from './ui/Error';

const Form = ({ closeForm, openContactList }) => {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    openContactList(true);
  };

  const { errors } = formState;
  // console.log(errors?.name?.message);

  return (
    <div className="flex scale-75 flex-col items-center justify-center rounded-md bg-white p-8 sm:scale-100">
      <h1 className="text-center text-xl font-medium">Create Contact</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              id="firstName"
              className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-md border bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
              placeholder=""
              type="text"
              {...register('firstName', {
                required: 'This field is required',
              })}
            />
            {errors?.firstName?.message && (
              <Error>{errors.firstName.message}</Error>
            )}
            <label
              htmlFor="firstName"
              className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent"
            >
              First Name
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              id="lastName"
              className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-md border bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
              placeholder=""
              type="text"
              {...register('lastName', {
                required: 'This field is required',
              })}
            />
            {errors?.lastName?.message && (
              <Error>{errors.lastName.message}</Error>
            )}
            <label
              htmlFor="lastName"
              className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent"
            >
              Last Name
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              id="email"
              className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-md border bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
              placeholder=""
              type="email"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors?.email?.message && <Error>{errors.email.message}</Error>}
            <label
              htmlFor="email"
              className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent"
            >
              Email
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              id="phoneNumber"
              className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-md border bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
              placeholder=""
              type="tel"
              {...register('phoneNumber', {
                required: 'This field is required',
                minLength: {
                  value: 10,
                  message: 'Phone Number should have 10 digits',
                },
              })}
            />
            {errors?.phoneNumber?.message && (
              <Error>{errors.phoneNumber.message}</Error>
            )}
            <label
              htmlFor="phoneNumber"
              className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent"
            >
              Phone Number
            </label>
          </div>
        </div>
        <div className="flex flex-col place-content-around sm:flex-row">
          <button
            className=" w-100 mt-6 block select-none rounded-lg bg-pink-500 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="reset"
            data-ripple-light="true"
            onClick={() => closeForm((p: boolean) => !p)}
          >
            Cancel
          </button>
          <button
            className=" w-100 mt-6 block  select-none rounded-lg bg-pink-500 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
