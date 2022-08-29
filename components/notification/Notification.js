import NotifModal from "./notification-overlay";

const Notification = (props) => {
  const { status, message } = props;

  let styling;

  if (status === "success") {
    styling = {
      bgColor: "bg-green-700",
      textColor: "text-white",
      status: "Success",
    };
  } else if (status === "pending") {
    styling = {
      bgColor: "bg-amber-400",
      textColor: "text-black",
      status: "Pending",
    };
  } else if (status === "error") {
    styling = {
      bgColor: "bg-red-400",
      textColor: "text-black",
      status: "Error",
    };
  }

  // <NotifModal>
  //     <div className={`bg-green-700 text-white`}>
  //       <div className="container mx-auto flex justify-center lg:justify-between items-center p-4">
  //         <h3 className="hidden lg:block text-lg font-bold tracking-widest">
  //           testing
  //         </h3>
  //         <p className="border-2 border-red-600 text-sm tracking-wider font-semibold">
  //           your message has been sent successfully
  //         </p>
  //       </div>
  //     </div>
  //   </NotifModal>

  return (
    <NotifModal>
      <div className={`${styling.bgColor} ${styling.textColor}`}>
        <div className="container mx-auto flex justify-center lg:justify-between items-center p-4">
          <h3 className="hidden lg:block text-lg font-bold tracking-widest">
            {styling.status}
          </h3>
          <p className="text-sm tracking-wider font-semibold">{message}</p>
        </div>
      </div>
    </NotifModal>
  );
};

export default Notification;
