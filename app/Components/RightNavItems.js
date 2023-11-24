import Icon from "./Icon";
import Avatar from "./Avatar";

function RightNavItems() {
  return (
    <div className="flex space-x-4 items-center">
      <p className="link">Gmail</p>
      <p className="link">Image</p>
      <Icon />
      <Avatar />
    </div>
  );
}

export default RightNavItems;
