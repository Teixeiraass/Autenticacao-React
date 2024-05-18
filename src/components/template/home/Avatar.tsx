interface AvatarProps {
    avatar: {
        id: number,
        image_high_url: string
        image_medium_url: string
        image_low_url: string
    } | undefined | null;
}

const AvatarComponent = ({ avatar }: AvatarProps) => {
    const defaultAvatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png";
    const avatarUrl = avatar?.image_medium_url || defaultAvatar;

    return (
        <img src={avatarUrl} alt="Avatar" className='w-[77px] rounded-[8px]' />
    );
}
export default AvatarComponent;