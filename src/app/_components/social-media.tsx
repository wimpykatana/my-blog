import Link from 'next/link';
import {
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaYoutube,
    FaLinkedin,
} from 'react-icons/fa';

export function SocialMedia(){
    return (
        <div>
            <h3 className='text-2xl text-center mb-7 text-white'>Visit my Social Media</h3>
            <div className='flex justify-center space-x-4'>
                <Link href='https://www.instagram.com/' target='_blank'>
                    <FaInstagram className='text-4xl text-white hover:text-purple-300' />
                </Link>
                <Link href='https://www.twitter.com/' target='_blank'>
                    <FaTwitter className='text-4xl text-white hover:text-blue-400' />
                </Link>
                <Link href='https://www.github.com/' target='_blank'>
                    <FaGithub className='text-4xl text-white hover:text-black' />
                </Link>
                <Link href='https://www.youtube.com/' target='_blank'>
                    <FaYoutube className='text-4xl text-white hover:text-red-600' />
                </Link>
                <Link href='https://www.linkedin.com/' target='_blank'>
                    <FaLinkedin className='text-4xl text-white hover:text-blue-500' />
                </Link>
            </div>
        </div>
    )
}