import { MdOutlineAddCircle } from 'react-icons/md';

const Home = ({ openForm }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <img
        className="w-64"
        src="../public/contact-book-color-icon.svg"
        alt="Add contacts"
      />

      <div className="flex items-center justify-center ">
        <h1 className="mt-3 text-center text-2xl font-semibold ">
          Add new contacts
        </h1>
        <MdOutlineAddCircle
          onClick={() => openForm((p: boolean) => !p)}
          className="ml-3 mt-3 cursor-pointer text-3xl hover:text-green-700 active:text-green-600 "
        />
      </div>
    </div>
  );
};

export default Home;
