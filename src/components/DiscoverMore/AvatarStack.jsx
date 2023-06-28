import { avatars } from "@/utils/DiscoverMoreData";

const AvatarStack = () => {
  return (
    <div className="avatar-group -space-x-4">
    {
      avatars.map((avatar, index) => (
        <div className="avatar" key={index}>
          <div className="">
            <img src={avatar.src} />
          </div>
        </div>
      ))
    }
    </div>
  );
};

export default AvatarStack;