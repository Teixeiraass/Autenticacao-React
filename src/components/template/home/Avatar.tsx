import { AvatarItensProps } from "../../interface/AvatarInterface";

interface AvatarProps{
    avatar: AvatarItensProps;
}

const AvatarComponent = ({ avatar }: AvatarProps) => {

    return (
        <img src={avatar.image_medium_url || "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"} alt="Avatar" className='w-[77px] rounded-[8px]' />
    )

}

export default AvatarComponent;