const Dialog = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center backdrop-blur-sm backdrop-brightness-50 ">
      {children}
    </div>
  );
};

export default Dialog;
