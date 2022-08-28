const Notification = (props) => {
  const { status, message } = props;

  let styling;

  if (status === "success") {
    styling = {
      bgColor: "bg-green-600",
      textColor: "text-black",
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

  return (
    <div className={`${styling.bgColor} ${styling.textColor}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <h3 className="text-xl font-bold tracking-widest">{styling.status}</h3>
        <p className="text-md tracking-wider font-semibold">{message}</p>
      </div>
    </div>
  );
};

export default Notification;
