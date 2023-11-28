import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { MdDelete, MdEdit } from 'react-icons/md';

const user = {
  firstName: 'saad',
  lastName: 'mahimkar',
  email: 'saadmahimkar@gmail.com',
  phoneNumber: '8888054482',
};

const ContactList = () => {
  return (
    <>
      <header className="flex h-16 items-center justify-center bg-blue-400 ">
        <h1 className="text-center text-xl font-medium text-white">
          React Contact App
        </h1>
      </header>

      <div className="flex items-center justify-center py-5">
        <input
          placeholder="search of user..."
          type="search"
          className="ml-2 border-b-2 border-blue-300 outline-none"
        />
      </div>

      <Card className="bg-blue flex w-fit transform flex-col items-center justify-center overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl">
        <CardHeader className=" relative rounded-t-xl p-0">
          <div className="h-28 rounded-t-xl bg-[url('/public/contact-background.jpg')] bg-cover bg-no-repeat">
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          </div>
          <div className="absolute flex w-full justify-center">
            <img src="../public/user-avatar.png" className="mt-10 w-1/3" />
          </div>
          {/* <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription> */}
        </CardHeader>

        <CardContent className="mt-20 flex flex-col items-center ">
          <div className="flex text-xl font-semibold text-pink-700">
            <p className="text-center">{user.firstName}</p>
            <p className="ml-1">{user.lastName}</p>
          </div>

          <div className="flex flex-col items-center pt-5 font-light">
            <p>{user.email}</p>
            <p>{user.phoneNumber}</p>
          </div>
        </CardContent>
        <CardFooter className="mt-3 flex w-full place-content-around  p-3">
          <Button
            variant="outline"
            className="border-2 border-slate-300 hover:border-pink-500 "
          >
            <MdEdit />
            Edit
          </Button>
          <Button
            variant="outline"
            className="border-2 border-slate-300 hover:border-pink-500 "
          >
            <MdDelete />
            Delete
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ContactList;
