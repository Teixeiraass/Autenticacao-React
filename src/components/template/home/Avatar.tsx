import DefaultAvatar from '../../../assets/avatar.jpg'

interface AvatarProps {
    avatar: string | undefined | null
}

const Avatar = ({ avatar }: AvatarProps) => {

    return (
        <img src={avatar || DefaultAvatar} alt="Avatar" className='w-[77px] rounded-[8px]' />
    )

}

export default Avatar;