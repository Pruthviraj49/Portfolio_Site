import { useRouter } from 'next/router'
import Link from 'next/link'
const ScrollLink = ({ href, children }) => {
    const router = useRouter()


    const handleClick = (event) => {
        event.preventDefault()
        const element = document.getElementById(href.substring(1))
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        } else {
            router.push(href)
        }

    }

    return (
        <Link href={href} onClick={handleClick} >
            {children}
        </Link>
    )
}

export default ScrollLink




