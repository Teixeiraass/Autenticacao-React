import DefaultAvatar from '../../../assets/default-avatar.jpg'

interface AvatarProps {
    avatar: string | null
}

const Avatar = ({avatar}: AvatarProps) => {
    if(avatar){
        return(
            <img src={avatar} alt="Avatar" className='w-[77px] rounded-[8px]' />
        )
    }else{
        return(
            <img src={DefaultAvatar} alt="Default avatar" className='w-[77px]'/>
        )
    }
}

export default Avatar;