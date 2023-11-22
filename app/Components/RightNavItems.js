import Icon from "./Icon";
import Avatar from "./Avatar";

function RightNavItems() {
  return (
    <div className="flex space-x-4 items-center">
      <p className="link">Gmail</p>
      <p className="link">Image</p>
      <Icon />
      <Avatar url="https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  );
}

export default RightNavItems;
